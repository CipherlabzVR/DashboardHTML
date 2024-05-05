import React, { useState } from "react";
import styles from "@/styles/PageTitle.module.css";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import {
  Box,
  Button,
  Typography,
  Card,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  Alert,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useRouter } from "next/router";

export default function SelectFabric() {
  const [selectedNeck, setSelectedNeck] = useState("");
  const [errorAlert, setErrorAlert] = useState(false);
  const router = useRouter();
  const inqType = router.query.inqType;

  const handleNeckChange = (event) => {
    setSelectedNeck(event.target.value);
  };

  const handleSubmit = () => {
    if (!selectedNeck) {
      setErrorAlert(true);
      return;
    }else{
      setErrorAlert(false);
      if (selectedNeck === "POLO") {
        router.push(`/inquiry/tshirt/polo-neck/?inqType=${inqType}`); 
      } else if (selectedNeck === "Crew Neck") {
        router.push(`/inquiry/tshirt/crew-neck/?inqType=${inqType}`); 
      } else if (selectedNeck === "V Neck") {
        router.push(`/inquiry/tshirt/v-neck/?inqType=${inqType}`); 
      }
    }
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
          <Typography>Neck</Typography>
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
            <Button
              variant="outlined"
              color="primary"
              endIcon={<NavigateNextIcon />}
              onClick={handleSubmit}
            >
              next
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            {errorAlert && (
              <Grid item xs={12} p={1}>
                <Alert severity="error">
                  Please select a neck option before proceeding.
                </Alert>
              </Grid>
            )}

            <Grid item xs={12} p={1} md={4} lg={3}>
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
                  name="neck"
                  value={selectedNeck}
                  onChange={handleNeckChange}
                >
                  <FormControlLabel
                    value="POLO"
                    control={<Radio />}
                    label="POLO"
                  />
                </RadioGroup>
              </Card>
            </Grid>
            <Grid item xs={12} p={1} md={4} lg={3}>
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
                  name="neck"
                  value={selectedNeck}
                  onChange={handleNeckChange}
                >
                  <FormControlLabel
                    value="Crew Neck"
                    control={<Radio />}
                    label="Crew Neck"
                  />
                </RadioGroup>
              </Card>
            </Grid>
            <Grid item xs={12} p={1} md={4} lg={3}>
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
                  name="neck"
                  value={selectedNeck}
                  onChange={handleNeckChange}
                >
                  <FormControlLabel
                    value="V Neck"
                    control={<Radio />}
                    label="V Neck"
                  />
                </RadioGroup>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12} p={1}>
              <Typography>Body</Typography>
            </Grid>
            <Grid item xs={12} p={1} md={4} lg={3}>
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
            <Grid item xs={12} p={1} md={4} lg={3}>
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
                <FormControlLabel control={<Checkbox />} label="A/H Pie Pin" />
              </Card>
            </Grid>
            <Grid item xs={12} p={1} md={4} lg={3}>
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
                <FormControlLabel control={<Checkbox />} label="Cuff Pie Pin" />
              </Card>
            </Grid>
            <Grid item xs={12} p={1} md={4} lg={3}>
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
                <FormControlLabel
                  control={<Checkbox />}
                  label="Bottom D / Hem"
                />
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
