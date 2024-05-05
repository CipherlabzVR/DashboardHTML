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

export default function BackLDocument() {
  const [backLImage, setBackLImage] = useState(null);
  const [backLEMBImage, setBackLEMBImage] = useState(null);
  const [backLSUBImage, setBackLSUBImage] = useState(null);
  const [backLSPrintImage, setBackLSPrintImage] = useState(null);
  const [backLDTFImage, setBackLDTFImage] = useState(null);

  const [isBackLChecked, setIsBackLChecked] = useState(false);
  const [isBackLEMBChecked, setIsBackLEMBChecked] = useState(false);
  const [isBackLSUBChecked, setIsBackLSUBChecked] = useState(false);
  const [isBackLSPrintChecked, setIsBackLSPrintChecked] = useState(false);
  const [isBackLDTFChecked, setIsBackLDTFChecked] = useState(false);

  const handleBackLCheckboxChange = (event) => {
    setIsBackLChecked(event.target.checked);
  };
  const handleBackLEMBCheckboxChange = (event) => {
    setIsBackLEMBChecked(event.target.checked);
  };
  const handleBackLSUBCheckboxChange = (event) => {
    setIsBackLSUBChecked(event.target.checked);
  };
  const handleBackLSPrintCheckboxChange = (event) => {
    setIsBackLSPrintChecked(event.target.checked);
  };
  const handleBackLDTFCheckboxChange = (event) => {
    setIsBackLDTFChecked(event.target.checked);
  };

  const handleBackLImageUpload = (event) => {
    const file = event.target.files[0];
    setBackLImage(URL.createObjectURL(file));
  };
  const handleRemoveBackLImage = () => {
    setBackLImage(null);
  };
  const handleBackLEMBImageUpload = (event) => {
    const file = event.target.files[0];
    setBackLEMBImage(URL.createObjectURL(file));
  };
  const handleRemoveBackLEMBImage = () => {
    setBackLEMBImage(null);
  };
  const handleBackLSUBImageUpload = (event) => {
    const file = event.target.files[0];
    setBackLSUBImage(URL.createObjectURL(file));
  };
  const handleRemoveBackLSUBImage = () => {
    setBackLSUBImage(null);
  };
  const handleBackLSPrintImageUpload = (event) => {
    const file = event.target.files[0];
    setBackLSPrintImage(URL.createObjectURL(file));
  };
  const handleRemoveBackLSPrintImage = () => {
    setBackLSPrintImage(null);
  };
  const handleBackLDTFImageUpload = (event) => {
    const file = event.target.files[0];
    setBackLDTFImage(URL.createObjectURL(file));
  };
  const handleRemoveBackLDTFImage = () => {
    setBackLDTFImage(null);
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
                    backLgroundImage: backLImage
                      ? `linear-gradient(rgba(255,255,255, 0.7), rgba(255,255,255, 0.7)), url(${backLImage})`
                      : "none",
                    backLgroundSize: "cover",
                    backLgroundPosition: "center",
                  }}
                >
                  <FormControlLabel control={<Checkbox checked={isBackLChecked} onChange={handleBackLCheckboxChange}/>} />
                  <Typography variant="h5" fontWeight="bold">
                    Back L
                  </Typography>
                  <Box mt={1}>
                    <input
                      type="file"
                      id="backLImage"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleBackLImageUpload}
                    />
                    <label htmlFor="backLImage">
                      <Button disabled={!isBackLChecked && !backLImage} fullWidth variant="contained" component="span">
                        {backLImage ? "Change Image" : "Add Image"}
                      </Button>
                    </label>
                    <Button
                      fullWidth
                      color="error"
                      variant="outlined"
                      onClick={handleRemoveBackLImage}
                      disabled={!isBackLChecked && !backLImage}
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
                    backLgroundImage: backLEMBImage
                      ? `linear-gradient(rgba(255,255,255, 0.7), rgba(255,255,255, 0.7)), url(${backLEMBImage})`
                      : "none",
                    backLgroundSize: "cover",
                    backLgroundPosition: "center",
                  }}
                >
                  <FormControlLabel control={<Checkbox checked={isBackLEMBChecked} onChange={handleBackLEMBCheckboxChange}/>} label="EMB" />
                  <Box mt={1}>
                    <input
                      type="file"
                      id="backLEMBImage"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleBackLEMBImageUpload}
                    />
                    <label htmlFor="backLEMBImage">
                      <Button
                        fullWidth
                        sx={{ mt: 4 }}
                        variant="contained"
                        component="span"
                        disabled={!isBackLEMBChecked && !backLEMBImage}
                      >
                        {backLEMBImage ? "Change" : "Add Image"}
                      </Button>
                    </label>
                    <Button
                      fullWidth
                      color="error"
                      variant="outlined"
                      onClick={handleRemoveBackLEMBImage}
                      disabled={!isBackLEMBChecked && !backLEMBImage}
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
                    backLgroundImage: backLSUBImage
                      ? `linear-gradient(rgba(255,255,255, 0.7), rgba(255,255,255, 0.7)), url(${backLSUBImage})`
                      : "none",
                    backLgroundSize: "cover",
                    backLgroundPosition: "center",
                  }}
                >
                  <FormControlLabel control={<Checkbox checked={isBackLSUBChecked} onChange={handleBackLSUBCheckboxChange}/>} label="SUB" />
                  <Box mt={1}>
                    <input
                      type="file"
                      id="backLSUBImage"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleBackLSUBImageUpload}
                    />
                    <label htmlFor="backLSUBImage">
                      <Button
                        fullWidth
                        sx={{ mt: 4 }}
                        variant="contained"
                        component="span"
                        disabled={!isBackLSUBChecked && !backLSUBImage}
                      >
                        {backLSUBImage ? "Change" : "Add Image"}
                      </Button>
                    </label>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="error"
                      onClick={handleRemoveBackLSUBImage}
                      disabled={!isBackLSUBChecked && !backLSUBImage}
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
                    backLgroundImage: backLSPrintImage
                      ? `linear-gradient(rgba(255,255,255, 0.7), rgba(255,255,255, 0.7)), url(${backLSPrintImage})`
                      : "none",
                    backLgroundSize: "cover",
                    backLgroundPosition: "center",
                  }}
                >
                  <FormControlLabel control={<Checkbox checked={isBackLSPrintChecked} onChange={handleBackLSPrintCheckboxChange} />} label="S Print" />
                  <Box mt={1}>
                    <input
                      type="file"
                      id="backLSPrintImage"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleBackLSPrintImageUpload}
                    />
                    <label htmlFor="backLSPrintImage">
                      <Button
                        fullWidth
                        sx={{ mt: 4 }}
                        variant="contained"
                        component="span"
                        disabled={!isBackLSPrintChecked && !backLSPrintImage}
                      >
                        {backLSPrintImage ? "Change" : "Add Image"}
                      </Button>
                    </label>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="error"
                      onClick={handleRemoveBackLSPrintImage}
                      disabled={!isBackLSPrintChecked && !backLSPrintImage}
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
                    backLgroundImage: backLDTFImage
                      ? `linear-gradient(rgba(255,255,255, 0.7), rgba(255,255,255, 0.7)), url(${backLDTFImage})`
                      : "none",
                    backLgroundSize: "cover",
                    backLgroundPosition: "center",
                  }}
                >
                  <FormControlLabel control={<Checkbox checked={isBackLDTFChecked} onChange={handleBackLDTFCheckboxChange}/>} label="DTF" />
                  <Box mt={1}>
                    <input
                      type="file"
                      id="backLDTFImage"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleBackLDTFImageUpload}
                    />
                    <label htmlFor="backLDTFImage">
                      <Button
                        fullWidth
                        sx={{ mt: 4 }}
                        variant="contained"
                        component="span"
                        disabled={!isBackLDTFChecked && !backLDTFImage}
                      >
                        {backLDTFImage ? "Change" : "Add Image"}
                      </Button>
                    </label>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="error"
                      onClick={handleRemoveBackLDTFImage}
                      disabled={!isBackLDTFChecked && !backLDTFImage}
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
