import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import DocImageList from "@/components/UIElements/SwiperSlider/DocImageList";
import ViewImages from "@/components/UIElements/Modal/ViewImages";

export default function SummarySleeve() {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Typography fontWeight="bold" sx={{ mt: 1, mb: 1 }}>
            Sleeve
          </Typography>
          <TableContainer component={Paper}>
            <Table
              size="small"
              aria-label="simple table"
              className="dark-table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Sleeve</TableCell>
                  <TableCell>Short</TableCell>
                  <TableCell>Long</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Wrangle</TableCell>
                  <TableCell>Hem</TableCell>
                  <TableCell>Hem</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
}
