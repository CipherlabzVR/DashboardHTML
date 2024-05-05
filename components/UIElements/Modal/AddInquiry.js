import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import BASE_URL from "@/components/Services/api";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const validationSchema = Yup.object().shape({
  CustomerName: Yup.string().required("Customer Name is required"),
  StyleName: Yup.string().required("Style Name is required"),  
});

export default function AddInquiry() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [customersLists, setCustomersLists] = useState([]);
  const [selectedCustomerName, setSelectedCustomerName] = useState("");

  const fetchCustomers = async () => {
    try {
      const response = await fetch(`${BASE_URL}/Customer/GetAllCustomer`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch customers");
      }

      const data = await response.json();
      setCustomersLists(data.result);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleSubmit = (values) => {
    console.log(values);
  }

  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>
        + new inquiry
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="bg-black">
          <Formik
            initialValues={{
              CustomerName: "",
              StyleName: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, values, setFieldValue }) => (
              <Form>
                <Box>
                  <Grid container>
                    <Grid item xs={12} mt={2}>
                      <Typography
                        as="h5"
                        sx={{
                          fontWeight: "500",
                          fontSize: "14px",
                          mb: "12px",
                        }}
                      >
                        Customer Name
                      </Typography>
                      <FormControl fullWidth error={touched.CustomerName && Boolean(errors.CustomerName)}>
                        <InputLabel id="demo-simple-select-label">
                          Customer Name
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Customer Name"
                          name="CustomerName"
                          value={selectedCustomerName}
                          onChange={(event) => {
                            setSelectedCustomerName(event.target.value);
                            setFieldValue("CustomerName", event.target.value);
                          }}
                        >
                          {customersLists.map((customer, index) => (
                            <MenuItem key={index} value={`${customer.firstName} ${customer.lastName}`}>
                              {customer.firstName} {customer.lastName}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} mt={2}>
                      <Typography
                        as="h5"
                        sx={{
                          fontWeight: "500",
                          fontSize: "14px",
                          mb: "12px",
                        }}
                      >
                        Style Name
                      </Typography>
                      <Field
                        as={TextField}
                        fullWidth
                        name="StyleName"
                        error={touched.StyleName && Boolean(errors.StyleName)}
                        helperText={touched.StyleName && errors.StyleName}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    mt: 2,
                    textTransform: "capitalize",
                    borderRadius: "8px",
                    fontWeight: "500",
                    fontSize: "13px",
                    padding: "12px 20px",
                    color: "#fff !important",
                  }}
                >
                  Create Inquiry
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </>
  );
}
