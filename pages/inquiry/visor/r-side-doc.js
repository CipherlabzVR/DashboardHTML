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

export default function RSideDocument() {
  const [rsideImage, setRSideImage] = useState(null);
  const [rsideEMBImage, setRSideEMBImage] = useState(null);
  const [rsideSUBImage, setRSideSUBImage] = useState(null);
  const [rsideSPrintImage, setRSideSPrintImage] = useState(null);
  const [rsideDTFImage, setRSideDTFImage] = useState(null);

  const [isRSideChecked, setIsRSideChecked] = useState(false);
  const [isRSideEMBChecked, setIsRSideEMBChecked] = useState(false);
  const [isRSideSUBChecked, setIsRSideSUBChecked] = useState(false);
  const [isRSideSPrintChecked, setIsRSideSPrintChecked] = useState(false);
  const [isRSideDTFChecked, setIsRSideDTFChecked] = useState(false);

  const handleRSideCheckboxChange = (event) => {
    setIsRSideChecked(event.target.checked);
  };
  const handleRSideEMBCheckboxChange = (event) => {
    setIsRSideEMBChecked(event.target.checked);
  };
  const handleRSideSUBCheckboxChange = (event) => {
    setIsRSideSUBChecked(event.target.checked);
  };
  const handleRSideSPrintCheckboxChange = (event) => {
    setIsRSideSPrintChecked(event.target.checked);
  };
  const handleRSideDTFCheckboxChange = (event) => {
    setIsRSideDTFChecked(event.target.checked);
  };

  const handleRSideImageUpload = (event) => {
    const file = event.target.files[0];
    setRSideImage(URL.createObjectURL(file));
  };
  const handleRemoveRSideImage = () => {
    setRSideImage(null);
  };
  const handleRSideEMBImageUpload = (event) => {
    const file = event.target.files[0];
    setRSideEMBImage(URL.createObjectURL(file));
  };
  const handleRemoveRSideEMBImage = () => {
    setRSideEMBImage(null);
  };
  const handleRSideSUBImageUpload = (event) => {
    const file = event.target.files[0];
    setRSideSUBImage(URL.createObjectURL(file));
  };
  const handleRemoveRSideSUBImage = () => {
    setRSideSUBImage(null);
  };
  const handleRSideSPrintImageUpload = (event) => {
    const file = event.target.files[0];
    setRSideSPrintImage(URL.createObjectURL(file));
  };
  const handleRemoveRSideSPrintImage = () => {
    setRSideSPrintImage(null);
  };
  const handleRSideDTFImageUpload = (event) => {
    const file = event.target.files[0];
    setRSideDTFImage(URL.createObjectURL(file));
  };
  const handleRemoveRSideDTFImage = () => {
    setRSideDTFImage(null);
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
                    backgroundImage: rsideImage
                      ? `linear-gradient(rgba(255,255,255, 0.7), rgba(255,255,255, 0.7)), url(${rsideImage})`
                      : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isRSideChecked}
                        onChange={handleRSideCheckboxChange}
                      />
                    }
                  />
                  <Typography variant="h5" fontWeight="bold">
                    R Side
                  </Typography>
                  <Box mt={1}>
                    <input
                      type="file"
                      id="rsideImage"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleRSideImageUpload}
                    />
                    <label htmlFor="rsideImage">
                      <Button
                        disabled={!isRSideChecked && !rsideImage}
                        fullWidth
                        variant="contained"
                        component="span"
                      >
                        {rsideImage ? "Change Image" : "Add Image"}
                      </Button>
                    </label>
                    <Button
                      fullWidth
                      color="error"
                      variant="outlined"
                      onClick={handleRemoveRSideImage}
                      disabled={!isRSideChecked && !rsideImage}
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
                    backgroundImage: rsideEMBImage
                      ? `linear-gradient(rgba(255,255,255, 0.7), rgba(255,255,255, 0.7)), url(${rsideEMBImage})`
                      : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isRSideEMBChecked}
                        onChange={handleRSideEMBCheckboxChange}
                      />
                    }
                    label="EMB"
                  />
                  <Box mt={1}>
                    <input
                      type="file"
                      id="rsideEMBImage"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleRSideEMBImageUpload}
                    />
                    <label htmlFor="rsideEMBImage">
                      <Button
                        fullWidth
                        sx={{ mt: 4 }}
                        variant="contained"
                        component="span"
                        disabled={!isRSideEMBChecked && !rsideEMBImage}
                      >
                        {rsideEMBImage ? "Change" : "Add Image"}
                      </Button>
                    </label>
                    <Button
                      fullWidth
                      color="error"
                      variant="outlined"
                      onClick={handleRemoveRSideEMBImage}
                      disabled={!isRSideEMBChecked && !rsideEMBImage}
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
                    backgroundImage: rsideSUBImage
                      ? `linear-gradient(rgba(255,255,255, 0.7), rgba(255,255,255, 0.7)), url(${rsideSUBImage})`
                      : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isRSideSUBChecked}
                        onChange={handleRSideSUBCheckboxChange}
                      />
                    }
                    label="SUB"
                  />
                  <Box mt={1}>
                    <input
                      type="file"
                      id="rsideSUBImage"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleRSideSUBImageUpload}
                    />
                    <label htmlFor="rsideSUBImage">
                      <Button
                        fullWidth
                        sx={{ mt: 4 }}
                        variant="contained"
                        component="span"
                        disabled={!isRSideSUBChecked && !rsideSUBImage}
                      >
                        {rsideSUBImage ? "Change" : "Add Image"}
                      </Button>
                    </label>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="error"
                      onClick={handleRemoveRSideSUBImage}
                      disabled={!isRSideSUBChecked && !rsideSUBImage}
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
                    backgroundImage: rsideSPrintImage
                      ? `linear-gradient(rgba(255,255,255, 0.7), rgba(255,255,255, 0.7)), url(${rsideSPrintImage})`
                      : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isRSideSPrintChecked}
                        onChange={handleRSideSPrintCheckboxChange}
                      />
                    }
                    label="S Print"
                  />
                  <Box mt={1}>
                    <input
                      type="file"
                      id="rsideSPrintImage"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleRSideSPrintImageUpload}
                    />
                    <label htmlFor="rsideSPrintImage">
                      <Button
                        fullWidth
                        sx={{ mt: 4 }}
                        variant="contained"
                        component="span"
                        disabled={
                          !isRSideSPrintChecked && !rsideSPrintImage
                        }
                      >
                        {rsideSPrintImage ? "Change" : "Add Image"}
                      </Button>
                    </label>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="error"
                      onClick={handleRemoveRSideSPrintImage}
                      disabled={!isRSideSPrintChecked && !rsideSPrintImage}
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
                    backgroundImage: rsideDTFImage
                      ? `linear-gradient(rgba(255,255,255, 0.7), rgba(255,255,255, 0.7)), url(${rsideDTFImage})`
                      : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isRSideDTFChecked}
                        onChange={handleRSideDTFCheckboxChange}
                      />
                    }
                    label="DTF"
                  />
                  <Box mt={1}>
                    <input
                      type="file"
                      id="rsideDTFImage"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleRSideDTFImageUpload}
                    />
                    <label htmlFor="rsideDTFImage">
                      <Button
                        fullWidth
                        sx={{ mt: 4 }}
                        variant="contained"
                        component="span"
                        disabled={!isRSideDTFChecked && !rsideDTFImage}
                      >
                        {rsideDTFImage ? "Change" : "Add Image"}
                      </Button>
                    </label>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="error"
                      onClick={handleRemoveRSideDTFImage}
                      disabled={!isRSideDTFChecked && !rsideDTFImage}
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
