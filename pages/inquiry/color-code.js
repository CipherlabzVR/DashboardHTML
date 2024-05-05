import React, { useEffect, useState } from "react";
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
  Modal,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AddGSM from "@/components/UIElements/Modal/AddGSM";
import AddColor from "@/components/UIElements/Modal/AddColor";
import AddSupplier from "@/components/UIElements/Modal/AddSupplier";
import AddComposition from "@/components/UIElements/Modal/AddComposition";
import { useRouter } from "next/router";
import BASE_URL from "@/components/Services/api";
import { CheckBox } from "@mui/icons-material";
import { ToastContainer } from "react-toastify";

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

export default function SelectFabric() {
  const [openGSM, setOpenGSM] = React.useState(false);
  const [openComposition, setOpenComposition] = React.useState(false);
  const [openSupplier, setOpenSupplier] = React.useState(false);
  const [openColor, setOpenColor] = React.useState(false);
  const handleGSMOpen = () => setOpenGSM(true);
  const handleCompositionOpen = () => setOpenComposition(true);
  const handleSupplierOpen = () => setOpenSupplier(true);
  const handleColorOpen = () => setOpenColor(true);
  const handleGSMClose = () => setOpenGSM(false);
  const handleCompositionClose = () => setOpenComposition(false);
  const handleSupplierClose = () => setOpenSupplier(false);
  const handleColorClose = () => setOpenColor(false);
  const router = useRouter();
  const inqType = router.query.inqType;

  const [supplierList, setSupplierList] = useState([]);
  const [gsmList, setGSMList] = useState([]);
  const [compositionList, setCompositionList] = useState([]);
  const [colorCodeList, setColorCodeList] = useState([]);

  const fetchColorCodeList = async () => {
    try {
      const response = await fetch(`${BASE_URL}/ColorCode/GetAllColorCode`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch Color Code List");
      }

      const data = await response.json();
      setColorCodeList(data.result);
    } catch (error) {
      console.error("Error fetching Color Code List:", error);
    }
  };

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

  const fetchGSMList = async () => {
    try {
      const response = await fetch(`${BASE_URL}/GSM/GetAllGSM`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch GSM List");
      }

      const data = await response.json();
      setGSMList(data.result);
    } catch (error) {
      console.error("Error fetching GSM List:", error);
    }
  };

  const fetchSupplierList = async () => {
    try {
      const response = await fetch(`${BASE_URL}/Supplier/GetAllSupplier`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch Supplier List");
      }

      const data = await response.json();
      setSupplierList(data.result);
    } catch (error) {
      console.error("Error fetching Supplier List:", error);
    }
  };

  useEffect(() => {
    fetchColorCodeList();
    fetchCompositionList();
    fetchGSMList();
    fetchSupplierList();
  }, []);

  return (
    <>
    <ToastContainer/>
      <div className={styles.pageTitle}>
        <Typography color="primary" variant="h6">
          Sewwandi's Inquiry (Option 01)
        </Typography>
        <ul>
          <li>
            <Link href="/inquiry/inquries/">Inquries</Link>
          </li>
          <li>Color Code</li>
        </ul>
      </div>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} display="flex" justifyContent="space-between">
          <Typography>Color Code</Typography>
          <Box display="flex" sx={{ gap: "10px" }}>
            <Link href={`/inquiry/select-fabric/?inqType=${inqType}`}>
              <Button variant="outlined" color="primary">
                previous
              </Button>
            </Link>
            <Link href="/inquiry/select-inquiry/">
              <Button variant="outlined" color="primary">
                main menu
              </Button>
            </Link>
            <Link href={`/inquiry/sizes/?inqType=${inqType}`}>
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
            <Grid item xs={12} p={1}>
              <TableContainer component={Paper}>
                <Table aria-label="simple table" className="dark-table">
                  <TableHead>
                    <TableRow>
                      <TableCell>#</TableCell>
                      <TableCell>Fabic</TableCell>
                      <TableCell>GSM</TableCell>
                      <TableCell>Composition</TableCell>
                      <TableCell>Supplier</TableCell>
                      <TableCell>Color Code</TableCell>
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
                      <TableCell>Wetlook</TableCell>
                      <TableCell>
                        <Button onClick={handleGSMOpen}>gsm 01</Button>
                      </TableCell>
                      <TableCell>
                        <Button onClick={handleCompositionOpen}>COM 01</Button>
                      </TableCell>
                      <TableCell>
                        <Button onClick={handleSupplierOpen}>
                          Supplier 01
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button onClick={handleColorOpen}>Color 01</Button>
                      </TableCell>
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
          </Grid>
        </Grid>
      </Grid>

      {/* GSM */}
      <Modal
        open={openGSM}
        onClose={handleGSMClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="bg-black">
          <Box>
            <Grid container>
              <Grid item xs={12} mt={2}>
                <AddGSM fetchItems={fetchGSMList} />
              </Grid>
              <Grid item xs={12} mt={2}>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table" className="dark-table">
                    <TableHead>
                      <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>GSM</TableCell>
                        <TableCell align="right">Status</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {gsmList.map((gsm, index) => (
                        <TableRow
                          key={index}
                          onClick={handleGSMClose}
                          sx={hover}
                        >
                          <TableCell component="th" scope="row">
                            {index + 1}
                          </TableCell>
                          <TableCell>{gsm.name}</TableCell>
                          <TableCell align="right">
                            {gsm.isActive == true ? (
                              <span className="successBadge">Active</span>
                            ) : (
                              <span className="dangerBadge">Inctive</span>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              <Button
                variant="contained"
                color="error"
                onClick={handleGSMClose}
                sx={{
                  mt: 2,
                  textTransform: "capitalize",
                  borderRadius: "8px",
                  fontWeight: "500",
                  fontSize: "13px",
                  padding: "12px 20px",
                }}
              >
                Cancel
              </Button>
            </Grid>
          </Box>
        </Box>
      </Modal>

      {/* Composition */}
      <Modal
        open={openComposition}
        onClose={handleCompositionClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="bg-black">
          <Box>
            <Grid container>
              <Grid item xs={12} mt={2}>
                <AddComposition fetchItems={fetchCompositionList} />
              </Grid>
              <Grid item xs={12} mt={2}>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table" className="dark-table">
                    <TableHead>
                      <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Composition</TableCell>
                        <TableCell align="right">Status</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {compositionList.map((composition, index) => (
                        <TableRow
                          key={index}
                          onClick={handleCompositionClose}
                          sx={hover}
                        >
                          <TableCell component="th" scope="row">
                            {index + 1}
                          </TableCell>
                          <TableCell>{composition.name}</TableCell>
                          <TableCell align="right">
                            {composition.isActive == true ? (
                              <span className="successBadge">Active</span>
                            ) : (
                              <span className="dangerBadge">Inctive</span>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              <Button
                variant="contained"
                color="error"
                onClick={handleCompositionClose}
                sx={{
                  mt: 2,
                  textTransform: "capitalize",
                  borderRadius: "8px",
                  fontWeight: "500",
                  fontSize: "13px",
                  padding: "12px 20px",
                }}
              >
                Cancel
              </Button>
            </Grid>
          </Box>
        </Box>
      </Modal>

      {/* Supplier */}
      <Modal
        open={openSupplier}
        onClose={handleSupplierClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="bg-black">
          <Box>
            <Grid container>
              <Grid item xs={12} mt={2}>
                <AddSupplier fetchItems={fetchSupplierList} />
              </Grid>
              <Grid item xs={12} mt={2}>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table" className="dark-table">
                    <TableHead>
                      <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Supplier</TableCell>
                        <TableCell align="right">Status</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {supplierList.map((supplier, index) => (
                        <TableRow
                          key={index}
                          onClick={handleSupplierClose}
                          sx={hover}
                        >
                          <TableCell component="th" scope="row">
                            {index + 1}
                          </TableCell>
                          <TableCell>{supplier.name}</TableCell>
                          <TableCell align="right">
                            {supplier.isActive == true ? (
                              <span className="successBadge">Active</span>
                            ) : (
                              <span className="dangerBadge">Inctive</span>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              <Button
                variant="contained"
                color="error"
                onClick={handleSupplierClose}
                sx={{
                  mt: 2,
                  textTransform: "capitalize",
                  borderRadius: "8px",
                  fontWeight: "500",
                  fontSize: "13px",
                  padding: "12px 20px",
                }}
              >
                Cancel
              </Button>
            </Grid>
          </Box>
        </Box>
      </Modal>

      {/* Color */}
      <Modal
        open={openColor}
        onClose={handleColorClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="bg-black">
          <Box>
            <Grid container>
              <Grid item xs={12} mt={2}>
                <AddColor fetchItems={fetchColorCodeList}/>
              </Grid>
              <Grid item xs={12} mt={2}>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table" className="dark-table">
                    <TableHead>
                      <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Color</TableCell>
                        <TableCell align="right">Status</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                    {colorCodeList.map((color, index) => (
                        <TableRow
                          key={index}
                          onClick={handleColorClose}
                          sx={hover}
                        >
                          <TableCell component="th" scope="row">
                            {index + 1}
                          </TableCell>
                          <TableCell>{color.name}</TableCell>
                          <TableCell align="right">
                            {color.isActive == true ? (
                              <span className="successBadge">Active</span>
                            ) : (
                              <span className="dangerBadge">Inctive</span>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              <Button
                variant="contained"
                color="error"
                onClick={handleColorClose}
                sx={{
                  mt: 2,
                  textTransform: "capitalize",
                  borderRadius: "8px",
                  fontWeight: "500",
                  fontSize: "13px",
                  padding: "12px 20px",
                }}
              >
                Cancel
              </Button>
            </Grid>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
