import React from "react";
import styles from "@/styles/PageTitle.module.css";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import {
  Button,
  Typography,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import Card from "@mui/material/Card";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import AddOption from "@/components/UIElements/Modal/AddOption";
import { useRouter } from 'next/router';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
const hover = {
  transition: "0.5s",
  "&:hover": {
    backgroundColor: "#e5e5e5",
    cursor: "pointer",
  },
};

export default function SelectInquiry() {
  const [open, setOpen] = React.useState(false);
  const [selectedInquiry, setSelectedInquiry] = React.useState(null); 

  const handleOpen = (category) => {
    setSelectedInquiry(category); 
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const router = useRouter();
  
  const handleNavigation = () => {   
    if (selectedInquiry === 1) {
      router.push({
        pathname: '/inquiry/select-fabric',
        query: { inqType: 1 }
      });
    } else if (selectedInquiry === 2) {
      router.push({
        pathname: '/inquiry/select-fabric',
        query: { inqType: 2 }
      });
    }else if (selectedInquiry === 3) {
      router.push({
        pathname: '/inquiry/select-fabric',
        query: { inqType: 3 }
      });
    }else if (selectedInquiry === 4) {
      router.push({
        pathname: '/inquiry/select-fabric',
        query: { inqType: 4 }
      });
    }
    else if (selectedInquiry === 5) {
      router.push({
        pathname: '/inquiry/select-fabric',
        query: { inqType: 5 }
      });
    }
    else if (selectedInquiry === 6) {
      router.push({
        pathname: '/inquiry/select-fabric',
        query: { inqType: 6 }
      });
    }else if (selectedInquiry === 7) {
      router.push({
        pathname: '/inquiry/select-fabric',
        query: { inqType: 7 }
      });
    }else if (selectedInquiry === 8) {
      router.push({
        pathname: '/inquiry/select-fabric',
        query: { inqType: 8 }
      });
    }

  };
  

  return (
    <>
      <div className={styles.pageTitle}>
        <Typography color="primary" variant="h6">
          Sewwandi's Inquiry
        </Typography>
        <ul>
          <li>
            <Link href="/inquiry/inquries/">Inquries</Link>
          </li>
          <li>Select Inquiry Category</li>
        </ul>
      </div>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} display="flex" justifyContent="space-between">
          <Typography>Select Inquiry Category</Typography>
          <Link href="/inquiry/inquries/">
            <Button variant="outlined" color="error">
              exit
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12} p={1} md={4} lg={3}>
              <Card
                onClick={() => handleOpen(1)}
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
                <Grid container>
                  <Grid item xs={12}>
                    <Typography
                      align="center"
                      alignItems="end"
                      as="h4"
                      fontWeight="500"
                      fontSize="17px"
                      mt="10px"
                    >
                      T Shirt
                    </Typography>
                  </Grid>
                  <Grid
                    mt={2}
                    mb={2}
                    item
                    display="flex"
                    justifyContent="center"
                    xs={12}
                  >
                    <img width="100px" src="/images/inquiry/tshirt.png" />
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={12} p={1} md={4} lg={3}>
              <Card
                onClick={() => handleOpen(2)}
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
                <Grid container>
                  <Grid item xs={12}>
                    <Typography
                      align="center"
                      alignItems="end"
                      as="h4"
                      fontWeight="500"
                      fontSize="17px"
                      mt="10px"
                    >
                      Shirt
                    </Typography>
                  </Grid>
                  <Grid
                    mt={2}
                    mb={2}
                    item
                    display="flex"
                    justifyContent="center"
                    xs={12}
                  >
                    <img width="100px" src="/images/inquiry/shirt.png" />
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={12} p={1} md={4} lg={3}>
              <Card
                onClick={() => handleOpen(3)}
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
                <Grid container>
                  <Grid item xs={12}>
                    <Typography
                      align="center"
                      alignItems="end"
                      as="h4"
                      fontWeight="500"
                      fontSize="17px"
                      mt="10px"
                    >
                      Cap
                    </Typography>
                  </Grid>
                  <Grid
                    mt={2}
                    mb={2}
                    item
                    display="flex"
                    justifyContent="center"
                    xs={12}
                  >
                    <img width="100px" src="/images/inquiry/cap.png" />
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={12} p={1} md={4} lg={3}>
              <Card
                onClick={() => handleOpen(4)}
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
                <Grid container>
                  <Grid item xs={12}>
                    <Typography
                      align="center"
                      alignItems="end"
                      as="h4"
                      fontWeight="500"
                      fontSize="17px"
                      mt="10px"
                    >
                      Visor
                    </Typography>
                  </Grid>
                  <Grid
                    mt={2}
                    mb={2}
                    item
                    display="flex"
                    justifyContent="center"
                    xs={12}
                  >
                    <img width="100px" src="/images/inquiry/visor.png" />
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={12} p={1} md={4} lg={3}>
              <Card
                onClick={() => handleOpen(5)}
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
                <Grid container>
                  <Grid item xs={12}>
                    <Typography
                      align="center"
                      alignItems="end"
                      as="h4"
                      fontWeight="500"
                      fontSize="17px"
                      mt="10px"
                    >
                      Hat
                    </Typography>
                  </Grid>
                  <Grid
                    mt={2}
                    mb={2}
                    item
                    display="flex"
                    justifyContent="center"
                    xs={12}
                  >
                    <img width="100px" src="/images/inquiry/hat.png" />
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={12} p={1} md={4} lg={3}>
              <Card
                onClick={() => handleOpen(6)}
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
                <Grid container>
                  <Grid item xs={12}>
                    <Typography
                      align="center"
                      alignItems="end"
                      as="h4"
                      fontWeight="500"
                      fontSize="17px"
                      mt="10px"
                    >
                      Bag
                    </Typography>
                  </Grid>
                  <Grid
                    mt={2}
                    mb={2}
                    item
                    display="flex"
                    justifyContent="center"
                    xs={12}
                  >
                    <img width="100px" src="/images/inquiry/bag.png" />
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={12} p={1} md={4} lg={3}>
              <Card
                onClick={() => handleOpen(7)}
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
                <Grid container>
                  <Grid item xs={12}>
                    <Typography
                      align="center"
                      alignItems="end"
                      as="h4"
                      fontWeight="500"
                      fontSize="17px"
                      mt="10px"
                    >
                      Bottom
                    </Typography>
                  </Grid>
                  <Grid
                    mt={2}
                    mb={2}
                    item
                    display="flex"
                    justifyContent="center"
                    xs={12}
                  >
                    <img width="100px" src="/images/inquiry/bottom.png" />
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={12} p={1} md={4} lg={3}>
              <Card
                onClick={() => handleOpen(8)}
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
                <Grid container>
                  <Grid item xs={12}>
                    <Typography
                      align="center"
                      alignItems="end"
                      as="h4"
                      fontWeight="500"
                      fontSize="17px"
                      mt="10px"
                    >
                      Short
                    </Typography>
                  </Grid>
                  <Grid
                    mt={2}
                    mb={2}
                    item
                    display="flex"
                    justifyContent="center"
                    xs={12}
                  >
                    <img width="100px" src="/images/inquiry/shorts.png" />
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="bg-black">
          <form>
            <Box>
              <Grid container>
                <Grid item xs={12} mt={2}>
                  <AddOption />
                </Grid>
                <Grid item xs={12} mt={2}>
                  <TableContainer component={Paper}>
                    <Table aria-label="simple table" className="dark-table">
                      <TableHead>
                        <TableRow>
                          <TableCell>#</TableCell>
                          <TableCell>Inquiry No</TableCell>
                          <TableCell align="right">Inquiry Option</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow onClick={handleNavigation} sx={hover}>
                          <TableCell component="th" scope="row">
                            01
                          </TableCell>
                          <TableCell>INQ1001</TableCell>
                          <TableCell align="right">Option 01</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
              </Grid>
            </Box>
          </form>
        </Box>
      </Modal>
    </>
  );
}
