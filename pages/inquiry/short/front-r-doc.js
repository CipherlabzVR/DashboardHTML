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

export default function FrontRDocument() {
  const [frontRImage, setFrontRImage] = useState(null);
  const [frontREMBImage, setFrontREMBImage] = useState(null);
  const [frontRSUBImage, setFrontRSUBImage] = useState(null);
  const [frontRSPrintImage, setFrontRSPrintImage] = useState(null);
  const [frontRDTFImage, setFrontRDTFImage] = useState(null);

  const [isFrontRChecked, setIsFrontRChecked] = useState(false);
  const [isFrontREMBChecked, setIsFrontREMBChecked] = useState(false);
  const [isFrontRSUBChecked, setIsFrontRSUBChecked] = useState(false);
  const [isFrontRSPrintChecked, setIsFrontRSPrintChecked] = useState(false);
  const [isFrontRDTFChecked, setIsFrontRDTFChecked] = useState(false);

  const handleFrontRCheckboxChange = (event) => {
    setIsFrontRChecked(event.target.checked);
  };
  const handleFrontREMBCheckboxChange = (event) => {
    setIsFrontREMBChecked(event.target.checked);
  };
  const handleFrontRSUBCheckboxChange = (event) => {
    setIsFrontRSUBChecked(event.target.checked);
  };
  const handleFrontRSPrintCheckboxChange = (event) => {
    setIsFrontRSPrintChecked(event.target.checked);
  };
  const handleFrontRDTFCheckboxChange = (event) => {
    setIsFrontRDTFChecked(event.target.checked);
  };

  const handleFrontRImageUpload = (event) => {
    const file = event.target.files[0];
    setFrontRImage(URL.createObjectURL(file));
  };
  const handleRemoveFrontRImage = () => {
    setFrontRImage(null);
  };
  const handleFrontREMBImageUpload = (event) => {
    const file = event.target.files[0];
    setFrontREMBImage(URL.createObjectURL(file));
  };
  const handleRemoveFrontREMBImage = () => {
    setFrontREMBImage(null);
  };
  const handleFrontRSUBImageUpload = (event) => {
    const file = event.target.files[0];
    setFrontRSUBImage(URL.createObjectURL(file));
  };
  const handleRemoveFrontRSUBImage = () => {
    setFrontRSUBImage(null);
  };
  const handleFrontRSPrintImageUpload = (event) => {
    const file = event.target.files[0];
    setFrontRSPrintImage(URL.createObjectURL(file));
  };
  const handleRemoveFrontRSPrintImage = () => {
    setFrontRSPrintImage(null);
  };
  const handleFrontRDTFImageUpload = (event) => {
    const file = event.target.files[0];
    setFrontRDTFImage(URL.createObjectURL(file));
  };
  const handleRemoveFrontRDTFImage = () => {
    setFrontRDTFImage(null);
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
                    mb: "10px",
                    height: "100%",
                    position: "relative",
                    cursor: "pointer",
                    backgroundImage: frontRImage
                      ? `linear-gradient(rgba(255,255,255, 0.7), rgba(255,255,255, 0.7)), url(${frontRImage})`
                      : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isFrontRChecked}
                        onChange={handleFrontRCheckboxChange}
                      />
                    }
                  />
                  <Typography variant="h5" fontWeight="bold">
                    Front R
                  </Typography>
                  <Box mt={1}>
                    <input
                      type="file"
                      id="frontRImage"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleFrontRImageUpload}
                    />
                    <label htmlFor="frontRImage">
                      <Button
                        disabled={!isFrontRChecked && !frontRImage}
                        fullWidth
                        variant="contained"
                        component="span"
                      >
                        {frontRImage ? "Change Image" : "Add Image"}
                      </Button>
                    </label>
                    <Button
                      fullWidth
                      disabled={!isFrontRChecked && !frontRImage}
                      color="error"
                      variant="outlined"
                      onClick={handleRemoveFrontRImage}
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
                    mb: "10px",
                    height: "100%",
                    position: "relative",
                    cursor: "pointer",
                    backgroundImage: frontREMBImage
                      ? `linear-gradient(rgba(255,255,255, 0.7), rgba(255,255,255, 0.7)), url(${frontREMBImage})`
                      : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isFrontREMBChecked}
                        onChange={handleFrontREMBCheckboxChange}
                      />
                    }
                    label="EMB"
                  />
                  <Box mt={1}>
                    <input
                      type="file"
                      id="frontREMBImage"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleFrontREMBImageUpload}
                    />
                    <label htmlFor="frontREMBImage">
                      <Button
                        fullWidth
                        disabled={!isFrontREMBChecked && !frontREMBImage}
                        sx={{ mt: 4 }}
                        variant="contained"
                        component="span"
                      >
                        {frontREMBImage ? "Change" : "Add Image"}
                      </Button>
                    </label>
                    <Button
                      fullWidth
                      disabled={!isFrontREMBChecked && !frontREMBImage}
                      color="error"
                      variant="outlined"
                      onClick={handleRemoveFrontREMBImage}
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
                    mb: "10px",
                    height: "100%",
                    position: "relative",
                    cursor: "pointer",
                    backgroundImage: frontRSUBImage
                      ? `linear-gradient(rgba(255,255,255, 0.7), rgba(255,255,255, 0.7)), url(${frontRSUBImage})`
                      : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <FormControlLabel
                    control={<Checkbox />}
                    checked={isFrontRSUBChecked}
                    onChange={handleFrontRSUBCheckboxChange}
                    label="SUB"
                  />
                  <Box mt={1}>
                    <input
                      type="file"
                      id="frontRSUBImage"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleFrontRSUBImageUpload}
                    />
                    <label htmlFor="frontRSUBImage">
                      <Button
                        fullWidth
                        sx={{ mt: 4 }}
                        variant="contained"
                        disabled={!isFrontRSUBChecked && !frontRSUBImage}
                        component="span"
                      >
                        {frontRSUBImage ? "Change" : "Add Image"}
                      </Button>
                    </label>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="error"
                      onClick={handleRemoveFrontRSUBImage}
                      disabled={!isFrontRSUBChecked && !frontRSUBImage}
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
                    mb: "10px",
                    height: "100%",
                    position: "relative",
                    cursor: "pointer",
                    backgroundImage: frontRSPrintImage
                      ? `linear-gradient(rgba(255,255,255, 0.7), rgba(255,255,255, 0.7)), url(${frontRSPrintImage})`
                      : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isFrontRSPrintChecked}
                        onChange={handleFrontRSPrintCheckboxChange}
                      />
                    }
                    label="S Print"
                  />
                  <Box mt={1}>
                    <input
                      type="file"
                      id="frontRSPrintImage"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleFrontRSPrintImageUpload}
                    />
                    <label htmlFor="frontRSPrintImage">
                      <Button
                        fullWidth
                        sx={{ mt: 4 }}
                        variant="contained"
                        component="span"
                        disabled={!isFrontRSPrintChecked && !frontRSPrintImage}
                      >
                        {frontRSPrintImage ? "Change" : "Add Image"}
                      </Button>
                    </label>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="error"
                      onClick={handleRemoveFrontRSPrintImage}
                      disabled={!isFrontRSPrintChecked && !frontRSPrintImage}
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
                    mb: "10px",
                    height: "100%",
                    position: "relative",
                    cursor: "pointer",
                    backgroundImage: frontRDTFImage
                      ? `linear-gradient(rgba(255,255,255, 0.7), rgba(255,255,255, 0.7)), url(${frontRDTFImage})`
                      : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isFrontRDTFChecked}
                        onChange={handleFrontRDTFCheckboxChange}
                      />
                    }
                    label="DTF"
                  />
                  <Box mt={1}>
                    <input
                      type="file"
                      id="frontRDTFImage"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleFrontRDTFImageUpload}
                    />
                    <label htmlFor="frontRDTFImage">
                      <Button
                        fullWidth
                        sx={{ mt: 4 }}
                        variant="contained"
                        component="span"
                        disabled={!isFrontRDTFChecked && !frontRDTFImage}
                      >
                        {frontRDTFImage ? "Change" : "Add Image"}
                      </Button>
                    </label>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="error"
                      onClick={handleRemoveFrontRDTFImage}
                      disabled={!isFrontRDTFChecked && !frontRDTFImage}
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
