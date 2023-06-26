import { Router } from "express";
import * as controller from "../controllers/controller.js"

const router = Router();

router.get("/questions", controller.getQuestions);
router.post("/questions", controller.insertQuestions);
router.delete("/questions",controller.dropQuestions );

//router.route("/questions").get(controller.getQuestions).post(controller.insertQuestions);

router.get("/result", controller.getResult);
router.post("/result", controller.storeResult);
router.delete("/result", controller.dropResult);

export default router;