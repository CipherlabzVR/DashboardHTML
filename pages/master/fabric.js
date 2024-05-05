import React, { useEffect, useState } from "react";
import styles from "@/styles/PageTitle.module.css";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import AddFabric from "@/components/UIElements/Modal/AddFabric";
import BASE_URL from "@/components/Services/api";
import { ToastContainer } from "react-toastify";

export default function Fabric() {
  const [fabricList, setFabricList] = useState([]);

  const fetchFabricList = async () => {
    try {
      const response = await fetch(`${BASE_URL}/Fabric/GetAllFabric`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch Fabric List");
      }

      const data = await response.json();
      setFabricList(data.result);
    } catch (error) {
      console.error("Error fetching Fabric List:", error);
    }
  };

  useEffect(() => {
    fetchFabricList();
  }, []);

  return (
    <>
    <ToastContainer/>
      <div className={styles.pageTitle}>
        <h1>Fabric</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Fabric</li>
        </ul>
      </div>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} display="flex" justifyContent="end">
          <AddFabric fetchItems={fetchFabricList}/>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
          {fabricList.length === 0 ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ width: "100%", mt: 5, height: "50vh" }}
          >
            <Box sx={{ width: "50%", padding: "30px" }}>
              <center>
                <img width="100px" src="/images/empty-folder.png" />
              </center>
              <Typography
                variant="h6"
                align="center"
                sx={{ color: "#BEBEBE", fontWeight: "bold" }}
              >
                No Fabrics.
              </Typography>
            </Box>
          </Box>
        ) : (fabricList.map((fabric, index) => (
              <Grid key={index} item xs={6} p={1} md={4} lg={3}>
                <Card
                  sx={{
                    boxShadow: "none",
                    borderRadius: "10px",
                    p: "25px",
                    mb: "15px",
                    backgroundImage: `url('/images/pr(1).jpg')`,
                    position: "relative",
                    height: "250px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    cursor: "pointer",
                  }}
                >
                  <Box sx={{ position: "absolute", bottom: "15px" }}>
                    <Typography
                      alignItems="end"
                      as="h4"
                      fontWeight="500"
                      fontSize="17px"
                    >
                      <br />
                      {fabric.name}
                    </Typography>
                    <Box>
                    <p style={{ fontSize: "12px", color: 'dodgerblue'}}>Inquiry Categories</p>
                    {fabric.inquiryCategoryFabrics.map((category, index) => (
                      <span key={index}>{category.inquiryCategoryId}, </span>
                    ))}
                    </Box>
                    {fabric.isActive == true ? (
                      <span className="successBadge">Active</span>
                    ) : (
                      <span className="dangerBadge">Inactive</span>
                    )}
                  </Box>
                  <Box
                    sx={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                    }}
                  >
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
                  </Box>
                </Card>
              </Grid>
            ))
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
