import { configDotenv } from "dotenv";
import express from "express";
import cors from "cors";

configDotenv();


const ApiServer = () => {
    console.log("[=] version 1 UP");

    const corsOptions = {
        origin: 'http://localhost:3000',
        methods: 'GET,POST,PUT,DELETE',
        credentials: true,
    }

    const PORT = process.env.PORT || 4440;

    const app = express();

    app.use(express.json());
    app.use(cors(corsOptions));

    app.listen(PORT, () => {
        console.log(`[*] Server is Online @ http://localhost:${PORT}`);
    });

    app.get("/", (req, res) => {
        const API_home_page = "Job_portal Api";
        res.send(API_home_page).status(200);
    });


    //routes





}

export default ApiServer;