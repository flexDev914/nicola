import React, { useState, useEffect } from "react";
import { Box, IconButton, Stack } from "@mui/material";
import Modal from "@mui/material/Modal";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CloseIcon from "@mui/icons-material/Close";
import PlayIcon from "../../../../assets/icon/circle-play.png";
import "../userlist.css";

import { smallAvatar } from "../../../../constant/group";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
};

export default function PreviewImage({ selected, open, setOpen }) {
  const imageInfo = smallAvatar[selected];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageInfo.images.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageInfo.images.length - 1 : prevIndex - 1
    );
  };
  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };
  const updateIndicators = (index) => {
    return imageInfo.images.map((_, i) => {
      if (i < index) return "indicator viewed";
      if (i === index) return "indicator current";
      return "indicator";
    });
  };
  const indicatorSize = 350 / imageInfo.images.length;
  return (
    <Modal
      sx={{ background: "rgba(0, 0, 0, 0.78)" }}
      open={open}
      onClose={() => setOpen(false)}
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
          <IconButton sx={{ color: "white" }} onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <KeyboardArrowLeftIcon onClick={prevSlide} className="leftArrowBtn" />
        <div className="carousel">
          <div
            className="carousel-container"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {imageInfo.images.map((image, index) => (
              <img key={index} src={image} alt={`Slide ${index + 1}`} />
            ))}
          </div>

          <div className="carousel-indicators">
            {updateIndicators(currentIndex).map((indicatorClass, index) => (
              <div
                key={index}
                onClick={() => handleIndicatorClick(index)}
                style={{ padding: "3px 0" }}
              >
                <div
                  style={{ width: indicatorSize }}
                  className={indicatorClass}
                ></div>
              </div>
            ))}
          </div>
          <div className="userModalContainer">
            <img className="userModalImg" src={imageInfo.url} alt="User" />
            <div className="userModalTitle">{imageInfo.title}</div>
          </div>
        </div>
        <KeyboardArrowRightIcon onClick={nextSlide} className="rightArrowBtn" />
      </Box>
    </Modal>
  );
}
