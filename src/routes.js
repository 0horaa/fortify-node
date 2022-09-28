import { Router } from "express";

export const routes = Router();

routes.get("/", (req, res) => res.render("index"));
routes.get("/cadastro", (req, res) => res.render("register"));