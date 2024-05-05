import React, { useState } from "react";
import styles from "@/styles/PageTitle.module.css";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Typography,
  Card,
  Radio,
  RadioGroup,
  FormControlLabel,
  ButtonGroup,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function PoloNeck() {
  const [selectedCLR, setSelectedCLR] = useState("");
  const [selectedButton, setSelectedButton] = useState(0);
  const [selectedButtonPlacket, setSelectedButtonPlacket] = useState(0);
  const router = useRouter();
  const inqType = router.query.inqType;

  const handleButtonClick = (index) => {
    setSelectedButton(index === selectedButton ? null : index);
  };
  const handlePlacketButtonClick = (index) => {
    setSelectedButtonPlacket(index === selectedButtonPlacket ? null : index);
  };

  const handleCLRChange = (event) => {
    setSelectedCLR(event.target.value);
  };
  return (
    <>
      <div className={styles.pageTitle}>
        <Typography color="primary" variant="h6">
          Sewwandi's Inquiry (Option 01)
        </Typography>
        <ul>
          <li>
            <Link href="/inquiry/inquries/">Inquries</Link>
          </li>
          <li>Neck</li>
        </ul>
      </div>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} display="flex" justifyContent="space-between">
          <Typography fontWeight="bold">POLO - Coller</Typography>
          <Box display="flex" sx={{ gap: "10px" }}>
            <Link href={`/inquiry/tshirt/neck/?inqType=${inqType}`}>
              <Button variant="outlined" color="primary">
                previous
              </Button>
            </Link>
            <Link href="/inquiry/select-inquiry/">
              <Button variant="outlined" color="primary">
                main menu
              </Button>
            </Link>
            <Link href={`/inquiry/tshirt/sleeve/?inqType=${inqType}&neck=1`}>
              <Button
                variant="outlined"
                color="primary"
                endIcon={<NavigateNextIcon />}
              >
                next
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item p={1} xs={12} lg={3} md={6}>
              <Card
                sx={{
                  boxShadow: "none",
                  borderRadius: "10px",
                  p: "20px",
                  mb: "15px",
                  position: "relative",
                  height: "auto",
                  cursor: "pointer",
                }}
              >
                <Grid container>
                  <Grid
                    item
                    display="flex"
                    justifyContent="space-between"
                    xs={12}
                  >
                    <RadioGroup
                      name="clr"
                      value={selectedCLR}
                      onChange={handleCLRChange}
                    >
                      <FormControlLabel
                        value="Plain Knitted CLR CLR"
                        control={<Radio />}
                        label="Plain Knitted CLR CLR"
                      />
                    </RadioGroup>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item p={1} xs={12} lg={3} md={6}>
              <Card
                sx={{
                  boxShadow: "none",
                  borderRadius: "10px",
                  p: "20px",
                  mb: "15px",
                  position: "relative",
                  height: "auto",
                  cursor: "pointer",
                }}
              >
                <Grid container>
                  <Grid
                    item
                    display="flex"
                    justifyContent="space-between"
                    xs={12}
                  >
                    <RadioGroup
                      name="clr"
                      value={selectedCLR}
                      onChange={handleCLRChange}
                    >
                      <FormControlLabel
                        value="Tipln Knitted CLR CLR"
                        control={<Radio />}
                        label="Tipln Knitted CLR CLR"
                      />
                    </RadioGroup>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item p={1} xs={12} lg={3} md={6}>
              <Card
                sx={{
                  boxShadow: "none",
                  borderRadius: "10px",
                  p: "20px",
                  mb: "15px",
                  position: "relative",
                  height: "auto",
                  cursor: "pointer",
                }}
              >
                <Grid container>
                  <Grid
                    item
                    display="flex"
                    justifyContent="space-between"
                    xs={12}
                  >
                    <RadioGroup
                      name="clr"
                      value={selectedCLR}
                      onChange={handleCLRChange}
                    >
                      <FormControlLabel
                        value="Self Fabric CLR"
                        control={<Radio />}
                        label="Self Fabric CLR"
                      />
                    </RadioGroup>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item p={1} xs={12} lg={3} md={6}>
              <Card
                sx={{
                  boxShadow: "none",
                  borderRadius: "10px",
                  p: "20px",
                  mb: "15px",
                  position: "relative",
                  height: "auto",
                  cursor: "pointer",
                }}
              >
                <Grid container>
                  <Grid
                    item
                    display="flex"
                    justifyContent="space-between"
                    xs={12}
                  >
                    <RadioGroup
                      name="clr"
                      value={selectedCLR}
                      onChange={handleCLRChange}
                    >
                      <FormControlLabel
                        value="Self Fabric CLR With Pie Pin"
                        control={<Radio />}
                        label="Self Fabric CLR With Pie Pin"
                      />
                    </RadioGroup>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={12} p={1}>
              <ButtonGroup disableElevation aria-label="Disabled button group">
                <Button
                  variant={selectedButton === 0 ? "contained" : "outlined"}
                  onClick={() => handleButtonClick(0)}
                >
                  Full
                </Button>
                <Button
                  variant={selectedButton === 1 ? "contained" : "outlined"}
                  onClick={() => handleButtonClick(1)}
                >
                  Chinese
                </Button>
              </ButtonGroup>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item p={1} xs={12}>
                  <Typography fontWeight="bold">Placket</Typography>
                </Grid>
                <Grid item p={1} xs={12}>
                  <ButtonGroup
                    fullWidth
                    disableElevation
                    aria-label="Disabled button group"
                  >
                    <Button
                      fullWidth
                      variant={
                        selectedButtonPlacket === 0 ? "contained" : "outlined"
                      }
                      onClick={() => handlePlacketButtonClick(0)}
                    >
                      Single Placket
                    </Button>
                    <Button
                      fullWidth
                      variant={
                        selectedButtonPlacket === 1 ? "contained" : "outlined"
                      }
                      onClick={() => handlePlacketButtonClick(1)}
                    >
                      Piping Single Placket
                    </Button>
                    <Button
                      fullWidth
                      variant={
                        selectedButtonPlacket === 2 ? "contained" : "outlined"
                      }
                      onClick={() => handlePlacketButtonClick(2)}
                    >
                      Single Color Double Placket
                    </Button>
                    <Button
                      fullWidth
                      variant={
                        selectedButtonPlacket === 3 ? "contained" : "outlined"
                      }
                      onClick={() => handlePlacketButtonClick(3)}
                    >
                      Double Color Double Placket
                    </Button>
                  </ButtonGroup>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item p={1} xs={12} lg={3} md={6}>
                  <Typography
                    as="h5"
                    sx={{
                      fontWeight: "500",
                      fontSize: "14px",
                      mb: "12px",
                    }}
                  >
                    Zipper
                  </Typography>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                    Zipper
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Zipper"
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item p={1} xs={12} lg={3} md={6}>
                  <Typography
                    as="h5"
                    sx={{
                      fontWeight: "500",
                      fontSize: "14px",
                      mb: "12px",
                    }}
                  >
                    Length
                  </Typography>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Length
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Length"
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item p={1} xs={12} lg={3} md={6}>
                  <Typography
                    as="h5"
                    sx={{
                      fontWeight: "500",
                      fontSize: "14px",
                      mb: "12px",
                    }}
                  >
                    Width
                  </Typography>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Width</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Width"
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item p={1} xs={12} lg={3} md={6}>
                  <Typography
                    as="h5"
                    sx={{
                      fontWeight: "500",
                      fontSize: "14px",
                      mb: "12px",
                    }}
                  >
                    Buttons
                  </Typography>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Buttons
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Buttons"
                    >
                      <MenuItem value={0}>No</MenuItem>
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
