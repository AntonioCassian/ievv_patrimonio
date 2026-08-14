import authService from "../services/AuthService.js";
class AuthController {
    // =========================
    // LOGIN
    // =========================
    login = async (req, res) => {
        try {
            const result = await authService.login(req.body);
            res.cookie("access_token", result.token, {
                httpOnly: true,
                secure: process.env.NODE_ENV ===
                    "production",
                sameSite: "lax",
                maxAge: 24 * 60 * 60 * 1000,
                path: "/",
            });
            return res.status(200).json({
                success: true,
                message: "Login realizado com sucesso.",
                user: result.user,
                permissions: result.permissions,
            });
        }
        catch (error) {
            console.error(error);
            if (error instanceof Error) {
                return res.status(401).json({
                    success: false,
                    message: error.message,
                });
            }
            return res.status(500).json({
                success: false,
                message: "Erro interno do servidor.",
            });
        }
    };
    // =========================
    // LOGOUT
    // =========================
    logout = async (_req, res) => {
        res.clearCookie("access_token", {
            httpOnly: true,
            secure: process.env.NODE_ENV ===
                "production",
            sameSite: "lax",
            path: "/",
        });
        return res.status(200).json({
            success: true,
            message: "Logout realizado com sucesso.",
        });
    };
    // =========================
    // FORGOT PASSWORD
    // =========================
    forgotPassword = async (req, res) => {
        try {
            const result = await authService.forgotPassword(req.body);
            return res.status(200).json({
                success: true,
                ...result,
            });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({
                success: false,
                message: "Não foi possível processar a solicitação.",
            });
        }
    };
    // =========================
    // RESET PASSWORD
    // =========================
    resetPassword = async (req, res) => {
        try {
            const result = await authService.resetPassword(req.body);
            return res.status(200).json({
                success: true,
                ...result,
            });
        }
        catch (error) {
            console.error(error);
            if (error instanceof Error) {
                return res.status(400).json({
                    success: false,
                    message: error.message,
                });
            }
            return res.status(500).json({
                success: false,
                message: "Erro interno do servidor.",
            });
        }
    };
    me = async (req, res) => {
        try {
            const user = req.user;
            if (!user) {
                return res.status(401).json({
                    success: false,
                    message: "Usuário não autenticado.",
                });
            }
            const data = await authService.getMe(user.id);
            return res.status(200).json({
                success: true,
                message: "Dados do usuário retornados com sucesso.",
                data,
            });
        }
        catch (error) {
            console.error(error);
            if (error instanceof Error &&
                error.message === "USER_NOT_FOUND") {
                return res.status(404).json({
                    success: false,
                    message: "Usuário não encontrado.",
                });
            }
            return res.status(500).json({
                success: false,
                message: "Erro interno ao buscar usuário.",
            });
        }
    };
}
export default new AuthController();
//# sourceMappingURL=AuthController.js.map