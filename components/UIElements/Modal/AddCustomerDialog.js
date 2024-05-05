import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { Typography } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import Grid from "@mui/material/Grid";
import { Field, Form, Formik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BASE_URL from "@/components/Services/api";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  FirstName: Yup.string().required("First Name is required"),
  LastName: Yup.string().required("Last Name is required"),
  Address: Yup.string().required("Address is required"),
  Designation: Yup.string().required("Designation is required"),
  Company: Yup.string().required("Company is required"),
  DateOfBirth: Yup.date().required("Date of Birth is required").nullable(),
  CustomerContactDetails: Yup.array().of(
    Yup.object().shape({
      ContactName: Yup.string().required("Contact Name is required"),
      EmailAddress: Yup.string()
        .email("Invalid email address")
        .required("Email Address is required"),
      ContactNo: Yup.string()
        .required("Contact No is required")
        .matches(/^\d+$/, "Contact No must contain only digits"),
    })
  ),
});

export default function AddCustomerDialog({ fetchItems }) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const [contacts, setContacts] = useState([
    { ContactName: "", ContactNo: "", EmailAddress: "" },
  ]);

  const handleAddContact = () => {
    const newContact = { ContactName: "", ContactNo: "", EmailAddress: "" };
    setContacts([...contacts, newContact]);
  };

  const handleRemoveContact = () => {
    if (contacts.length > 1) {
      const updatedContacts = contacts.slice(0, -1);
      setContacts(updatedContacts);
    }
  };

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const handleSubmit = (values) => {
    const token = localStorage.getItem("token");
    fetch(`${BASE_URL}/Customer/CreateCustomer`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.statusCode == 200) {
          toast.success(data.message);
          setOpen(false);
          fetchItems();
        } else {
          toast.error(data.message);
        }
      })
      .catch((error) => {
        toast.error(
          error.message || "Customer Creation failed. Please try again."
        );
      });
  };

  return (
    <>
      <ToastContainer />
      <Button variant="outlined" onClick={handleClickOpen("paper")}>
        <AddIcon
          sx={{
            position: "relative",
            top: "-2px",
          }}
          className="mr-5px"
        />{" "}
        Create New Customer
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        maxWidth="md"
      >
        <div className="bg-black">
          <DialogTitle id="scroll-dialog-title">Create Customer</DialogTitle>
          <DialogContent>
            <Formik
              initialValues={{
                FirstName: "",
                LastName: "",
                Address: "",
                Designation: "",
                Company: "",
                DateOfBirth: "",
                CustomerContactDetails: contacts.map(() => ({
                  ContactName: "",
                  EmailAddress: "",
                  ContactNo: "",
                })),
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, values }) => (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12}></Grid>
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
                        Designation
                      </Typography>
                      <Field
                        as={TextField}
                        fullWidth
                        name="Designation"
                        error={
                          touched.Designation && Boolean(errors.Designation)
                        }
                        helperText={touched.Designation && errors.Designation}
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
                        Company
                      </Typography>
                      <Field
                        as={TextField}
                        fullWidth
                        name="Company"
                        error={touched.Company && Boolean(errors.Company)}
                        helperText={touched.Company && errors.Company}
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
                        Date Of Birth
                      </Typography>
                      <Field
                        as={TextField}
                        fullWidth
                        type="date"
                        name="DateOfBirth"
                        error={
                          touched.DateOfBirth && Boolean(errors.DateOfBirth)
                        }
                        helperText={touched.DateOfBirth && errors.DateOfBirth}
                      />
                    </Grid>
                    {values.CustomerContactDetails.map((contact, index) => (
                      <React.Fragment key={index}>
                        <Grid item xs={12} md={6} lg={4}>
                          <Typography
                            component="label"
                            sx={{
                              fontWeight: "500",
                              fontSize: "14px",
                              mb: "10px",
                              display: "block",
                            }}
                          >
                            Contact Name
                          </Typography>
                          <Field
                            as={TextField}
                            fullWidth
                            name={`CustomerContactDetails.${index}.ContactName`}
                            error={
                              touched.CustomerContactDetails?.[index]
                                ?.ContactName &&
                              Boolean(
                                errors.CustomerContactDetails?.[index]
                                  ?.ContactName
                              )
                            }
                            helperText={
                              touched.CustomerContactDetails?.[index]
                                ?.ContactName &&
                              errors.CustomerContactDetails?.[index]
                                ?.ContactName
                            }
                          />
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                          <Typography
                            component="label"
                            sx={{
                              fontWeight: "500",
                              fontSize: "14px",
                              mb: "10px",
                              display: "block",
                            }}
                          >
                            Contact No
                          </Typography>
                          <Field
                            as={TextField}
                            fullWidth
                            name={`CustomerContactDetails.${index}.ContactNo`}
                            error={
                              touched.CustomerContactDetails?.[index]
                                ?.ContactNo &&
                              Boolean(
                                errors.CustomerContactDetails?.[index]
                                  ?.ContactNo
                              )
                            }
                            helperText={
                              touched.CustomerContactDetails?.[index]
                                ?.ContactNo &&
                              errors.CustomerContactDetails?.[index]?.ContactNo
                            }
                          />
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
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
                            name={`CustomerContactDetails.${index}.EmailAddress`}
                            error={
                              touched.CustomerContactDetails?.[index]
                                ?.EmailAddress &&
                              Boolean(
                                errors.CustomerContactDetails?.[index]
                                  ?.EmailAddress
                              )
                            }
                            helperText={
                              touched.CustomerContactDetails?.[index]
                                ?.EmailAddress &&
                              errors.CustomerContactDetails?.[index]
                                ?.EmailAddress
                            }
                          />
                        </Grid>
                      </React.Fragment>
                    ))}

                    <Grid
                      item
                      display="flex"
                      justifyContent="space-between"
                      xs={12}
                    >
                      <Button onClick={handleAddContact}>+ add new</Button>
                      {contacts.length > 1 && (
                        <Button color="error" onClick={handleRemoveContact}>
                          - Remove
                        </Button>
                      )}
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
                        Create Customer
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </DialogContent>
        </div>
      </Dialog>
    </>
  );
}
