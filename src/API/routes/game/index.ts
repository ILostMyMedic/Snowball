import { Router } from "express";

import Queue from "./queue";
import Play from "./play";
import Leave from "./leave";

export const router = Router();

router.get("/queue", Queue);
router.post("/play", Play);
router.post("/leave", Leave);
