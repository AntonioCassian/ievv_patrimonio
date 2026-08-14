import { UserService } from "../services/UserService.js";
export class UserController {
    userService;
    constructor() {
        this.userService = new UserService();
    }
    create = async (req, res) => {
        try {
            const user = await this.userService.create(req.body);
            return res.status(201).json(user);
        }
        catch (error) {
            console.error(error);
            if (error instanceof Error) {
                return res.status(400).json({
                    message: error.message,
                });
            }
            return res.status(500).json({
                message: "Erro interno do servidor",
            });
        }
    };
    findAll = async (_req, res) => {
        try {
            const users = await this.userService.findAll();
            return res.status(200).json(users);
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({
                message: "Erro ao buscar usuários",
            });
        }
    };
    findById = async (req, res) => {
        try {
            const user = await this.userService.findById(req.params.id);
            return res.status(200).json(user);
        }
        catch (error) {
            console.error(error);
            if (error instanceof Error) {
                return res.status(404).json({
                    message: error.message,
                });
            }
            return res.status(500).json({
                message: "Erro ao buscar usuário",
            });
        }
    };
    update = async (req, res) => {
        try {
            const user = await this.userService.update(req.params.id, req.body);
            return res.status(200).json(user);
        }
        catch (error) {
            console.error(error);
            if (error instanceof Error) {
                return res.status(400).json({
                    message: error.message,
                });
            }
            return res.status(500).json({
                message: "Erro interno do servidor",
            });
        }
    };
    delete = async (req, res) => {
        try {
            await this.userService.delete(req.params.id);
            return res.status(204).send();
        }
        catch (error) {
            console.error(error);
            if (error instanceof Error) {
                return res.status(404).json({
                    message: error.message,
                });
            }
            return res.status(500).json({
                message: "Erro interno do servidor",
            });
        }
    };
}
//# sourceMappingURL=UserController.js.map