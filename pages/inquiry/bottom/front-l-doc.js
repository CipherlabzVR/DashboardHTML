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

export default function FrontLDocument() {
  const [frontLImage, setFrontLImage] = useState(null);
  const [frontLEMBImage, setFrontLEMBImage] = useState(null);
  const [frontLSUBImage, setFrontLSUBImage] = useState(null);
  const [frontLSPrintImage, setFrontLSPrintImage] = useState(null);
  const [frontLDTFImage, setFrontLDTFImage] = useState(null);

  const [isFrontLChecked, setIsFrontLChecked] = useState(false);
  const [isFrontLEMBChecked, setIsFrontLEMBChecked] = useState(false);
  const [isFrontLSUBChecked, setIsFrontLSUBChecked] = useState(false);
  const [isFrontLSPrintChecked, setIsFrontLSPrintChecked] = useState(false);
  const [isFrontLDTFChecked, setIsFrontLDTFChecked] = useState(false);

  const handleFrontLCheckboxChange = (event) => {
    setIsFrontLChecked(event.target.checked);
  };
  const handleFrontLEMBCheckboxChange = (event) => {
    setIsFrontLEMBChecked(event.target.checked);
  };
  const handleFrontLSUBCheckboxChange = (event) => {
    setIsFrontLSUBChecked(event.target.checked);
  };
  const handleFrontLSPrintCheckboxChange = (event) => {
    setIsFrontLSPrintChecked(event.target.checked);
  };
  const handleFrontLDTFCheckboxChange = (event) => {
    setIsFrontLDTFChecked(event.target.checked);
  };

  const handleFrontLImageUpload = (event) => {
    const file = event.target.files[0];
    setFrontLImage(URL.createObjectURL(file));
  };
  const handleRemoveFrontLImage = () => {
    setFrontLImage(null);
  };
  const handleFrontLEMBImageUpload = (event) => {
    const file = event.target.files[0];
    setFrontLEMBImage(URL.createObjectURL(file));
  };
  const handleRemoveFrontLEMBImage = () => {
    setFrontLEMBImage(null);
  };
  const handleFrontLSUBImageUpload = (event) => {
    const file = event.target.files[0];
    setFrontLSUBImage(URL.createObjectURL(file));
  };
  const handleRemoveFrontLSUBImage = () => {
    setFrontLSUBImage(null);
  };
  const handleFrontLSPrintImageUpload = (event) => {
    const file = event.target.files[0];
    setFrontLSPrintImage(URL.createObjectURL(file));
  };
  const handleRemoveFrontLSPrintImage = () => {
    setFrontLSPrintImage(null);
  };
  const handleFrontLDTFImageUpload = (event) => {
    const file = event.target.files[0];
    setFrontLDTFImage(URL.createObjectURL(file));
  };
  const handleRemoveFrontLDTFImage = () => {
    setFrontLDTFImage(null);
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
                    backgroundImage: frontLImage
                      ? `linear-gradient(rgba(255,255,255, 0.7), rgba(255,255,255, 0.7)), url(${frontLImage})`
                      : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isFrontLChecked}
                        onChange={handleFrontLCheckboxChange}
                      />
                    }
                  />
                  <Typography variant="h5" fontWeight="bold">
                    Front L
                  </Typography>
                  <Box mt={1}>
                    <input
                      type="file"
                      id="frontLImage"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleFrontLImageUpload}
                    />
                    <label htmlFor="frontLImage">
                      <Button
                        disabled={!isFrontLChecked && !frontLImage}
                        fullWidth
                        variant="contained"
                        component="span"
                      >
                        {frontLImage ? "Change Image" : "Add Image"}
                      </Button>
                    </label>
                    <Button
                      fullWidth
                      disabled={!isFrontLChecked && !frontLImage}
                      color="error"
                      variant="outlined"
                      onClick={handleRemoveFrontLImage}
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
                    backgroundImage: frontLEMBImage
                      ? `linear-gradient(rgba(255,255,255, 0.7), rgba(255,255,255, 0.7)), url(${frontLEMBImage})`
                      : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isFrontLEMBChecked}
                        onChange={handleFrontLEMBCheckboxChange}
                      />
                    }
                    label="EMB"
                  />
                  <Box mt={1}>
                    <input
                      type="file"
                      id="frontLEMBImage"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleFrontLEMBImageUpload}
                    />
                    <label htmlFor="frontLEMBImage">
                      <Button
                        fullWidth
                        disabled={!isFrontLEMBChecked && !frontLEMBImage}
                        sx={{ mt: 4 }}
                        variant="contained"
                        component="span"
                      >
                        {frontLEMBImage ? "Change" : "Add Image"}
                      </Button>
                    </label>
                    <Button
                      fullWidth
                      disabled={!isFrontLEMBChecked && !frontLEMBImage}
                      color="error"
                      variant="outlined"
                      onClick={handleRemoveFrontLEMBImage}
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
                    backgroundImage: frontLSUBImage
                      ? `linear-gradient(rgba(255,255,255, 0.7), rgba(255,255,255, 0.7)), url(${frontLSUBImage})`
                      : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <FormControlLabel
                    control={<Checkbox />}
                    checked={isFrontLSUBChecked}
                    onChange={handleFrontLSUBCheckboxChange}
                    label="SUB"
                  />
                  <Box mt={1}>
                    <input
                      type="file"
                      id="frontLSUBImage"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleFrontLSUBImageUpload}
                    />
                    <label htmlFor="frontLSUBImage">
                      <Button
                        fullWidth
                        sx={{ mt: 4 }}
                        variant="contained"
                        disabled={!isFrontLSUBChecked && !frontLSUBImage}
                        component="span"
                      >
                        {frontLSUBImage ? "Change" : "Add Image"}
                      </Button>
                    </label>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="error"
                      onClick={handleRemoveFrontLSUBImage}
                      disabled={!isFrontLSUBChecked && !frontLSUBImage}
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
                    backgroundImage: frontLSPrintImage
                      ? `linear-gradient(rgba(255,255,255, 0.7), rgba(255,255,255, 0.7)), url(${frontLSPrintImage})`
                      : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isFrontLSPrintChecked}
                        onChange={handleFrontLSPrintCheckboxChange}
                      />
                    }
                    label="S Print"
                  />
                  <Box mt={1}>
                    <input
                      type="file"
                      id="frontLSPrintImage"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleFrontLSPrintImageUpload}
                    />
                    <label htmlFor="frontLSPrintImage">
                      <Button
                        fullWidth
                        sx={{ mt: 4 }}
                        variant="contained"
                        component="span"
                        disabled={!isFrontLSPrintChecked && !frontLSPrintImage}
                      >
                        {frontLSPrintImage ? "Change" : "Add Image"}
                      </Button>
                    </label>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="error"
                      onClick={handleRemoveFrontLSPrintImage}
                      disabled={!isFrontLSPrintChecked && !frontLSPrintImage}
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
                    backgroundImage: frontLDTFImage
                      ? `linear-gradient(rgba(255,255,255, 0.7), rgba(255,255,255, 0.7)), url(${frontLDTFImage})`
                      : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isFrontLDTFChecked}
                        onChange={handleFrontLDTFCheckboxChange}
                      />
                    }
                    label="DTF"
                  />
                  <Box mt={1}>
                    <input
                      type="file"
                      id="frontLDTFImage"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleFrontLDTFImageUpload}
                    />
                    <label htmlFor="frontLDTFImage">
                      <Button
                        fullWidth
                        sx={{ mt: 4 }}
                        variant="contained"
                        component="span"
                        disabled={!isFrontLDTFChecked && !frontLDTFImage}
                      >
                        {frontLDTFImage ? "Change" : "Add Image"}
                      </Button>
                    </label>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="error"
                      onClick={handleRemoveFrontLDTFImage}
                      disabled={!isFrontLDTFChecked && !frontLDTFImage}
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
