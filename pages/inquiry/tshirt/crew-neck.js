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
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useRouter } from "next/router";

export default function CrewNeck() {
  const [selectedButtonCCCN, setSelectedButtonCCCN] = useState(0);
  const [isCCCNChecked, setIsCCCNChecked] = useState(false);
  const [selectedButtonCN, setSelectedButtonCN] = useState(0);
  const [isCNChecked, setIsCNChecked] = useState(false);
  const router = useRouter();
  const inqType = router.query.inqType;

  const handleCCCNChange = (event) => {
    setIsCCCNChecked(event.target.checked);
  };
  const handleCCCNButtonClick = (index) => {
    setSelectedButtonCCCN(index === selectedButtonCCCN ? null : index);
  };
  const handleCNChange = (event) => {
    setIsCNChecked(event.target.checked);
  };
  const handleCNButtonClick = (index) => {
    setSelectedButtonCN(index === selectedButtonCN ? null : index);
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
          <Typography fontWeight="bold">Crew Neck</Typography>
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
            <Link href={`/inquiry/tshirt/sleeve/?inqType=${inqType}&neck=2`}>
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
                  control={<Checkbox onChange={handleCCCNChange} />}
                  label="Chinese CLR C/N"
                />
                {isCCCNChecked && (
                  <Box mt={5}>
                    <ButtonGroup
                      disableElevation
                      aria-label="Disabled button group"
                      fullWidth
                    >
                      <Button
                        variant={
                          selectedButtonCCCN === 0 ? "contained" : "outlined"
                        }
                        onClick={() => handleCCCNButtonClick(0)}
                      >
                        Normal
                      </Button>
                      <Button
                        variant={
                          selectedButtonCCCN === 1 ? "contained" : "outlined"
                        }
                        onClick={() => handleCCCNButtonClick(1)}
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
                  control={<Checkbox onChange={handleCNChange} />}
                  label="Crew Neck"
                />
                {isCNChecked && (
                  <Box mt={5}>
                    <ButtonGroup
                    fullWidth
                      disableElevation
                      aria-label="Disabled button group"
                    >
                      <Button
                        variant={
                          selectedButtonCN === 0 ? "contained" : "outlined"
                        }
                        onClick={() => handleCNButtonClick(0)}
                      >
                        RIB
                      </Button>
                      <Button
                        variant={
                          selectedButtonCN === 1 ? "contained" : "outlined"
                        }
                        onClick={() => handleCNButtonClick(1)}
                      >
                        Fabric
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
