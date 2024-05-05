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
  FormControlLabel,
  Typography,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useRouter } from "next/router";

export default function Component() {
  const router = useRouter();
  const inqType = router.query.inqType;
  const [isPeekChecked, setIsPeekChecked] = useState(false);
  const [selectedButtonPeek, setSelectedButtonPeek] = useState(0);
  const [isBackChecked, setIsBackChecked] = useState(false);
  const [selectedButtonBack, setSelectedButtonBack] = useState(0);

  
  const handleCheckPeek = (event) => {
    setIsPeekChecked(event.target.checked);
  };
  const handlePeekButtonClick = (index) => {
    setSelectedButtonPeek(index === selectedButtonPeek ? null : index);
  };
  const handleCheckBack = (event) => {
    setIsBackChecked(event.target.checked);
  };
  const handleBackButtonClick = (index) => {
    setSelectedButtonBack(index === selectedButtonBack ? null : index);
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
            <Link href={`/inquiry/visor/document-panel/?inqType=${inqType}`}>
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
                  control={<Checkbox onChange={handleCheckPeek} />}
                  label="Peek"
                />
                {isPeekChecked && (
                  <Box mt={5}>
                    <ButtonGroup
                      disableElevation
                      fullWidth
                      aria-label="Disabled button group"
                    >
                      <Button
                        variant={
                          selectedButtonPeek === 0 ? "contained" : "outlined"
                        }
                        onClick={() => handlePeekButtonClick(0)}
                      >
                        Sandwitch
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
                  control={<Checkbox onChange={handleCheckBack} />}
                  label="Back"
                />
                {isBackChecked && (
                  <Box mt={5}>
                    <ButtonGroup
                      disableElevation
                      fullWidth
                      aria-label="Disabled button group"
                    >
                      <Button
                        variant={
                          selectedButtonBack === 0 ? "contained" : "outlined"
                        }
                        onClick={() => handleBackButtonClick(0)}
                      >
                        Velcro
                      </Button>
                      <Button
                        variant={
                          selectedButtonBack === 1 ? "contained" : "outlined"
                        }
                        onClick={() => handleBackButtonClick(1)}
                      >
                        Adj/Buckle
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
                  control={<Checkbox />}
                  label="Contrast"
                />
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
