import React, { useState } from "react";
import styles from "@/styles/PageTitle.module.css";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import { Box, Button, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SummaryTable from "./sum-table";
import DocumentList from "./document-list";
import FabList from "./summary-fab";
import { useRouter } from "next/router";
import SummarySleeve from "./summary-sleeve";
import SizesList from "./summary-sizes";

export default function Summary() {
  const router = useRouter();
  const inqType = router.query.inqType;
  const from = router.query.from;
  
  const navToPrev = () => {
    if (from) {
      router.push({
        pathname: "/inquiry/select-fabric/",
        query: { inqType: inqType },
      });
    } else {
      router.push({
        pathname: `/inquiry/tshirt/document-panel/`,
        query: { inqType: inqType },
      });
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
          <li>Summary</li>
        </ul>
      </div>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} display="flex" justifyContent="space-between">
          <Typography fontWeight="bold">Summary</Typography>
          <Box display="flex" sx={{ gap: "10px" }}>
            <Button onClick={navToPrev} variant="outlined" color="primary">
              previous
            </Button>
            <Link href="/inquiry/select-inquiry/">
              <Button variant="outlined" color="primary">
                main menu
              </Button>
            </Link>
            <Link href="">
              <Button variant="outlined" color="primary">
                done
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12} p={1} lg={5}>
              <SummaryTable />
              <SummarySleeve />
            </Grid>
            <Grid item xs={12} p={1} lg={7}>
              <Grid container>
                <Grid item xs={12}>
                  <DocumentList />
                </Grid>
                <Grid item xs={12}>
                  <FabList />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} p={1}>
              <SizesList />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
