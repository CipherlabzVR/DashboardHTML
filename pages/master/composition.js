import React, { useEffect, useState } from "react";
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
import AddComposition from "@/components/UIElements/Modal/AddComposition";
import BASE_URL from "@/components/Services/api";
import { ToastContainer } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { IconButton, Tooltip, Typography } from "@mui/material";

export default function Composition() {
  const [compositionList, setCompositionList] = useState([]);

  const fetchCompositionList = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/Composition/GetAllComposition`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch Composition List");
      }

      const data = await response.json();
      setCompositionList(data.result);
    } catch (error) {
      console.error("Error fetching Composition List:", error);
    }
  };

  useEffect(() => {
    fetchCompositionList();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <>
      <ToastContainer />
      <div className={styles.pageTitle}>
        <h1>Composition</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Composition</li>
        </ul>
      </div>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} mb={2} display="flex" justifyContent="end">
          <AddComposition fetchItems={fetchCompositionList} />
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table" className="dark-table">
              <TableHead>
                <TableRow sx={{ background: "#757fef" }}>
                  <TableCell sx={{ color: "#fff" }}>Composition Name</TableCell>
                  <TableCell sx={{ color: "#fff" }}>Created On</TableCell>
                  <TableCell sx={{ color: "#fff" }} align="right">
                    Status
                  </TableCell>
                  <TableCell sx={{ color: "#fff" }} align="right">
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {compositionList.length === 0 ? (
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell colSpan={3} component="th" scope="row">
                      <Typography color="error">
                        No Compositions Available
                      </Typography>
                    </TableCell>
                  </TableRow>
                ) : (
                  compositionList.map((composition, index) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {composition.name}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {formatDate(composition.createdOn)}
                      </TableCell>
                      <TableCell align="right">
                        {composition.isActive == true ? (
                          <span className="successBadge">Active</span>
                        ) : (
                          <span className="dangerBadge">Inactive</span>
                        )}
                      </TableCell>
                      <TableCell align="right">
                        <Tooltip title="Edit" placement="top">
                          <IconButton aria-label="edit" size="small">
                            <BorderColorIcon
                              color="primary"
                              fontSize="inherit"
                            />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete" placement="top">
                          <IconButton aria-label="delete" size="small">
                            <DeleteIcon color="error" fontSize="inherit" />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
}
