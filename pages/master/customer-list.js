import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "next/link";
import styles from "@/styles/PageTitle.module.css";
import AddCustomerDialog from "@/components/UIElements/Modal/AddCustomerDialog";
import BASE_URL from "@/components/Services/api";
import ViewCustomerDialog from "@/components/UIElements/Modal/ViewCustomerDialog";

export default function CustomerList() {
  const [customersLists, setCustomersLists] = useState([]);

  const fetchCustomers = async () => {
    try {
      const response = await fetch(`${BASE_URL}/Customer/GetAllCustomer`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch customers");
      }

      const data = await response.json();
      setCustomersLists(data.result);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);


  return (
    <>
      <div className={styles.pageTitle}>
        <h1>Customers</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Customers</li>
        </ul>
      </div>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} mb={3} display="flex" justifyContent="end">
          <AddCustomerDialog fetchItems={fetchCustomers} />
        </Grid>
        {customersLists.length === 0 ? (
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
                No Customers Available.
              </Typography>
            </Box>
          </Box>
        ) : (
          customersLists.map((customer, index) => (
            <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={customer.id}>
              <Card
                sx={{
                  textAlign: "center",
                  boxShadow: "none",
                  borderRadius: "10px",
                  p: "20px 15px",
                  mb: "15px",
                }}
              >
                <img
                  src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg"
                  alt="Member"
                  width="148px"
                  height="148px"
                  className="borRadius100"
                />
                <Typography
                  as="h4"
                  sx={{
                    fontSize: 16,
                    fontWeight: 500,
                    mt: "10px",
                  }}
                >
                  {customer.firstName} {customer.lastName}
                </Typography>

                <Typography
                  as="h4"
                  sx={{
                    fontSize: 13,
                    color: "#A9A9C8",
                    mb: 2,
                  }}
                >
                  <Link
                    style={{ textDecoration: "none", color: "#A9A9C8" }}
                    href={`mailto:${customer.customerContactDetails[0].emailAddress}`}
                  >
                    {customer.customerContactDetails[0].emailAddress}
                  </Link>
                </Typography>

                <Box>
                  <ViewCustomerDialog customerId={customer.id} />
                  {/* <Link href="#" className="text-decoration-none">
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                      textTransform: "capitalize",
                      borderRadius: "8px",
                      m: "0 5px",
                      color: "#fff !important",
                    }}
                  >
                    Projects
                  </Button>
                </Link> */}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    textAlign: "center",
                    mt: "30px",
                  }}
                >
                  <Box sx={{ width: "50%" }}>
                    <Typography color="#A9A9C8" mb={1}>
                      Location
                    </Typography>
                    <Typography
                      sx={{ height: "40px", overflow: "hidden" }}
                      fontWeight="500"
                      fontSize="15px"
                    >
                      {customer.address}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography color="#A9A9C8" mb={1}>
                      Phone
                    </Typography>
                    <Typography fontWeight="500" fontSize="15px">
                      {customer.customerContactDetails[0].contactNo}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
}
