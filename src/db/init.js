import { Database } from "./config.js";

const initDb = {
    async init() {
        const database = await Database();

        await database.exec(`CREATE TABLE users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username VARCHAR(50) NOT NULL,
            name VARCHAR(100) NOT NULL,
            sex INT NOT NULL,
            email VARCHAR(100) NOT NULL,
            password TEXT NOT NULL
        )`);

        await database.close();
    }
}

initDb.init();