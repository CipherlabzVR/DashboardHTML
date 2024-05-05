import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import Grid from "@mui/material/Grid";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  TextField,
  Typography,
} from "@mui/material";
import BASE_URL from "@/components/Services/api";

const validationSchema = Yup.object().shape({
  FirstName: Yup.string().required("First Name is required"),
  LastName: Yup.string().required("Last Name is required"),
  Email: Yup.string().email("Invalid email").required("Email is required"),
  Address: Yup.string().required("Address is required"),
  MobileNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Mobile Number must be a 10-digit number")
    .required("Mobile Number is required"),
  Password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
      "Password must contain at least 8 characters, including at least one lowercase letter, one uppercase letter, one number, and one special character (!@#$%^&*)"
    ),
  ConfirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("Password"), null], "Passwords must match"),
});

export default function AddUserDialog({fetchItems}) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (values) => {
    fetch(`${BASE_URL}/User/SignUp`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
      
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.statusCode == 200){
          toast.success(data.message);
          setOpen(false);
          fetchItems();
        }else{
          toast.error(data.message);
        }
      })
      .catch((error) => {
        toast.error(error.message || 'Sign up failed. Please try again.');
      });
  };

  return (
    <>
    <ToastContainer/>
      <Button onClick={handleClickOpen("paper")} variant="outlined">
        <AddIcon
          sx={{
            position: "relative",
            top: "-2px",
          }}
          className="mr-5px"
        />{" "}
        Create New User
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Create User</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{
              FirstName: "",
              LastName: "",
              Email: "",
              Address: "",
              MobileNumber: "",
              Password: "",
              ConfirmPassword: "",
              UserType: 2,
              IsAgeVerified: 1,
              EmailConfirmed: 0,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                  </Grid>

                  <Grid item lg={6} xs={12}>
                    <Typography
                      component="label"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "10px",
                        display: "block",
                      }}
                    >
                      First Name
                    </Typography>
                    <Field
                      as={TextField}
                      fullWidth
                      name="FirstName"
                      error={touched.FirstName && Boolean(errors.FirstName)}
                      helperText={touched.FirstName && errors.FirstName}
                    />
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <Typography
                      component="label"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "10px",
                        display: "block",
                      }}
                    >
                      Last Name
                    </Typography>
                    <Field
                      as={TextField}
                      fullWidth
                      name="LastName"
                      error={touched.LastName && Boolean(errors.LastName)}
                      helperText={touched.LastName && errors.LastName}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      component="label"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "10px",
                        display: "block",
                      }}
                    >
                      Email
                    </Typography>
                    <Field
                      as={TextField}
                      fullWidth
                      name="Email"
                      error={touched.Email && Boolean(errors.Email)}
                      helperText={touched.Email && errors.Email}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      component="label"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "10px",
                        display: "block",
                      }}
                    >
                      Address
                    </Typography>
                    <Field
                      as={TextField}
                      fullWidth
                      name="Address"
                      error={touched.Address && Boolean(errors.Address)}
                      helperText={touched.Address && errors.Address}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      component="label"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "10px",
                        display: "block",
                      }}
                    >
                      Mobile Number
                    </Typography>
                    <Field
                      as={TextField}
                      fullWidth
                      name="MobileNumber"
                      error={
                        touched.MobileNumber && Boolean(errors.MobileNumber)
                      }
                      helperText={touched.MobileNumber && errors.MobileNumber}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      component="label"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "10px",
                        display: "block",
                      }}
                    >
                      Password
                    </Typography>
                    <Field
                      as={TextField}
                      fullWidth
                      name="Password"
                      type="password"
                      error={touched.Password && Boolean(errors.Password)}
                      helperText={touched.Password && errors.Password}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      component="label"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "10px",
                        display: "block",
                      }}
                    >
                      Confirm Password
                    </Typography>
                    <Field
                      as={TextField}
                      fullWidth
                      name="ConfirmPassword"
                      type="password"
                      error={
                        touched.ConfirmPassword &&
                        Boolean(errors.ConfirmPassword)
                      }
                      helperText={
                        touched.ConfirmPassword && errors.ConfirmPassword
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{
                        textTransform: "capitalize",
                        borderRadius: "8px",
                        fontWeight: "500",
                        fontSize: "16px",
                        padding: "12px 10px",
                        color: "#fff !important",
                      }}
                    >
                      Create User
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </>
  );
}
