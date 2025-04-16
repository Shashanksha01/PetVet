// API for adding doctor
import validator from "validator";
import bycrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import doctorModel from "../models/doctorModel.js";

const addDoctor = async (req, res) => {
  const imageFile = req.file;

  try {
    const {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      available,
      fees,
      address,
      date,
      slotBooking,
    } = req.body;
    const imageFile = req.file;

    if (
      !name ||
      !email ||
      !password ||
      !speciality ||
      !degree ||
      !experience ||
      !about ||
      !available ||
      !fees ||
      !address
    ) {
      return res.json({ success: false, message: `Missing Details` });
    }

    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: `Please enter valid email` });
    }

    if (password.length < 8) {
      return res.json({ success: false, message: `Password is too short` });
    }

    // hashing password of doctor
    const salt = await bycrypt.genSalt(10);
    const hashedPassword = await bycrypt.hash(password, salt);

    // upload image in cloudinary
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });
    const imageUrl = imageUpload.secure_url;

    const doctorData = {
      name,
      email,
      image: imageUrl,
      password: hashedPassword,
      speciality,
      degree,
      experience,
      about,
      fees,
      address: JSON.parse(address),
      date: Date.now(),
    };

    const newDoctorData = new doctorModel(doctorData);
    await newDoctorData.save();

    res.json({ success: true, message: `Successfully uploaded` });

    console.log({
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      available,
      fees,
      address,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: `Something went wrong ${error.message}`,
    });
  }
};

export { addDoctor };
