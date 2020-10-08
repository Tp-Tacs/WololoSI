// For testing purposes

import { Router } from "express";
import path from "path";

export const router = Router();

const rootDir: string = path.resolve("./");
const views_dir = path.join(rootDir, "test_client");

router.get("/", (_req, res) => {
    res.sendFile(path.join(views_dir, "index.html"));
});
