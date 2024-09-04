import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { logoImg } from "../../constant";
import "./box.css";

const CustomerBox = () => {
  return (
    <div className="customerBoxWrap">
      <div className="customerTopBtn"></div>
      <Box>
        <Paper className="cardHeader">
          <img src={logoImg} className="smAvatar" />
          <Typography sx={{ marginLeft: "10px", fontSize: "10px" }}>
            <b
              style={{
                fontFamily: "Inter",
                fontWeight: "700",
                fontSize: "10px",
              }}
            >
              {" "}
              Василий Петров | Канал{" "}
            </b>{" "}
            <br />
            <span
              style={{
                fontFamily: "Inter",
                fontWeight: "500",
                fontSize: "10px",
                marginLeft: "-30px",
              }}
            >
              12 148 подписчика
            </span>
          </Typography>
        </Paper>

        <Paper className="cardBody">
          <Paper className="cardContent">
            <Typography
              sx={{
                color: "#A55369",
                fontSize: "11px",
                fontFamily: "Inter",
                fontWeight: "600",
              }}
            >
              Василий Петров | Канал{" "}
            </Typography>
            <span sx={{ fontSize: "12px", fontFamily: "Inter" }}>
              <div className="phoneText1">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget
              </div>
              <div className="phoneText2">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                ceget dolor. sociis natoque penatibus et magnis dis. Donec quam
                felis, pretium quis, sem. Nulla consequat massa quis enim.{" "}
              </div>
              <div className="phoneText2">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                ceget dolor. sociis natoque penatibus et magnis dis. Donec quam
                felis, pretium quis, sem.
              </div>
              <div className="phoneText2">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
              </div>
            </span>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "10px",
                marginTop: "20px",
              }}
            >
              <Typography>
                <span className="cardIcon">🔥 5</span>
                <span className="cardIcon">👍 11</span>
                <span className="cardIcon">😃 2</span>
              </Typography>
              <span
                className="itemCenter"
                style={{
                  color: "#A6ABAF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <RemoveRedEyeOutlinedIcon /> 726 9:46
              </span>
            </Box>
            <hr style={{ marginTop: "10px", color: "#E4E4E4" }} />
            <div className="phoneBottomTxt">2 комментария</div>
          </Paper>
        </Paper>
        <button className="customerBottomBtn">Читать в телеграм</button>
      </Box>
    </div>
  );
};

export default CustomerBox;
