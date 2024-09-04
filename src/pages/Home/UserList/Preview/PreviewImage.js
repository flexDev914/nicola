import React, {useState, useEffect} from "react";
import { Box, IconButton, Stack } from "@mui/material";
import Modal from "@mui/material/Modal";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CloseIcon from "@mui/icons-material/Close";
import PlayIcon from "../../../../assets/icon/circle-play.png";
import "../userlist.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
};

export default function PreviewImage(props) {
  const { open, setOpen, images  } = props;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1
        ? 0
        : prevIndex + 1
      );
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1
      ? 0 :
      prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
      ? images.length - 1
      : prevIndex - 1
    );
  };

  const handleClose = () => setOpen(false);

  return (
    <Modal
      sx={{ background: "rgba(0, 0, 0, 0.78)" }}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{ position: "absolute", top: "-7%", width: "103%" }}
        >
          <img
            src={PlayIcon}
            style={{
              width: "30px",
              height: "30px",
            }}
          />
          <IconButton sx={{ color: "white" }} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <KeyboardArrowLeftIcon onClick={prevSlide} className="leftArrowBtn" />
        <div
          // style={{ backgroundImage: `url(${avatar})` }}
          alt="user-avatar"
          className="avatarModal"
        >
          <div className="carousel">
            {images.map((image, index) => (
              <div
                key={index}
                className={
                  index === currentIndex
                    ? "carousel-slide active-slide"
                    : "carousel-slide"
                }>
                <img src={image}
                  alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <KeyboardArrowRightIcon onClick={nextSlide} className="rightArrowBtn" />
      </Box>
    </Modal>
  );
}
