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

export default function LSideDocument() {
  const [lsideImage, setLSideImage] = useState(null);
  const [lsideEMBImage, setLSideEMBImage] = useState(null);
  const [lsideSUBImage, setLSideSUBImage] = useState(null);
  const [lsideSPrintImage, setLSideSPrintImage] = useState(null);
  const [lsideDTFImage, setLSideDTFImage] = useState(null);

  const [isLSideChecked, setIsLSideChecked] = useState(false);
  const [isLSideEMBChecked, setIsLSideEMBChecked] = useState(false);
  const [isLSideSUBChecked, setIsLSideSUBChecked] = useState(false);
  const [isLSideSPrintChecked, setIsLSideSPrintChecked] = useState(false);
  const [isLSideDTFChecked, setIsLSideDTFChecked] = useState(false);

  const handleLSideCheckboxChange = (event) => {
    setIsLSideChecked(event.target.checked);
  };
  const handleLSideEMBCheckboxChange = (event) => {
    setIsLSideEMBChecked(event.target.checked);
  };
  const handleLSideSUBCheckboxChange = (event) => {
    setIsLSideSUBChecked(event.target.checked);
  };
  const handleLSideSPrintCheckboxChange = (event) => {
    setIsLSideSPrintChecked(event.target.checked);
  };
  const handleLSideDTFCheckboxChange = (event) => {
    setIsLSideDTFChecked(event.target.checked);
  };

  const handleLSideImageUpload = (event) => {
    const file = event.target.files[0];
    setLSideImage(URL.createObjectURL(file));
  };
  const handleRemoveLSideImage = () => {
    setLSideImage(null);
  };
  const handleLSideEMBImageUpload = (event) => {
    const file = event.target.files[0];
    setLSideEMBImage(URL.createObjectURL(file));
  };
  const handleRemoveLSideEMBImage = () => {
    setLSideEMBImage(null);
  };
  const handleLSideSUBImageUpload = (event) => {
    const file = event.target.files[0];
    setLSideSUBImage(URL.createObjectURL(file));
  };
  const handleRemoveLSideSUBImage = () => {
    setLSideSUBImage(null);
  };
  const handleLSideSPrintImageUpload = (event) => {
    const file = event.target.files[0];
    setLSideSPrintImage(URL.createObjectURL(file));
  };
  const handleRemoveLSideSPrintImage = () => {
    setLSideSPrintImage(null);
  };
  const handleLSideDTFImageUpload = (event) => {
    const file = event.target.files[0];
    setLSideDTFImage(URL.createObjectURL(file));
  };
  const handleRemoveLSideDTFImage = () => {
    setLSideDTFImage(null);
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
                    backgroundImage: lsideImage
                      ? `linear-gradient(rgba(255,255,255, 0.7), rgba(255,255,255, 0.7)), url(${lsideImage})`
                      : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <FormControlLabel control={<Checkbox checked={isLSideChecked} onChange={handleLSideCheckboxChange}/>} />
                  <Typography variant="h5" fontWeight="bold">
                    L Side
                  </Typography>
                  <Box mt={1}>
                    <input
                      type="file"
                      id="lsideImage"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleLSideImageUpload}
                    />
                    <label htmlFor="lsideImage">
                      <Button disabled={!isLSideChecked && !lsideImage} fullWidth variant="contained" component="span">
                        {lsideImage ? "Change Image" : "Add Image"}
                      </Button>
                    </label>
                    <Button
                      fullWidth
                      color="error"
                      variant="outlined"
                      onClick={handleRemoveLSideImage}
                      disabled={!isLSideChecked && !lsideImage}
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
                    backgroundImage: lsideEMBImage
                      ? `linear-gradient(rgba(255,255,255, 0.7), rgba(255,255,255, 0.7)), url(${lsideEMBImage})`
                      : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <FormControlLabel control={<Checkbox checked={isLSideEMBChecked} onChange={handleLSideEMBCheckboxChange}/>} label="EMB" />
                  <Box mt={1}>
                    <input
                      type="file"
                      id="lsideEMBImage"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleLSideEMBImageUpload}
                    />
                    <label htmlFor="lsideEMBImage">
                      <Button
                        fullWidth
                        sx={{ mt: 4 }}
                        variant="contained"
                        component="span"
                        disabled={!isLSideEMBChecked && !lsideEMBImage}
                      >
                        {lsideEMBImage ? "Change" : "Add Image"}
                      </Button>
                    </label>
                    <Button
                      fullWidth
                      color="error"
                      variant="outlined"
                      onClick={handleRemoveLSideEMBImage}
                      disabled={!isLSideEMBChecked && !lsideEMBImage}
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
                    backgroundImage: lsideSUBImage
                      ? `linear-gradient(rgba(255,255,255, 0.7), rgba(255,255,255, 0.7)), url(${lsideSUBImage})`
                      : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <FormControlLabel control={<Checkbox checked={isLSideSUBChecked} onChange={handleLSideSUBCheckboxChange}/>} label="SUB" />
                  <Box mt={1}>
                    <input
                      type="file"
                      id="lsideSUBImage"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleLSideSUBImageUpload}
                    />
                    <label htmlFor="lsideSUBImage">
                      <Button
                        fullWidth
                        sx={{ mt: 4 }}
                        variant="contained"
                        component="span"
                        disabled={!isLSideSUBChecked && !lsideSUBImage}
                      >
                        {lsideSUBImage ? "Change" : "Add Image"}
                      </Button>
                    </label>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="error"
                      onClick={handleRemoveLSideSUBImage}
                      disabled={!isLSideSUBChecked && !lsideSUBImage}
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
                    backgroundImage: lsideSPrintImage
                      ? `linear-gradient(rgba(255,255,255, 0.7), rgba(255,255,255, 0.7)), url(${lsideSPrintImage})`
                      : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <FormControlLabel control={<Checkbox checked={isLSideSPrintChecked} onChange={handleLSideSPrintCheckboxChange}/>} label="S Print" />
                  <Box mt={1}>
                    <input
                      type="file"
                      id="lsideSPrintImage"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleLSideSPrintImageUpload}
                    />
                    <label htmlFor="lsideSPrintImage">
                      <Button
                        fullWidth
                        sx={{ mt: 4 }}
                        variant="contained"
                        component="span"
                        disabled={!isLSideSPrintChecked && !lsideSPrintImage}
                      >
                        {lsideSPrintImage ? "Change" : "Add Image"}
                      </Button>
                    </label>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="error"
                      onClick={handleRemoveLSideSPrintImage}
                      disabled={!isLSideSPrintChecked && !lsideSPrintImage}
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
                    backgroundImage: lsideDTFImage
                      ? `linear-gradient(rgba(255,255,255, 0.7), rgba(255,255,255, 0.7)), url(${lsideDTFImage})`
                      : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <FormControlLabel control={<Checkbox checked={isLSideDTFChecked} onChange={handleLSideDTFCheckboxChange}/>} label="DTF" />
                  <Box mt={1}>
                    <input
                      type="file"
                      id="lsideDTFImage"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleLSideDTFImageUpload}
                    />
                    <label htmlFor="lsideDTFImage">
                      <Button
                        fullWidth
                        sx={{ mt: 4 }}
                        variant="contained"
                        component="span"
                        disabled={!isLSideDTFChecked && !lsideDTFImage}
                      >
                        {lsideDTFImage ? "Change" : "Add Image"}
                      </Button>
                    </label>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="error"
                      onClick={handleRemoveLSideDTFImage}
                      disabled={!isLSideDTFChecked && !lsideDTFImage}
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
