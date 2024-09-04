import React from "react";
import { Box, Typography } from "@mui/material";
import { GoArrowUpRight } from "react-icons/go";
import ReviewHistoryTitle from "./ReviewHistoryTitle";
import CustomerBox from "../../../components/Box/CustomerBox";
import { logoImg } from "../../../constant";
import { historyBox } from "../../../constant/group";
import HistoryBox from "../../../components/Box/HistoryBox";
import "./reviewHistory.css";

const ReviewHistory = () => {
  return (
    <Box>
      <ReviewHistoryTitle />
      <div className="reviewHisSection">
        <Box className="reviewHisTopWrapper">
          <Box className="topLeftWrap">
            <img src={logoImg} className="mdAvatar" />
            <Typography sx={{ marginLeft: "17px" }}>
              <b
                style={{
                  fontFamily: "Inter",
                  fontSize: "17px",
                  fontWeight: "700",
                  letterSpacing: "-0.03em",
                  color: "var(--primary-txtColor)",
                }}
              >
                Василий Петров
                <br />
                Канал <br />
              </b>
              <span
                style={{
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: "400",
                  letterSpacing: "-0.03em",
                  color: "var(--primary-txtColor)",
                }}
              >
                12 148 подписчика
              </span>
            </Typography>
          </Box>
          <Box className="topRightWrap">
            <button>
              Lorem ipsum &nbsp; <GoArrowUpRight style={{ fontSize: "20px" }} />
            </button>
          </Box>
        </Box>
        <Box className="reviewHisBottomWrapper">
          <CustomerBox />
          <Box className="reviewBottomWrap" sx={{ marginLeft: "10px" }}>
            {historyBox.map((item, index) => (
              <HistoryBox key={index} {...item} />
            ))}
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default ReviewHistory;
