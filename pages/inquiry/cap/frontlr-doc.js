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

export default function FrontLRDocument() {
  const [frontLImage, setFrontLImag] = useState(null);
  const [frontRImage, setFrontRImag] = useState(null);
  const [frontLREMBImage, setFrontLREMBImage] = useState(null);
  const [frontLRSUBImage, setFrontLRSUBImage] = useState(null);
  const [frontLRSPrintImage, setFrontLRSPrintImage] = useState(null);
  const [frontLRDTFImage, setFrontLRDTFImage] = useState(null);

  const [isFrontLChecked, setIsFrontLChecked] = useState(false);
  const [isFrontRChecked, setIsFrontRChecked] = useState(false);
  const [isFrontLREMBChecked, setIsFrontLREMBChecked] = useState(false);
  const [isFrontLRSUBChecked, setIsFrontLRSUBChecked] = useState(false);
  const [isFrontLRSPrintChecked, setIsFrontLRSPrintChecked] =
    useState(false);
  const [isFrontLRDTFChecked, setIsFrontLRDTFChecked] = useState(false);

  const handleFrontLCheckboxChange = (event) => {
    setIsFrontLChecked(event.target.checked);
  };
  const handleFrontRCheckboxChange = (event) => {
    setIsFrontRChecked(event.target.checked);
  };
  const handleFrontLREMBCheckboxChange = (event) => {
    setIsFrontLREMBChecked(event.target.checked);
  };
  const handleFrontLRSUBCheckboxChange = (event) => {
    setIsFrontLRSUBChecked(event.target.checked);
  };
  const handleFrontLRSPrintCheckboxChange = (event) => {
    setIsFrontLRSPrintChecked(event.target.checked);
  };
  const handleFrontLRDTFCheckboxChange = (event) => {
    setIsFrontLRDTFChecked(event.target.checked);
  };

  const handleFrontLImagUpload = (event) => {
    const file = event.target.files[0];
    setFrontLImag(URL.createObjectURL(file));
  };
  const handleRemoveFrontLImag = () => {
    setFrontLImag(null);
  };

  const handleFrontRImagUpload = (event) => {
    const file = event.target.files[0];
    setFrontRImag(URL.createObjectURL(file));
  };
  const handleRemoveFrontRImag = () => {
    setFrontRImag(null);
  };

  const handleFrontLREMBImageUpload = (event) => {
    const file = event.target.files[0];
    setFrontLREMBImage(URL.createObjectURL(file));
  };
  const handleRemoveFrontLREMBImage = () => {
    setFrontLREMBImage(null);
  };
  const handleFrontLRSUBImageUpload = (event) => {
    const file = event.target.files[0];
    setFrontLRSUBImage(URL.createObjectURL(file));
  };
  const handleRemoveFrontLRSUBImage = () => {
    setFrontLRSUBImage(null);
  };
  const handleFrontLRSPrintImageUpload = (event) => {
    const file = event.target.files[0];
    setFrontLRSPrintImage(URL.createObjectURL(file));
  };
  const handleRemoveFrontLRSPrintImage = () => {
    setFrontLRSPrintImage(null);
  };
  const handleFrontLRDTFImageUpload = (event) => {
    const file = event.target.files[0];
    setFrontLRDTFImage(URL.createObjectURL(file));
  };
  const handleRemoveFrontLRDTFImage = () => {
    setFrontLRDTFImage(null);
  };
  return (
    <>
      <Grid item xs={12}>
        <Grid container>
          <Grid mt={2} item xs={12}>
            <Grid container mt={2}>
              <Grid item xs={12} lg={3}>
                <Grid container>
                  <Grid item xs={6}>
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
                        Front (L)
                      </Typography>
                      <Box mt={1}>
                        <input
                          type="file"
                          id="frontLImage"
                          accept="image/*"
                          style={{ display: "none" }}
                          onChange={handleFrontLImagUpload}
                        />
                        <label htmlFor="frontLImage">
                          <Button
                            fullWidth
                            variant="contained"
                            disabled={!isFrontLChecked && !frontLImage}
                            component="span"
                          >
                            {frontLImage ? "Change Image" : "Add Image"}
                          </Button>
                        </label>
                        <Button
                          fullWidth
                          color="error"
                          variant="outlined"
                          onClick={handleRemoveFrontLImag}
                          disabled={!isFrontLChecked && !frontLImage}
                        >
                          Remove
                        </Button>
                      </Box>
                    </Card>
                  </Grid>
                  <Grid item xs={6}>
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
                        Front (R)
                      </Typography>
                      <Box mt={1}>
                        <input
                          type="file"
                          id="frontRImage"
                          accept="image/*"
                          style={{ display: "none" }}
                          onChange={handleFrontRImagUpload}
                        />
                        <label htmlFor="frontRImage">
                          <Button
                            fullWidth
                            variant="contained"
                            disabled={!isFrontRChecked && !frontRImage}
                            component="span"
                          >
                            {frontRImage ? "Change Image" : "Add Image"}
                          </Button>
                        </label>
                        <Button
                          fullWidth
                          color="error"
                          variant="outlined"
                          onClick={handleRemoveFrontRImag}
                          disabled={!isFrontRChecked && !frontRImage}
                        >
                          Remove
                        </Button>
                      </Box>
                    </Card>
                  </Grid>
                </Grid>
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
                    backgroundImage: frontLREMBImage
                      ? `linear-gradient(rgba(255,255,255, 0.7), rgba(255,255,255, 0.7)), url(${frontLREMBImage})`
                      : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isFrontLREMBChecked}
                        onChange={handleFrontLREMBCheckboxChange}
                      />
                    }
                    label="EMB"
                  />
                  <Box mt={1}>
                    <input
                      type="file"
                      id="frontLREMBImage"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleFrontLREMBImageUpload}
                    />
                    <label htmlFor="frontLREMBImage">
                      <Button
                        fullWidth
                        sx={{ mt: 4 }}
                        variant="contained"
                        disabled={
                          !isFrontLREMBChecked && !frontLREMBImage
                        }
                        component="span"
                      >
                        {frontLREMBImage ? "Change" : "Add Image"}
                      </Button>
                    </label>
                    <Button
                      fullWidth
                      color="error"
                      variant="outlined"
                      onClick={handleRemoveFrontLREMBImage}
                      disabled={!isFrontLREMBChecked && !frontLREMBImage}
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
                    backgroundImage: frontLRSUBImage
                      ? `linear-gradient(rgba(255,255,255, 0.7), rgba(255,255,255, 0.7)), url(${frontLRSUBImage})`
                      : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isFrontLRSUBChecked}
                        onChange={handleFrontLRSUBCheckboxChange}
                      />
                    }
                    label="SUB"
                  />
                  <Box mt={1}>
                    <input
                      type="file"
                      id="frontLRSUBImage"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleFrontLRSUBImageUpload}
                    />
                    <label htmlFor="frontLRSUBImage">
                      <Button
                        fullWidth
                        sx={{ mt: 4 }}
                        variant="contained"
                        component="span"
                        disabled={
                          !isFrontLRSUBChecked && !frontLRSUBImage
                        }
                      >
                        {frontLRSUBImage ? "Change" : "Add Image"}
                      </Button>
                    </label>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="error"
                      onClick={handleRemoveFrontLRSUBImage}
                      disabled={!isFrontLRSUBChecked && !frontLRSUBImage}
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
                    backgroundImage: frontLRSPrintImage
                      ? `linear-gradient(rgba(255,255,255, 0.7), rgba(255,255,255, 0.7)), url(${frontLRSPrintImage})`
                      : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isFrontLRSPrintChecked}
                        onChange={handleFrontLRSPrintCheckboxChange}
                      />
                    }
                    label="S Print"
                  />
                  <Box mt={1}>
                    <input
                      type="file"
                      id="frontLRSPrintImage"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleFrontLRSPrintImageUpload}
                    />
                    <label htmlFor="frontLRSPrintImage">
                      <Button
                        fullWidth
                        sx={{ mt: 4 }}
                        variant="contained"
                        component="span"
                        disabled={
                          !isFrontLRSPrintChecked && !frontLRSPrintImage
                        }
                      >
                        {frontLRSPrintImage ? "Change" : "Add Image"}
                      </Button>
                    </label>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="error"
                      onClick={handleRemoveFrontLRSPrintImage}
                      disabled={
                        !isFrontLRSPrintChecked && !frontLRSPrintImage
                      }
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
                    backgroundImage: frontLRDTFImage
                      ? `linear-gradient(rgba(255,255,255, 0.7), rgba(255,255,255, 0.7)), url(${frontLRDTFImage})`
                      : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isFrontLRDTFChecked}
                        onChange={handleFrontLRDTFCheckboxChange}
                      />
                    }
                    label="DTF"
                  />
                  <Box mt={1}>
                    <input
                      type="file"
                      id="frontLRDTFImage"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleFrontLRDTFImageUpload}
                    />
                    <label htmlFor="frontLRDTFImage">
                      <Button
                        fullWidth
                        sx={{ mt: 4 }}
                        variant="contained"
                        component="span"
                        disabled={
                          !isFrontLRDTFChecked && !frontLRDTFImage
                        }
                      >
                        {frontLRDTFImage ? "Change" : "Add Image"}
                      </Button>
                    </label>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="error"
                      onClick={handleRemoveFrontLRDTFImage}
                      disabled={!isFrontLRDTFChecked && !frontLRDTFImage}
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
