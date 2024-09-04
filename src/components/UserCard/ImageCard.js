import React, { useState } from "react";
import {
  CardActionArea,
  Stack,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PreviewContent from "./Preview/TextContent";

export default function ImageCard(props) {
  const [open, setOpen] = useState(false);
  const { name, title, avatar, content } = props;

  const handleMore = () => {
    setOpen(true);
  };

  return (
    <Card
      sx={{
        background: "var(--cardBgColor)",
        maxWidth: "275px",
        width: "255px",
        maxHeight: "350px",
        height: "330px",
        padding: "10px",
        border: "none",
        boxShadow: "none",
        rotate: Math.floor(Math.random() * 10) % 2 === 0 ? "5deg" : "-5deg",
      }}
    >
      <PreviewContent
        name={name}
        title={title}
        avatar={avatar}
        description={content}
        open={open}
        setOpen={setOpen}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            color: "rgba(247, 247, 247, 1)",
            fontSize: "20px",
            fontFamily: "Inter",
          }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {name}
        </Typography>
        <Typography
          sx={{ color: "rgba(128, 128, 128, 1)", fontFamily: "Inter" }}
          align="center"
          gutterBottom
          variant="body2"
          component="div"
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: "rgba(247, 247, 247, 1)",
            marginTop: "20px",
            maxHeight: "110px",
            height: "100px",
            padding: "0 5px",
            overflow: "hidden",
            fontFamily: "Inter",
          }}
          gutterBottom
          variant="body2"
          component="div"
        >
          {content}
        </Typography>
        <Stack direction={"row"} justifyContent={"center"} onClick={handleMore}>
          <MoreHorizIcon sx={{ color: "white" }} />
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ height: "65px" }}
        >
          <CardMedia
            component="img"
            sx={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
            }}
            image={avatar}
            alt="green iguana"
          />
          <Stack
            direction={"row"}
            spacing={1}
            alignItems={"center"}
            onClick={handleMore}
            className="imgCardLinkWrap"
          >
            <div
              className="imgCardLink"
            >
              Читать отзыв
            </div>
            <ArrowOutwardIcon sx={{fontSize: "18px"}} className="imgCardLink" />
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
