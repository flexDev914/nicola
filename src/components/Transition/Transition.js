import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import "./transition.css";

const Transition = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 2000) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <>
      <div className="transitionTop">
        <Typography className="colTxt">Lorem ipsum dolor sit amet</Typography>
        <Typography className="topTxt">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor{" "}
        </Typography>
        <Box className="topBtnWrapper">
          <button className="topButton">Обсудить проект</button>
          <div className="topCircle">
            <TelegramIcon className="topTelegram" />
          </div>
        </Box>
      </div>
      <div className="transitionTop1">
        <Typography className="colTxt">Lorem ipsum dolor sit amet</Typography>
        <Typography className="topTxt">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor{" "}
        </Typography>
        <Box className="topBtnWrapper">
          <button className="topButton">Обсудить проект</button>
          <div className="topCircle">
            <TelegramIcon  className="topTelegram" />
          </div>
        </Box>
      </div>
    </>
  );
};

export default Transition;
