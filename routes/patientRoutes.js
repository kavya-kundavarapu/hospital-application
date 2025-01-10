const express = require("express");
const require = express.Router();
const Patient = require("../models/Patient");
router.post("/add-patient", (req, res) => {
  const { name, gender, disease, email, password } = req.body;
  const existingPatient = await Patient.findone({email})
  if(existingPatient){
    return req.status(400).jaon({"message:":"user already existing"})
  }
  const newPatient=new Patient({name,disase,mail,mobile,password})
  await newPatient.save()
  res.status(201).json({"message":"patient created successfully"})
});
module.exports=router