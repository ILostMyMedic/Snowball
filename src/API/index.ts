import { Router } from "express";
import logger from "../utils/logger";

import { router as memberRouter } from "./routes/member";
import { router as gameRouter } from "./routes/game";
import { router as authRouter } from "./routes/guild";

export const router = Router();

router.use("/member", memberRouter);
router.use("/game", gameRouter);
router.use("/guild", authRouter);
