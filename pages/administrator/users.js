import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "next/link";
import styles from "@/styles/PageTitle.module.css";
import {
  Card,
} from "@mui/material";
import AddUserDialog from "@/components/UIElements/Modal/AddUserDialog";
import BASE_URL from "@/components/Services/api";
import ViewUserDialog from "@/components/UIElements/Modal/ViewUserDialog";

export default function Users() {
  const [usersList, setUsersLists] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(`${BASE_URL}/User/GetAllUser`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch usere");
      }

      const data = await response.json();
      setUsersLists(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <div className={styles.pageTitle}>
        <h1>Users</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Users</li>
        </ul>
      </div>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} mb={3} display="flex" justifyContent="end">
          <AddUserDialog fetchItems={fetchUsers}/>
        </Grid>
        {usersList.map((user, index) => (
          <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={user.id}>
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
                {user.firstName} {user.lastName}
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
                style={{textDecoration: 'none', color: '#A9A9C8'}}
                  href={`mailto:${user.userName}`}
                >
                  {user.userName}
                </Link>
              </Typography>

              <Box>
                <ViewUserDialog userEmail={user.userName} />
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
                    {user.address}
                  </Typography>
                </Box>

                <Box>
                  <Typography color="#A9A9C8" mb={1}>
                    Phone
                  </Typography>
                  <Typography fontWeight="500" fontSize="15px">
                    {user.phoneNumber}
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
