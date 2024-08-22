const express=require('express');
const router=express.Router();

// import controllers
const{registerGriev}=require("../controllers/registerGriev");

// define routes
router.post('/register',registerGriev);
