import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextField from "@mui/material/TextField";
import BASE_URL from "@/components/Services/api";

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
  Name: Yup.string().required("Name is required"),
});

export default function AddComposition({fetchItems}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedIsActive, setSelectedIsActive] = useState(true);

  const handleSubmit = (values) => {
    const token = localStorage.getItem('token');
    fetch(`${BASE_URL}/Composition/CreateComposition`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
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
        toast.error(error.message || '');
      });
  };

  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>+ new Composition</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="bg-black">
        <Formik
            initialValues={{
              Name: "",
              IsActive: true,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched , setFieldValue}) => (
              <Form>
                <Box mt={2}>
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
                        Composition Name
                      </Typography>
                      <Field
                        as={TextField}
                        fullWidth
                        name="Name"
                        error={touched.Name && Boolean(errors.Name)}
                        helperText={touched.Name && errors.Name}
                      />
                    </Grid>
                    <Grid item xs={12} mt={2}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Status
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Status"
                          name="IsActive"
                          value={selectedIsActive}
                          onChange={(event) => {
                            setSelectedIsActive(event.target.value);
                            setFieldValue("IsActive", event.target.value);
                          }}
                        >
                          <MenuItem value={true}>Active</MenuItem>
                          <MenuItem value={false}>Inactive</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Button
                    variant="contained"
                    color="error"
                    onClick={handleClose}
                    sx={{
                      mt: 2,
                      textTransform: "capitalize",
                      borderRadius: "8px",
                      fontWeight: "500",
                      fontSize: "13px",
                      padding: "12px 20px",
                    }}
                  >
                    Cancel
                  </Button>
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
                    Save
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </>
  );
}
