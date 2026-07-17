import express from "express";
import {
  makePayment,
  bookShow,
  getAllBookings,
} from "../controllers/bookingController.js";

const router = express.Router();

router.post("/makePayment", makePayment);
router.post("/bookShow", bookShow);
router.get("/getAllBookings", getAllBookings);

export default router;