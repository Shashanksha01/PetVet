import express from "express";
import { addDoctor, adminLogin } from "../controller/adminController.js";
import upload from "../middlewares/multer.js";

const adminRouter = express.Router();

adminRouter.post("/add-doctor", upload.single("image"), addDoctor);
adminRouter.post("/login", adminLogin);

export { adminRouter };
