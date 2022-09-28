import sqlite3 from "sqlite3";
import { open } from "sqlite";

export function Database() {
    return open({
        filename: "./src/db/fortify.sqlite",
        driver: sqlite3.Database,
    });
}