import React, { useState } from "react";
import { Avatar, Box, TextField, Button } from "@mui/material";
import LockClockOutlined from "@mui/icons-material/LockClockOutlined";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("User created successfully");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        });
      } else {
        toast.error(`Error creating user: ${data.message}`);
      }
    } catch (error) {
      console.error("Error creating user:", error);
      toast.error("An error occurred while creating the user");
    }
  };

  return (

    <>
     <Navbar />
    <Box
      sx={{
        height: "81vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        component="form"
        className="form_style border-style"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main", mb: 3 }}>
          <LockClockOutlined />
        </Avatar>
        <TextField
          sx={{ mb: 3 }}
          fullWidth
          InputLabelProps={{
            shrink: true,
        }}
          id="firstName"
          label="First Name"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <TextField
          sx={{ mb: 3 }}
          fullWidth
          id="lastName"
          label="Last Name"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <TextField
          sx={{ mb: 3 }}
          fullWidth
          id="email"
          label="E-mail"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          sx={{ mb: 3 }}
          fullWidth
          id="password"
          label="Password"
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <Button fullWidth variant="contained" type="submit">
          Sign Up
        </Button>
      </Box>
      <ToastContainer />
    </Box>
    <Footer/>
    </>
  );
};

export default SignUp;
