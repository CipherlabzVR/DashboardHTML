import React from "react";
import styles from "@/styles/PageTitle.module.css";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddInquiry from "@/components/UIElements/Modal/AddInquiry";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import BorderColorIcon from "@mui/icons-material/BorderColor";

export default function AllInquries() {
  return (
    <>
      <div className={styles.pageTitle}>
        <h1>Inquiries</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Inquiries</li>
        </ul>
      </div>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} mb={2} display="flex" justifyContent="end">
          <AddInquiry />
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table" className="dark-table">
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Inquiry No</TableCell>
                  <TableCell>Customer Name</TableCell>
                  <TableCell>Style Name</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    1
                  </TableCell>
                  <TableCell>INQ1001</TableCell>
                  <TableCell>Sewwandi</TableCell>
                  <TableCell>Shirt</TableCell>
                  <TableCell align="right">
                    <Link href="/inquiry/select-inquiry/">
                      <Tooltip title="Edit" placement="top">
                        <IconButton aria-label="edit" size="small">
                          <BorderColorIcon color="primary" fontSize="inherit" />
                        </IconButton>
                      </Tooltip>
                    </Link>
                    <Tooltip title="Delete" placement="top">
                      <IconButton aria-label="delete" size="small">
                        <DeleteIcon color="error" fontSize="inherit" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
}
