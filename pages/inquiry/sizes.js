import React, { useState } from "react";
import styles from "@/styles/PageTitle.module.css";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import {
  Box,
  Button,
  Table,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Tooltip,
  IconButton,
  Card,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AddSizesToInquiry from "@/components/UIElements/Modal/AddSizesToInquiry";
import { useRouter } from "next/router";

export default function SelectSizes() {
  const router = useRouter();
  const inqType = router.query.inqType;
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const NavigationNext = (Inquiry) => {
    if (Inquiry == 1) {
      router.push({
        pathname: "/inquiry/tshirt/neck/",
        query: { inqType: 1 },
      });
    } else if (Inquiry == 2) {
      router.push({
        pathname: "/inquiry/shirt/coller/",
        query: { inqType: 2 },
      });
    } else if (Inquiry == 3) {
      router.push({
        pathname: "/inquiry/cap/info/",
        query: { inqType: 3 },
      });
    } else if (Inquiry == 4) {
      router.push({
        pathname: "/inquiry/visor/components/",
        query: { inqType: 4 },
      });
    } else if (Inquiry == 5) {
      router.push({
        pathname: "/inquiry/hat/document-panel/",
        query: { inqType: 5 },
      });
    }else if (Inquiry == 6) {
      router.push({
        pathname: "/inquiry/bag/document-panel/",
        query: { inqType: 6 },
      });
    }else if (Inquiry == 7) {
      router.push({
        pathname: "/inquiry/bottom/component/",
        query: { inqType: 7 },
      });
    }else if (Inquiry == 8) {
      router.push({
        pathname: "/inquiry/short/component/",
        query: { inqType: 8 },
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
          <li>Sizes</li>
        </ul>
      </div>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} display="flex" justifyContent="space-between">
          <Typography>Sizes</Typography>
          <Box display="flex" sx={{ gap: "10px" }}>
            <Link href={`/inquiry/color-code/?inqType=${inqType}`}>
              <Button variant="outlined" color="primary">
                previous
              </Button>
            </Link>
            <Link href="/inquiry/select-inquiry/">
              <Button variant="outlined" color="primary">
                main menu
              </Button>
            </Link>
            <Button
              variant="outlined"
              color="primary"
              endIcon={<NavigateNextIcon />}
              onClick={() => NavigationNext(inqType)}
            >
              next
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12} p={1}>
              <TableContainer component={Paper}>
                <Table aria-label="simple table" className="dark-table">
                  <TableHead>
                    <TableRow>
                      <TableCell>#</TableCell>
                      <TableCell>Size</TableCell>
                      <TableCell>Sleeve</TableCell>
                      <TableCell>2XS</TableCell>
                      <TableCell>XS</TableCell>
                      <TableCell>S</TableCell>
                      <TableCell>M</TableCell>
                      <TableCell>L</TableCell>
                      <TableCell>XL</TableCell>
                      <TableCell>2XL</TableCell>
                      <TableCell>3XL</TableCell>
                      <TableCell>4XL</TableCell>
                      <TableCell>5XL</TableCell>
                      <TableCell>Width</TableCell>
                      <TableCell>Lenght</TableCell>
                      <TableCell align="right">Total</TableCell>
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
                      <TableCell>Unisex</TableCell>
                      <TableCell>Short</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell>10</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell align="right">10</TableCell>
                      <TableCell align="right">
                        <Tooltip title="Delete" placement="top">
                          <IconButton aria-label="delete" size="small">
                            <DeleteIcon color="error" fontSize="inherit" />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                        background: "#e5e5e5",
                      }}
                    >
                      <TableCell component="th" scope="row">
                        1
                      </TableCell>
                      <TableCell>Special</TableCell>
                      <TableCell>Short</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell>10</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell align="right">10</TableCell>
                      <TableCell align="right">
                        <Tooltip title="Delete" placement="top">
                          <IconButton aria-label="delete" size="small">
                            <DeleteIcon color="error" fontSize="inherit" />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        1
                      </TableCell>
                      <TableCell>Unisex</TableCell>
                      <TableCell>Short</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell>10</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell align="right">10</TableCell>
                      <TableCell align="right">
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
            <Grid item xs={12} p={1}>
              <AddSizesToInquiry />
            </Grid>
            {inqType == 6 ? (
              <Grid item xs={12} p={1}>
                <Grid container>
                  <Grid item xs={12} p={1} md={4} lg={3}>
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
                    >
                      <RadioGroup name="bag" value={selectedOption} onChange={handleOptionChange}>
                        <FormControlLabel
                          value="Contrast"
                          control={<Radio />}
                          label="Contrast"
                        />
                      </RadioGroup>
                    </Card>
                  </Grid>
                  <Grid item xs={12} p={1} md={4} lg={3}>
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
                    >
                      <RadioGroup name="bag" value={selectedOption} onChange={handleOptionChange}>
                        <FormControlLabel
                          value="Flap"
                          control={<Radio />}
                          label="Flap"
                        />
                      </RadioGroup>
                    </Card>
                  </Grid>
                  <Grid item xs={12} p={1} md={4} lg={3}>
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
                    >
                      <RadioGroup name="bag" value={selectedOption} onChange={handleOptionChange}>
                        <FormControlLabel
                          value="Zipper"
                          control={<Radio />}
                          label="Zipper"
                        />
                      </RadioGroup>
                    </Card>
                  </Grid>
                  <Grid item xs={12} p={1} md={4} lg={3}>
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
                    >
                      <RadioGroup name="bag" value={selectedOption} onChange={handleOptionChange}>
                        <FormControlLabel
                          value="Pockets"
                          control={<Radio />}
                          label="Pockets"
                        />
                      </RadioGroup>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            ) : (
              ""
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
