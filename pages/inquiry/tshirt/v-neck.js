import React, { useState } from "react";
import styles from "@/styles/PageTitle.module.css";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import {
  Box,
  Button,
  Typography,
  Card,
  FormControlLabel,
  Checkbox,
  ButtonGroup,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useRouter } from "next/router";

export default function VNeck() {
  const [selectedButtonVN, setSelectedButtonVN] = useState(0);
  const [isVNChecked, setIsVNChecked] = useState(false);
  const [selectedButtonCVN, setSelectedButtonCVN] = useState(0);
  const [isCVNChecked, setIsCVNChecked] = useState(false);
  const [selectedButtonFCVN, setSelectedButtonFCVN] = useState(0);
  const [isFCVNChecked, setIsFCVNChecked] = useState(false);
  const router = useRouter();
  const inqType = router.query.inqType;

  const handleVNChange = (event) => {
    setIsVNChecked(event.target.checked);
  };
  const handleVNButtonClick = (index) => {
    setSelectedButtonVN(index === selectedButtonVN ? null : index);
  };
  const handleCVNChange = (event) => {
    setIsCVNChecked(event.target.checked);
  };
  const handleCVNButtonClick = (index) => {
    setSelectedButtonCVN(index === selectedButtonCVN ? null : index);
  };
  const handleFCVNChange = (event) => {
    setIsFCVNChecked(event.target.checked);
  };
  const handleFCVNButtonClick = (index) => {
    setSelectedButtonFCVN(index === selectedButtonFCVN ? null : index);
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
          <Typography fontWeight="bold">V Neck</Typography>
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
            <Link href={`/inquiry/tshirt/sleeve/?inqType=${inqType}&neck=3`}>
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
                <FormControlLabel
                  control={<Checkbox onChange={handleVNChange} />}
                  label="V Neck"
                />
                {isVNChecked && (
                  <Box mt={5}>
                    <ButtonGroup
                      fullWidth
                      disableElevation
                      aria-label="Disabled button group"
                    >
                      <Button
                        variant={
                          selectedButtonVN === 0 ? "contained" : "outlined"
                        }
                        onClick={() => handleVNButtonClick(0)}
                      >
                        RIB
                      </Button>
                      <Button
                        variant={
                          selectedButtonVN === 1 ? "contained" : "outlined"
                        }
                        onClick={() => handleVNButtonClick(1)}
                      >
                        Fabric
                      </Button>
                    </ButtonGroup>
                  </Box>
                )}
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
                <FormControlLabel
                  control={<Checkbox onChange={handleCVNChange} />}
                  label="Chinese V Neck"
                />
                {isCVNChecked && (
                  <Box mt={5}>
                    <ButtonGroup
                      fullWidth
                      disableElevation
                      aria-label="Disabled button group"
                    >
                      <Button
                        variant={
                          selectedButtonCVN === 0 ? "contained" : "outlined"
                        }
                        onClick={() => handleCVNButtonClick(0)}
                      >
                        Normal
                      </Button>
                      <Button
                        variant={
                          selectedButtonCVN === 1 ? "contained" : "outlined"
                        }
                        onClick={() => handleCVNButtonClick(1)}
                      >
                        1/8 Line
                      </Button>
                    </ButtonGroup>
                  </Box>
                )}
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
                <FormControlLabel
                  control={<Checkbox onChange={handleFCVNChange} />}
                  label="Full CLR V Neck"
                />
                {isFCVNChecked && (
                  <Box mt={5}>
                    <ButtonGroup
                      fullWidth
                      disableElevation
                      aria-label="Disabled button group"
                    >
                      <Button
                        variant={
                          selectedButtonFCVN === 0 ? "contained" : "outlined"
                        }
                        onClick={() => handleFCVNButtonClick(0)}
                      >
                        Normal
                      </Button>
                      <Button
                        variant={
                          selectedButtonFCVN === 1 ? "contained" : "outlined"
                        }
                        onClick={() => handleFCVNButtonClick(1)}
                      >
                        1/8 Line
                      </Button>
                    </ButtonGroup>
                  </Box>
                )}
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
