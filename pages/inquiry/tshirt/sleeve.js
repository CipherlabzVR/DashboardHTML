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
  ButtonGroup,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useRouter } from "next/router";

export default function Sleeve() {
  const [selectedWN, setSelectedWN] = useState("");
  const [isShortChecked, setIsShortChecked] = useState(false);
  const [isLongChecked, setIsLongChecked] = useState(false);
  const [selectedButtonShort, setSelectedButtonShort] = useState();
  const [selectedButtonLong, setSelectedButtonLong] = useState();
  const router = useRouter();
  const inqType = router.query.inqType;
  const neck = router.query.neck;

  const handleShortButtonClick = (index) => {
    setSelectedButtonShort(index === selectedButtonShort ? null : index);
  };
  const handleShortChange = () => {
    setIsShortChecked(!isShortChecked);
  };
  const handleLongButtonClick = (index) => {
    setSelectedButtonLong(index === selectedButtonLong ? null : index);
  };
  const handleLongChange = () => {
    setIsLongChecked(!isLongChecked);
  };

  const handleWNChange = (event) => {
    setSelectedWN(event.target.value);
  };

  const generateLink = (neckValue) => {
    switch (neckValue) {
      case '1':
        return `/inquiry/tshirt/polo-neck/?inqType=${inqType}`;
      case '2':
        return `/inquiry/tshirt/crew-neck/?inqType=${inqType}`;
      case '3':
        return `/inquiry/tshirt/v-neck/?inqType=${inqType}`;
      default:
        return `/inquiry/tshirt/neck/?inqType=${inqType}`;
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
          <li>Sleeve</li>
        </ul>
      </div>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} display="flex" justifyContent="space-between">
          <Typography fontWeight="bold">Sleeve</Typography>
          <Box display="flex" sx={{ gap: "10px" }}>
            <Link href={generateLink(neck)}>
              <Button variant="outlined" color="primary">
                previous
              </Button>
            </Link>
            <Link href="/inquiry/select-inquiry/">
              <Button variant="outlined" color="primary">
                main menu
              </Button>
            </Link>
            <Link href={`/inquiry/tshirt/document-panel/?inqType=${inqType}`}>
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
                  name="wn"
                  value={selectedWN}
                  onChange={handleWNChange}
                >
                  <FormControlLabel
                    value="Wrangler"
                    control={<Radio />}
                    label="Wrangler"
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
                  name="wn"
                  value={selectedWN}
                  onChange={handleWNChange}
                >
                  <FormControlLabel
                    value="Normal"
                    control={<Radio />}
                    label="Normal"
                  />
                </RadioGroup>
              </Card>
            </Grid>
            <Grid item xs={12} p={1}>
              <Grid container>
                <Grid item xs={12}>
                  <Button>
                    <FormControlLabel
                      control={<Checkbox onChange={handleShortChange} />}
                      label="Short"
                    />
                  </Button>
                </Grid>
                <Grid item xs={12} lg={9}>
                  <ButtonGroup
                    sx={{ height: "100%" }}
                    fullWidth
                    disabled={!isShortChecked}
                    disableElevation
                    aria-label="Disabled button group"
                  >
                    <Button
                      variant={
                        selectedButtonShort === 0 ? "contained" : "outlined"
                      }
                      onClick={() => handleShortButtonClick(0)}
                    >
                      HEM
                    </Button>
                    <Button
                      variant={
                        selectedButtonShort === 1 ? "contained" : "outlined"
                      }
                      onClick={() => handleShortButtonClick(1)}
                    >
                      D / HEM
                    </Button>
                    <Button
                      variant={
                        selectedButtonShort === 2 ? "contained" : "outlined"
                      }
                      onClick={() => handleShortButtonClick(2)}
                    >
                      KNITTED CUFF
                    </Button>
                    <Button
                      variant={
                        selectedButtonShort === 3 ? "contained" : "outlined"
                      }
                      onClick={() => handleShortButtonClick(3)}
                    >
                      FABRIC CUFF
                    </Button>
                  </ButtonGroup>
                </Grid>
                <Grid item pl={1} xs={12} lg={3}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Not Selected
                    </InputLabel>
                    <Select
                      disabled={!isShortChecked}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Not Selected"
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} p={1}>
              <Grid container>
                <Grid item xs={12}>
                  <Button>
                    <FormControlLabel
                      control={<Checkbox onChange={handleLongChange} />}
                      label="Long"
                    />
                  </Button>
                </Grid>
                <Grid item xs={12} lg={9}>
                  <ButtonGroup
                    sx={{ height: "100%" }}
                    fullWidth
                    disabled={!isLongChecked}
                    disableElevation
                    aria-label="Disabled button group"
                  >
                    <Button
                      variant={
                        selectedButtonLong === 0 ? "contained" : "outlined"
                      }
                      onClick={() => handleLongButtonClick(0)}
                    >
                      HEM
                    </Button>
                    <Button
                      variant={
                        selectedButtonLong === 1 ? "contained" : "outlined"
                      }
                      onClick={() => handleLongButtonClick(1)}
                    >
                      D / HEM
                    </Button>
                    <Button
                      variant={
                        selectedButtonLong === 2 ? "contained" : "outlined"
                      }
                      onClick={() => handleLongButtonClick(2)}
                    >
                      KNITTED CUFF
                    </Button>
                    <Button
                      variant={
                        selectedButtonLong === 3 ? "contained" : "outlined"
                      }
                      onClick={() => handleLongButtonClick(3)}
                    >
                      FABRIC CUFF
                    </Button>
                  </ButtonGroup>
                </Grid>
                <Grid item pl={1} xs={12} lg={3}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Not Selected
                    </InputLabel>
                    <Select
                      disabled={!isLongChecked}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Not Selected"
                    >
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
