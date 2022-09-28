import express from "express";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

import { routes } from "./routes";

const server = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

server.set("view engine", "ejs");
server.set("views", join(__dirname, "views"));

server.use(express.urlencoded({ extended: true }));
server.use(express.static("public"));
server.use(routes);

server.listen(3048, () => console.log("Server running at port 3048"));