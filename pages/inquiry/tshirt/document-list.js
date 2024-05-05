import React, { useState } from "react";
import {
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
                  <TableCell style={{ backgroundColor: "#7884ef", color: "#fff" }} colSpan={2}>Polo Neck</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Coller Type</TableCell>
                  <TableCell>1</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Coller Description</TableCell>
                  <TableCell>2</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Placket Type</TableCell>
                  <TableCell>1</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Buttons</TableCell>
                  <TableCell>2</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Zipper</TableCell>
                  <TableCell>2</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Length</TableCell>
                  <TableCell>2</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Width</TableCell>
                  <TableCell>2</TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
          {/* crew neck */}
          {/* <TableContainer component={Paper}>
            <Table
              size="small"
              aria-label="simple table"
              className="dark-table"
            >
              <TableHead>
                <TableRow>
                  <TableCell style={{ backgroundColor: "#7884ef", color: "#fff" }} colSpan={2}>Crew Neck</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Chinese CLR / CN</TableCell>
                  <TableCell>Normal</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Crew Neck</TableCell>
                  <TableCell>RIB</TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer> */}

          {/* v neck */}
          {/* <TableContainer component={Paper}>
            <Table
              size="small"
              aria-label="simple table"
              className="dark-table"
            >
              <TableHead>
                <TableRow>
                  <TableCell style={{ backgroundColor: "#7884ef", color: "#fff" }} colSpan={2}>V Neck</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>V Neck</TableCell>
                  <TableCell>RIB</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Chinese V Neck</TableCell>
                  <TableCell>Normal</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Full CLR V Neck</TableCell>
                  <TableCell>Normal</TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer> */}
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
