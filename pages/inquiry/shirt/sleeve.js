import React from "react";
import styles from "@/styles/PageTitle.module.css";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import { Box, Button, Card, Checkbox, FormControlLabel, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useRouter } from "next/router";

export default function SelectSleeve() {
  const router = useRouter();
  const inqType = router.query.inqType;
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
          <Typography>Sleeve</Typography>
          <Box display="flex" sx={{ gap: "10px" }}>
            <Link href={`/inquiry/shirt/coller/?inqType=${inqType}`}>
              <Button variant="outlined" color="primary">
                previous
              </Button>
            </Link>
            <Link href="/inquiry/select-inquiry/">
              <Button variant="outlined" color="primary">
                main menu
              </Button>
            </Link>
            <Link href={`/inquiry/shirt/document-panel/?inqType=${inqType}`}>
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
            <Grid item xs={12} p={1}>
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
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Short Sleeve"
                    />
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
                      label="Long Sleeve"
                    />
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
