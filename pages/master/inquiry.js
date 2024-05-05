import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography } from "@mui/material";
import Link from "next/link";
import styles from "@/styles/PageTitle.module.css";
import { ToastContainer } from 'react-toastify';
import DeleteIcon from "@mui/icons-material/Delete";
import AddInquiryModal from "@/components/UIElements/Modal/AddInquiryCategory";
import BASE_URL from "@/components/Services/api";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const InquiryCategory = () => {
  const [inquiryCategory, setInquiryCategory] = useState([]);

  const fetchInquiryCategory = async () => {
    try {
      const response = await fetch(`${BASE_URL}/InquiryCategory/GetAllInquiryCategory`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch Inquiry Category");
      }

      const data = await response.json();
      setInquiryCategory(data.result);
    } catch (error) {
      console.error("Error fetching Inquiry Category:", error);
    }
  };

  useEffect(() => {
    fetchInquiryCategory();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return date.toLocaleDateString("en-US", options);
  };
  return (
    <>
    <ToastContainer/>
      <div className={styles.pageTitle}>
        <h1>Inquiry Category</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Inquiry Category</li>
        </ul>
      </div>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} mb={2} display="flex" justifyContent="end">
          <AddInquiryModal  fetchItems={fetchInquiryCategory}/>
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table" className="dark-table">
              <TableHead>
                <TableRow sx={{background: '#757fef',}}>
                  <TableCell sx={{color: '#fff'}}>Inquiry Category</TableCell>
                  <TableCell sx={{color: '#fff'}}>Created On</TableCell>
                  <TableCell sx={{color: '#fff'}}>Status</TableCell>
                  <TableCell sx={{color: '#fff'}} align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {inquiryCategory.length === 0 ? (
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell colSpan={3} component="th" scope="row">
                      <Typography color="error">No Inquiry Categories Available</Typography>
                    </TableCell>
                  </TableRow>
                ) : (inquiryCategory.map((inquiry, index) => (
                <TableRow key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {inquiry.name}
                  </TableCell>
                  <TableCell>
                    {formatDate(inquiry.createdOn)}
                  </TableCell>
                  <TableCell>
                    {inquiry.isActive == true ? <span className="successBadge">Active</span> : <span className="dangerBadge">Imactive</span>}
                    
                  </TableCell>
                  <TableCell align="right">
                  <Tooltip title="Edit" placement="top">
                      <IconButton aria-label="edit" size="small">
                        <BorderColorIcon color="primary" fontSize="inherit" />
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
};

export default InquiryCategory;
