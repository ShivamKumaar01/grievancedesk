const express=require('express');
const router=express.Router();

// import controllers
const{registerGriev,adminSignup,adminLogin,fetchingData,fetchDataById,updateGrievanceStatusAndComment,fetchDataByGrievanceCategory}=require("../controllers/registerGriev");



// define routes
router.post('/register',registerGriev);
router.post('/adminsingup',adminSignup);
router.post('/adminLogin',adminLogin);
router.get('/fetchingdata',fetchingData);
router.get('/register/:id',fetchDataById);
router.post('/update-status/:id', updateGrievanceStatusAndComment);
router.get('/fetchDataByGrievanceCategory/:grievancecategory', fetchDataByGrievanceCategory);
module.exports =router;