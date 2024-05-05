import React, { useEffect, useState } from "react";
import styles from "@/styles/PageTitle.module.css";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import { Box, Button, Checkbox, Chip, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useRouter } from "next/router";
import BASE_URL from "@/components/Services/api";

export default function SelectFabric() {
  const [isChecked, setIsChecked] = useState([false, false]);
  const router = useRouter();
  const inqType = router.query.inqType;
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
      // const filteredFabricList = data.result.filter((fabric) =>
      //   fabric.inquiryCategoryFabrics.some(
      //     (categoryFabric) =>
      //       categoryFabric.inquiryCategoryId === parseInt(inqType)
      //   )
      // );
      const filteredFabricList = data.result.filter(
        (fabric) =>
          fabric.isActive &&
          fabric.inquiryCategoryFabrics.some(
            (categoryFabric) =>
              categoryFabric.isActive &&
              categoryFabric.inquiryCategoryId === parseInt(inqType)
          )
      );
      setFabricList(filteredFabricList);
    } catch (error) {
      console.error("Error fetching Fabric List:", error);
    }
  };

  useEffect(() => {
    fetchFabricList();
  }, []);

  const handleCardClick = (index) => {
    const updatedState = [...isChecked];
    updatedState[index] = !updatedState[index];
    setIsChecked(updatedState);
  };
  const navToSummary = (Inquiry) => {
    if (Inquiry == 1) {
      router.push({
        pathname: "/inquiry/tshirt/summary/",
        query: { inqType: 1, from: "sf" },
      });
    } else if (Inquiry == 2) {
      router.push({
        pathname: "/inquiry/shirt/summary/",
        query: { inqType: 2, from: "sf" },
      });
    } else if (Inquiry == 3) {
      router.push({
        pathname: "/inquiry/cap/summary/",
        query: { inqType: 3, from: "sf" },
      });
    } else if (Inquiry == 4) {
      router.push({
        pathname: "/inquiry/visor/summary/",
        query: { inqType: 4, from: "sf" },
      });
    } else if (Inquiry == 5) {
      router.push({
        pathname: "/inquiry/hat/summary/",
        query: { inqType: 5, from: "sf" },
      });
    } else if (Inquiry == 6) {
      router.push({
        pathname: "/inquiry/bag/summary/",
        query: { inqType: 6, from: "sf" },
      });
    } else if (Inquiry == 7) {
      router.push({
        pathname: "/inquiry/bottom/summary/",
        query: { inqType: 7, from: "sf" },
      });
    } else if (Inquiry == 8) {
      router.push({
        pathname: "/inquiry/short/summary/",
        query: { inqType: 8, from: "sf" },
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
          <li>Select Fabric</li>
        </ul>
      </div>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} display="flex" justifyContent="space-between">
          <Typography>Select Fabric</Typography>
          <Box display="flex" sx={{ gap: "10px" }}>
            {/* <Link href=""> */}
            <Button
              onClick={() => navToSummary(inqType)}
              variant="outlined"
              color="primary"
            >
              summary
            </Button>
            {/* </Link> */}
            <Link href="/inquiry/select-inquiry/">
              <Button variant="outlined" color="primary">
                main menu
              </Button>
            </Link>
            <Link href={`/inquiry/color-code/?inqType=${inqType}`}>
              <Button
                variant="outlined"
                color="primary"
                endIcon={<NavigateNextIcon />}
              >
                next
              </Button>
            </Link>
          </Box>
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
                    No fabrics available for this category.
                  </Typography>
                  <Typography align="center" sx={{ color: "#BEBEBE" }}>
                    Please navigate to the Master Fabric section and add fabrics
                    by selecting this category.
                  </Typography>
                </Box>
              </Box>
            ) : (
              fabricList.map((fabric, index) => (
                <Grid item xs={12} key={index} p={1} md={4} lg={3}>
                  <Card
                    sx={{
                      boxShadow: "none",
                      borderRadius: "10px",
                      p: "20px",
                      mb: "15px",
                      position: "relative",
                      height: "auto",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      handleCardClick(fabric.inquiryCategoryFabrics[0].fabricId)
                    }
                  >
                    <Grid container>
                      <Grid
                        item
                        display="flex"
                        justifyContent="space-between"
                        xs={12}
                      >
                        <Typography
                          alignItems="end"
                          as="h4"
                          fontWeight="500"
                          fontSize="17px"
                          mt="10px"
                        >
                          {fabric.name}
                        </Typography>
                        <Checkbox
                          checked={
                            isChecked[fabric.inquiryCategoryFabrics[0].fabricId]
                          }
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <p style={{ fontSize: "12px", color: "dodgerblue" }}>
                          Inquiry Categories
                        </p>
                        {fabric.inquiryCategoryFabrics.map(
                          (category, index) => (
                            <span key={index}>
                              {category.inquiryCategoryId},{" "}
                            </span>
                          )
                        )}
                      </Grid>
                      <Grid
                        mt={2}
                        item
                        display="flex"
                        justifyContent="center"
                        xs={12}
                      >
                        <img width="100px" src="/images/fabricnew.png" />
                      </Grid>
                    </Grid>
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
