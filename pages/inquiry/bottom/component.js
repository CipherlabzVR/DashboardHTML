import React, { useState } from "react";
import styles from "@/styles/PageTitle.module.css";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  Checkbox,
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useRouter } from "next/router";

export default function Component() {
  const router = useRouter();
  const inqType = router.query.inqType;
  const [selectedPKT, setSelectedPKT] = useState("");
  const [selectedPiePinTape, setSelectedPiePinTape] = useState("");
  const [selectedBottom, setSelectedBottom] = useState("");

  const handleBottomChange = (event) => {
    setSelectedBottom(event.target.checked);
  };

  const handlePKTChange = (event) => {
    setSelectedPKT(event.target.value);
  };
  const handlePiePinTapeChange = (event) => {
    setSelectedPiePinTape(event.target.value);
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
          <li>Components</li>
        </ul>
      </div>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} display="flex" justifyContent="space-between">
          <Typography fontWeight="bold">Components</Typography>
          <Box display="flex" sx={{ gap: "10px" }}>
            <Link href={`/inquiry/sizes/?inqType=${inqType}`}>
              <Button variant="outlined" color="primary">
                previous
              </Button>
            </Link>
            <Link href="/inquiry/select-inquiry/">
              <Button variant="outlined" color="primary">
                main menu
              </Button>
            </Link>
            <Link href={`/inquiry/bottom/document-panel/?inqType=${inqType}`}>
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
                <RadioGroup
                  name="bag"
                  value={selectedPKT}
                  onChange={handlePKTChange}
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="Straight PKT"
                  />
                </RadioGroup>
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
                <RadioGroup
                  name="bag"
                  value={selectedPKT}
                  onChange={handlePKTChange}
                >
                  <FormControlLabel
                    value="2"
                    control={<Radio />}
                    label="Angle PKT"
                  />
                </RadioGroup>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item p={1} xs={12} lg={4} md={6}>
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
                <FormControlLabel control={<Checkbox />} label="Contrast" />
              </Card>
            </Grid>
            <Grid item p={1} xs={12} lg={4} md={6}>
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
                <FormControlLabel control={<Checkbox />} label="Numbers" />
              </Card>
            </Grid>
            <Grid item p={1} xs={12} lg={4} md={6}>
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
                <FormControlLabel control={<Checkbox />} label="Cord Color" />
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item p={1} xs={12} lg={2} md={6}>
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
                <RadioGroup
                  name="piepintape"
                  value={selectedPiePinTape}
                  onChange={handlePiePinTapeChange}
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="Side Pie Pin"
                  />
                </RadioGroup>
              </Card>
            </Grid>
            <Grid item p={1} xs={12} lg={2} md={6}>
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
                <RadioGroup
                  name="piepintape"
                  value={selectedPiePinTape}
                  onChange={handlePiePinTapeChange}
                >
                  <FormControlLabel
                    value="2"
                    control={<Radio />}
                    label="Side Tape"
                  />
                </RadioGroup>
              </Card>
            </Grid>
            {selectedPiePinTape === "2" && (
              <Grid item p={1} xs={12} lg={3} md={6}>
                <TextField fullWidth/>
              </Grid>
            )}
            
          </Grid>
          <Grid item xs={12}>
          <Grid container>
            <Grid item p={1} xs={12} lg={2} md={6}>
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
                <FormControlLabel control={<Checkbox checked={selectedBottom} onChange={handleBottomChange}/>} label="Bottom" />
              </Card>
            </Grid>
            {selectedBottom && (
              <Grid item p={1} xs={12} lg={3} md={6}>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
