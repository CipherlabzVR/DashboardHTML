import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import {
  Box,
  Button,
  Typography,
  Card,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

export default function BackRDocument() {
  const [backRImage, setBackRImage] = useState(null);
  const [backREMBImage, setBackREMBImage] = useState(null);
  const [backRSUBImage, setBackRSUBImage] = useState(null);
  const [backRSPrintImage, setBackRSPrintImage] = useState(null);
  const [backRDTFImage, setBackRDTFImage] = useState(null);

  const [isBackRChecked, setIsBackRChecked] = useState(false);
  const [isBackREMBChecked, setIsBackREMBChecked] = useState(false);
  const [isBackRSUBChecked, setIsBackRSUBChecked] = useState(false);
  const [isBackRSPrintChecked, setIsBackRSPrintChecked] = useState(false);
  const [isBackRDTFChecked, setIsBackRDTFChecked] = useState(false);

  const handleBackRCheckboxChange = (event) => {
    setIsBackRChecked(event.target.checked);
  };
  const handleBackREMBCheckboxChange = (event) => {
    setIsBackREMBChecked(event.target.checked);
  };
  const handleBackRSUBCheckboxChange = (event) => {
    setIsBackRSUBChecked(event.target.checked);
  };
  const handleBackRSPrintCheckboxChange = (event) => {
    setIsBackRSPrintChecked(event.target.checked);
  };
  const handleBackRDTFCheckboxChange = (event) => {
    setIsBackRDTFChecked(event.target.checked);
  };

  const handleBackRImageUpload = (event) => {
    const file = event.target.files[0];
    setBackRImage(URL.createObjectURL(file));
  };
  const handleRemoveBackRImage = () => {
    setBackRImage(null);
  };
  const handleBackREMBImageUpload = (event) => {
    const file = event.target.files[0];
    setBackREMBImage(URL.createObjectURL(file));
  };
  const handleRemoveBackREMBImage = () => {
    setBackREMBImage(null);
  };
  const handleBackRSUBImageUpload = (event) => {
    const file = event.target.files[0];
    setBackRSUBImage(URL.createObjectURL(file));
  };
  const handleRemoveBackRSUBImage = () => {
    setBackRSUBImage(null);
  };
  const handleBackRSPrintImageUpload = (event) => {
    const file = event.target.files[0];
    setBackRSPrintImage(URL.createObjectURL(file));
  };
  const handleRemoveBackRSPrintImage = () => {
    setBackRSPrintImage(null);
  };
  const handleBackRDTFImageUpload = (event) => {
    const file = event.target.files[0];
    setBackRDTFImage(URL.createObjectURL(file));
  };
  const handleRemoveBackRDTFImage = () => {
    setBackRDTFImage(null);
  };
  return (
    <>
      <Grid item xs={12}>
        <Grid container>
          <Grid mt={2} item xs={12}>
            <Grid container mt={2}>
              <Grid item xs={12} lg={3}>
                <Card
                  sx={{
                    boxShadow: "none",
                    p: "10px",
                    mb: "15px",
                    height: "100%",
                    position: "relative",
                    cursor: "pointer",
                    backRgroundImage: backRImage
                      ? `linear-gradient(rgba(255,255,255, 0.7), rgba(255,255,255, 0.7)), url(${backRImage})`
                      : "none",
                    backRgroundSize: "cover",
                    backRgroundPosition: "center",
                  }}
                >
                  <FormControlLabel control={<Checkbox checked={isBackRChecked} onChange={handleBackRCheckboxChange}/>} />
                  <Typography variant="h5" fontWeight="bold">
                    Back R
                  </Typography>
                  <Box mt={1}>
                    <input
                      type="file"
                      id="backRImage"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleBackRImageUpload}
                    />
                    <label htmlFor="backRImage">
                      <Button disabled={!isBackRChecked && !backRImage} fullWidth variant="contained" component="span">
                        {backRImage ? "Change Image" : "Add Image"}
                      </Button>
                    </label>
                    <Button
                      fullWidth
                      color="error"
                      variant="outlined"
                      onClick={handleRemoveBackRImage}
                      disabled={!isBackRChecked && !backRImage}
                    >
                      Remove
                    </Button>
                  </Box>
                </Card>
              </Grid>
              <Grid item xs={12} lg={1}></Grid>
              <Grid item xs={12} lg={2}>
                <Card
                  sx={{
                    boxShadow: "none",
                    p: "10px",
                    mb: "15px",
                    height: "100%",
                    position: "relative",
                    cursor: "pointer",
                    backRgroundImage: backREMBImage
                      ? `linear-gradient(rgba(255,255,255, 0.7), rgba(255,255,255, 0.7)), url(${backREMBImage})`
                      : "none",
                    backRgroundSize: "cover",
                    backRgroundPosition: "center",
                  }}
                >
                  <FormControlLabel control={<Checkbox checked={isBackREMBChecked} onChange={handleBackREMBCheckboxChange}/>} label="EMB" />
                  <Box mt={1}>
                    <input
                      type="file"
                      id="backREMBImage"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleBackREMBImageUpload}
                    />
                    <label htmlFor="backREMBImage">
                      <Button
                        fullWidth
                        sx={{ mt: 4 }}
                        variant="contained"
                        component="span"
                        disabled={!isBackREMBChecked && !backREMBImage}
                      >
                        {backREMBImage ? "Change" : "Add Image"}
                      </Button>
                    </label>
                    <Button
                      fullWidth
                      color="error"
                      variant="outlined"
                      onClick={handleRemoveBackREMBImage}
                      disabled={!isBackREMBChecked && !backREMBImage}
                    >
                      Remove
                    </Button>
                  </Box>
                </Card>
              </Grid>
              <Grid item xs={12} lg={2}>
                <Card
                  sx={{
                    boxShadow: "none",
                    p: "10px",
                    mb: "15px",
                    height: "100%",
                    position: "relative",
                    cursor: "pointer",
                    backRgroundImage: backRSUBImage
                      ? `linear-gradient(rgba(255,255,255, 0.7), rgba(255,255,255, 0.7)), url(${backRSUBImage})`
                      : "none",
                    backRgroundSize: "cover",
                    backRgroundPosition: "center",
                  }}
                >
                  <FormControlLabel control={<Checkbox checked={isBackRSUBChecked} onChange={handleBackRSUBCheckboxChange}/>} label="SUB" />
                  <Box mt={1}>
                    <input
                      type="file"
                      id="backRSUBImage"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleBackRSUBImageUpload}
                    />
                    <label htmlFor="backRSUBImage">
                      <Button
                        fullWidth
                        sx={{ mt: 4 }}
                        variant="contained"
                        component="span"
                        disabled={!isBackRSUBChecked && !backRSUBImage}
                      >
                        {backRSUBImage ? "Change" : "Add Image"}
                      </Button>
                    </label>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="error"
                      onClick={handleRemoveBackRSUBImage}
                      disabled={!isBackRSUBChecked && !backRSUBImage}
                    >
                      Remove
                    </Button>
                  </Box>
                </Card>
              </Grid>
              <Grid item xs={12} lg={2}>
                <Card
                  sx={{
                    boxShadow: "none",
                    p: "10px",
                    mb: "15px",
                    height: "100%",
                    position: "relative",
                    cursor: "pointer",
                    backRgroundImage: backRSPrintImage
                      ? `linear-gradient(rgba(255,255,255, 0.7), rgba(255,255,255, 0.7)), url(${backRSPrintImage})`
                      : "none",
                    backRgroundSize: "cover",
                    backRgroundPosition: "center",
                  }}
                >
                  <FormControlLabel control={<Checkbox checked={isBackRSPrintChecked} onChange={handleBackRSPrintCheckboxChange} />} label="S Print" />
                  <Box mt={1}>
                    <input
                      type="file"
                      id="backRSPrintImage"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleBackRSPrintImageUpload}
                    />
                    <label htmlFor="backRSPrintImage">
                      <Button
                        fullWidth
                        sx={{ mt: 4 }}
                        variant="contained"
                        component="span"
                        disabled={!isBackRSPrintChecked && !backRSPrintImage}
                      >
                        {backRSPrintImage ? "Change" : "Add Image"}
                      </Button>
                    </label>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="error"
                      onClick={handleRemoveBackRSPrintImage}
                      disabled={!isBackRSPrintChecked && !backRSPrintImage}
                    >
                      Remove
                    </Button>
                  </Box>
                </Card>
              </Grid>
              <Grid item xs={12} lg={2}>
                <Card
                  sx={{
                    boxShadow: "none",
                    p: "10px",
                    mb: "15px",
                    height: "100%",
                    position: "relative",
                    cursor: "pointer",
                    backRgroundImage: backRDTFImage
                      ? `linear-gradient(rgba(255,255,255, 0.7), rgba(255,255,255, 0.7)), url(${backRDTFImage})`
                      : "none",
                    backRgroundSize: "cover",
                    backRgroundPosition: "center",
                  }}
                >
                  <FormControlLabel control={<Checkbox checked={isBackRDTFChecked} onChange={handleBackRDTFCheckboxChange}/>} label="DTF" />
                  <Box mt={1}>
                    <input
                      type="file"
                      id="backRDTFImage"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleBackRDTFImageUpload}
                    />
                    <label htmlFor="backRDTFImage">
                      <Button
                        fullWidth
                        sx={{ mt: 4 }}
                        variant="contained"
                        component="span"
                        disabled={!isBackRDTFChecked && !backRDTFImage}
                      >
                        {backRDTFImage ? "Change" : "Add Image"}
                      </Button>
                    </label>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="error"
                      onClick={handleRemoveBackRDTFImage}
                      disabled={!isBackRDTFChecked && !backRDTFImage}
                    >
                      Remove
                    </Button>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
