const express= require('express');
const {allUsers, singleuser, editUser, deleteUser, createUserJobsHistory} =require('../controllers/userController');
const {isAuthenticated, isAdmin} = require ('../middleware/auth')
const router= express.Router();

//user routes

//api/allUsers
router.get('/allusers',isAuthenticated, isAdmin, allUsers);


//api/user/id
router.get('/user/:id',isAuthenticated, singleuser);

//api/user/editUser/:id
router.put('/user/edit/:id',isAuthenticated, editUser);

//deleteUser
router.delete('/admin/user/delete/:id',isAuthenticated, isAdmin, deleteUser);

// /user/jobhistory
router.post('/user/jobhistory',isAuthenticated, createUserJobsHistory);



module.exports= router;