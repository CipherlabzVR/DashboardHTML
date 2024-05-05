import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Grid,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import DocImageList from "@/components/UIElements/SwiperSlider/DocImageList";

export default function DocumentList() {
  return (
    <>
      <Grid container>
        <Grid item xs={12} lg={5} pr={1}>
          <TableContainer component={Paper}>
            <Table
              size="small"
              aria-label="simple table"
              className="dark-table"
            >
              <TableHead>
                <TableRow>
                  <TableCell
                    style={{ backgroundColor: "#7884ef", color: "#fff" }}
                    colSpan={2}
                  >
                    Info
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Panel</TableCell>
                  <TableCell>1</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Peek</TableCell>
                  <TableCell>Sandwitch</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Back</TableCell>
                  <TableCell>Velcro</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}>Ventilation Holes</TableCell>
                </TableRow>
                <TableRow>
                <TableCell colSpan={2}>Contrast</TableCell>

                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} lg={7}>
          <DocImageList />
        </Grid>
        <Grid item xs={12}>
          <Typography fontWeight="bold" sx={{ mt: 1, mb: 1 }}>
            Documents
          </Typography>
          <TableContainer component={Paper}>
            <Table
              size="small"
              aria-label="simple table"
              className="dark-table"
            >
              <TableHead>
                <TableRow>
                  <TableCell
                    style={{ backgroundColor: "#7884ef", color: "#fff" }}
                  >
                    Front
                  </TableCell>
                  <TableCell>EMB</TableCell>
                  <TableCell>SUB</TableCell>
                  <TableCell>S Print</TableCell>
                  <TableCell>DTF</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Back</TableCell>
                  <TableCell>EMB</TableCell>
                  <TableCell>SUB</TableCell>
                  <TableCell
                    style={{ backgroundColor: "#7884ef", color: "#fff" }}
                  >
                    S Print
                  </TableCell>
                  <TableCell>DTF</TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
}
