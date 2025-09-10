import express from "express";
import { createConfig, getConfig, updateConfig } from "../controller/configurationController.js";

const router = express.Router();

router.post("/", createConfig);
router.get("/:id", getConfig);
router.put("/:id", updateConfig);


export default router;