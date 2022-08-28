import express from "express";
import { AppDataSource } from "./data-source";

AppDataSource.initialize().then(() => {
    const app = express();

    app.use(express.json());

    app.get('/', (req, res) => {
        return res.json("tudo conectado CRUD Test");
    });

    return app.listen(process.env.PORT, () => console.log("server is running"));
});
