import express from "express";
import router from "./routes/index.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.get("/", (_req, res) => {
    res.json({
        message: "API funcionando!",
    });
});
export default app;
//# sourceMappingURL=app.js.map