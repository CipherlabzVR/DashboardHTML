import React, { useEffect, useState } from "react";
import {
  Checkbox,
  Grid,
  ListItemText,
  OutlinedInput,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import BASE_URL from "@/components/Services/api";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

const validationSchema = Yup.object().shape({
  Name: Yup.string().required("Fabric Name is required"),
  IsActive: Yup.bool().required("Please Select Status"),
  InquiryCategoryFabrics: Yup.array()
    .of(
      Yup.object().shape({
        InquiryCategoryId: Yup.number(),
        FabricId: Yup.number(),
        IsActive: Yup.bool(),
      })
    )
    .min(1, "At least one category must be selected"),
});

export default function AddFabric({fetchItems}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [inquiryCategory, setInquiryCategory] = useState([]);
  const [selectedIsActive, setSelectedIsActive] = useState(true);

  const fetchInquiryCategory = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/InquiryCategory/GetAllInquiryCategory`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch Inquiry Category");
      }

      const data = await response.json();
      setInquiryCategory(data.result);
    } catch (error) {
      console.error("Error fetching Inquiry Category:", error);
    }
  };

  useEffect(() => {
    fetchInquiryCategory();
  }, []);

  const handleSubmit = async (values) => {
    const token = localStorage.getItem("token");
    fetch(`${BASE_URL}/Fabric/CreateFabric`, {
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
        toast.error(error.message || "");
      });
  };

  return (
    <>      
      <Button variant="outlined" onClick={handleOpen}>
        + new fabric
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
              Name: "",
              IsActive: selectedIsActive,
              InquiryCategoryFabrics: [],
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
                        Fabric Name
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
                    <Grid item xs={12} mt={2}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-multiple-checkbox-label">
                          Inquiry Categories
                        </InputLabel>
                        <Select
                          labelId="demo-multiple-checkbox-label"
                          id="demo-multiple-checkbox"
                          multiple
                          value={values.InquiryCategoryFabrics.map(
                            (fabric) => fabric.InquiryCategoryId
                          )}
                          onChange={(event) => {
                            setFieldValue(
                              "InquiryCategoryFabrics",
                              event.target.value.map((categoryId) => ({
                                InquiryCategoryId: categoryId,
                                FabricId: 1,
                                IsActive: true,
                              }))
                            );
                          }}
                          input={<OutlinedInput label="Inquiry Categories" />}
                          MenuProps={MenuProps}
                          renderValue={(selected) =>
                            selected.length > 0
                              ? selected
                                  .map(
                                    (id) =>
                                      inquiryCategory.find(
                                        (inquiry) => inquiry.id === id
                                      )?.name || ""
                                  )
                                  .join(", ")
                              : "Select Inquiry Categories"
                          }
                        >
                          {inquiryCategory.map((inquiry, index) => (
                            <MenuItem key={index} value={inquiry.id}>
                              <Checkbox
                                checked={values.InquiryCategoryFabrics.some(
                                  (fabric) =>
                                    fabric.InquiryCategoryId === inquiry.id
                                )}
                              />
                              <ListItemText primary={inquiry.name} />
                            </MenuItem>
                          ))}
                        </Select>
                        {errors.InquiryCategoryFabrics &&
                          touched.InquiryCategoryFabrics && (
                            <Typography variant="body2" color="error">
                              {errors.InquiryCategoryFabrics}
                            </Typography>
                          )}
                      </FormControl>
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
                  Save
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </>
  );
}
