import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import PublicationTitle from "./PublicationTitle";
import { GoArrowUpRight } from "react-icons/go";
import BlackBtn from "../../../components/Button/BlackBtn";
import { getPublist } from "../../../api/fetchAPI";
import END_POINT from "../../../config/config";
import { habr, vcru, youtube } from "../../../constant";
import eyeImg from "../../../assets/icon/eye.png";
import heartImg from "../../../assets/icon/heart.png";
import circleImg from "../../../assets/icon/circle.png";
import rectImg from "../../../assets/icon/rect.png";
import "./publication.css";

const PubCell = (props) => {
  const views =
    props.item.metrics.views >= 1000
      ? `${Math.round(props.item.metrics.views / 1000)}k`
      : props.item.metrics.views;

    const date = new Date(props.item.date)
    const day = date &&
      new Date(props.item.date)
        .toLocaleString("ru-RU", {
          day: "numeric",
          month: "long",
          year: "numeric"
        })
        .replace("г.", "")

  return (
    <div className="carComponent">
      <div className="carheader">
        <p className="carDate">{day}</p>
        {props.item.platform === "VC" && (
          <img src={vcru} alt="vcru" className="carPlatform" />
        )}
        {props.item.platform === "YouTube" && (
          <img src={youtube} alt="Youtube" className="carPlatform" />
        )}
        {props.item.platform === "Habr" && (
          <img src={habr} alt="Habr" className="carPlatform" />
        )}
      </div>
      <div className="carTitle">{props.item.title}</div>
      <div className="briefDescription">{props.item.description}</div>
      <div
        style={{
          backgroundImage: `url(${END_POINT}/uploads/${props.item.image})`,
        }}
        className="carImg"
      ></div>
      <div className="carfooter">
        <button className="carLinkBtn">
          {props.item.linktopub} &nbsp;
          <GoArrowUpRight style={{ fontSize: "20px" }} />
        </button>
        <div className="metrics">
          <div className="metricsItem">
            <img src={eyeImg} />
            <div className="metricsNum">{views}</div>
          </div>
          <div className="metricsItem">
            <img src={heartImg} />
            <div className="metricsNum">{props.item.metrics.likes}</div>
          </div>
          <div className="metricsItem">
            <img src={circleImg} />
            <div className="metricsNum">{props.item.metrics.comments}</div>
          </div>
          <div className="metricsItem">
            <img src={rectImg} />
            <div className="metricsNum">{props.item.metrics.favourites}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Publication = () => {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    getPublist().then((data) => {
      if (data.error) {
        console.log("puberror:", data.error);
      } else {
        setPublications(data);
      }
    });
  }, []);
  // console.log("publications", publications);

  return (
    <Box className="section">
      <PublicationTitle />
      <Box className="carCompoWrap">
        {publications.map((item, idx) => {
          return <PubCell key={idx} item={item} />;
        })}
      </Box>
      <Box className="publicationBtn">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          <BlackBtn title="Больше публикаций" />
        </div>
      </Box>
    </Box>
  );
};

export default Publication;
