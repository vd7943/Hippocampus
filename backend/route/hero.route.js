import express from "express";
import {
  createHero,
  getHero,
  updateHero,
} from "../controller/hero.controller.js";

const router = express.Router();

router.post("/add", createHero);
router.get("/get", getHero);
router.put("/update", updateHero);

export default router;
