import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Card from "@mui/material/Card";
import { Box, Modal } from "@mui/material";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import Button from "@mui/material/Button";

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

SwiperCore.use([Navigation, Pagination]);

export default function DocImageList() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          p: "5px",
          pt: "0",
          background: "transparent",
        }}
      >
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide onClick={handleOpen}>
            <img src="/images/slider-img3.jpg" alt="Image" />
          </SwiperSlide>

          <SwiperSlide onClick={handleOpen}>
            <img src="/images/slider-img4.jpg" alt="Image" />
          </SwiperSlide>

          <SwiperSlide onClick={handleOpen}>
            <img src="/images/slider-img5.jpg" alt="Image" />
          </SwiperSlide>

          <SwiperSlide onClick={handleOpen}>
            <img src="/images/slider-img1.jpg" alt="Image" />
          </SwiperSlide>

          <SwiperSlide onClick={handleOpen}>
            <img src="/images/slider-img2.jpg" alt="Image" />
          </SwiperSlide>
        </Swiper>
      </Card>

      <Modal
        open={open}
        s
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="bg-black">
          <Card
            sx={{
              boxShadow: "none",
              p: "5px",
              pt: "0",
              background: "transparent",
            }}
          >
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="/images/slider-img3.jpg" alt="Image" />
              </SwiperSlide>

              <SwiperSlide>
                <img src="/images/slider-img4.jpg" alt="Image" />
              </SwiperSlide>

              <SwiperSlide>
                <img src="/images/slider-img5.jpg" alt="Image" />
              </SwiperSlide>

              <SwiperSlide>
                <img src="/images/slider-img1.jpg" alt="Image" />
              </SwiperSlide>

              <SwiperSlide>
                <img src="/images/slider-img2.jpg" alt="Image" />
              </SwiperSlide>
            </Swiper>
          </Card>
          <Box display="flex" justifyContent="space-between">
            <Button
              variant="contained"
              color="error"
              onClick={handleClose}
              sx={{
                mt: 2,
                textTransform: "capitalize",
                borderRadius: "8px",
                fontWeight: "500",
                fontSize: "13px",
                padding: "12px 20px",
              }}
            >
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
