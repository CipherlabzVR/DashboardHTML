import React, { useEffect, useState } from "react";
import { Grid, Tabs, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function AddSizesToInquiry() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState(0);
  const [sizeList, setSizeList] = useState([]);

  const fetchSizeList = async () => {
    try {
      const response = await fetch(`${BASE_URL}/Size/GetAllSize`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch Size List");
      }

      const data = await response.json();
      setSizeList(data.result);
    } catch (error) {
      console.error("Error fetching Size List:", error);
    }
  };

  useEffect(() => {
    fetchSizeList();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>
        + add size
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="bg-black">
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Normal Size" {...a11yProps(0)} />
                <Tab label="Special Size" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <form>
                <Grid container>
                  <Grid item lg={6} p={1} xs={12}>
                    <Typography
                      as="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                    >
                      Size Name
                    </Typography>
                    <FormControl size="small" fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Size Name
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Size Name"
                      >
                        {sizeList.map((size, index) => (
                          <MenuItem key={index} value={index+1}>{size.name}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item lg={6} p={1} xs={12}>
                    <Typography
                      as="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                    >
                      Sleeve
                    </Typography>
                    <FormControl size="small" fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Sleeve
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Sleeve"
                      >
                        <MenuItem value={1}>Long</MenuItem>
                        <MenuItem value={2}>Short</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item lg={4} p={1} xs={6}>
                    <TextField
                      fullWidth
                      size="small"
                      label="2XS"
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>
                  <Grid item lg={4} p={1} xs={6}>
                    <TextField
                      fullWidth
                      size="small"
                      label="XS"
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>
                  <Grid item lg={4} p={1} xs={6}>
                    <TextField
                      fullWidth
                      size="small"
                      label="S"
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>
                  <Grid item lg={4} p={1} xs={6}>
                    <TextField
                      fullWidth
                      size="small"
                      label="M"
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>
                  <Grid item lg={4} p={1} xs={6}>
                    <TextField
                      fullWidth
                      size="small"
                      label="L"
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>
                  <Grid item lg={4} p={1} xs={6}>
                    <TextField
                      fullWidth
                      size="small"
                      label="XL"
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>
                  <Grid item lg={4} p={1} xs={6}>
                    <TextField
                      fullWidth
                      size="small"
                      label="2XL"
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>
                  <Grid item lg={4} p={1} xs={6}>
                    <TextField
                      fullWidth
                      size="small"
                      label="3XL"
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>
                  <Grid item lg={4} p={1} xs={6}>
                    <TextField
                      fullWidth
                      size="small"
                      label="4XL"
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>
                  <Grid item lg={4} p={1} xs={6}>
                    <TextField
                      fullWidth
                      size="small"
                      label="5XL"
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>
                  <Grid item p={1} xs={12}>
                    <TextField
                      fullWidth
                      size="small"
                      label="Total"
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>
                  <Grid item p={1} xs={12}>
                    <Button
                      type="submit"
                      size="small"
                      variant="contained"
                      sx={{
                        mt: 2,
                        textTransform: "capitalize",
                        borderRadius: "5px",
                        fontWeight: "500",
                        fontSize: "13px",
                        color: "#fff !important",
                      }}
                    >
                      Add
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </TabPanel>
            <TabPanel value={value} index={1}>
            <form>
                <Grid container>
                  <Grid item lg={6} p={1} xs={12}>
                    <Typography
                      as="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                    >
                      Size Name
                    </Typography>
                    <TextField
                      fullWidth
                      size="small"
                      label="Size Name"
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>
                  <Grid item lg={6} p={1} xs={12}>
                    <Typography
                      as="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                    >
                      Sleeve
                    </Typography>
                    <FormControl size="small" fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Sleeve
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Sleeve"
                      >
                        <MenuItem value={1}>Long</MenuItem>
                        <MenuItem value={2}>Short</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item lg={6} p={1} xs={12}>
                    <TextField
                      fullWidth
                      size="small"
                      label="Width"
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>
                  <Grid item lg={6} p={1} xs={12}>
                    <TextField
                      fullWidth
                      size="small"
                      label="Length"
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>
                  <Grid item p={1} xs={12}>
                    <TextField
                      fullWidth
                      size="small"
                      label="Quantity"
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>
                  <Grid item p={1} xs={12}>
                    <Button
                      type="submit"
                      size="small"
                      variant="contained"
                      sx={{
                        mt: 2,
                        textTransform: "capitalize",
                        borderRadius: "5px",
                        fontWeight: "500",
                        fontSize: "13px",
                        color: "#fff !important",
                      }}
                    >
                      Add
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </TabPanel>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
