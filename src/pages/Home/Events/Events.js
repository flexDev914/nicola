import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import EventsTitle from "./EventsTitle";
import BlackBtn from "../../../components/Button/BlackBtn";
import { getEvents } from "../../../api/eveAPI";
import "./events.css";

const EventsCell = (props) => {
  const date = new Date(props.item.selDate);
  const day =
    date &&
    new Date(props.item.selDate)
      .toLocaleString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
      .replace("г.", "");

  const time =
    date &&
    new Date(props.item.createdAt).toLocaleString("ru-RU", {
      hour: "numeric",
      minute: "numeric",
    });
  return (
    <Box className="eventsWrapper">
      <div className="eventsTitleTxt">{props.item.title}</div>
      <div className="eventsContentTxt">{props.item.description}</div>
      <div className="eventsAddressWrap">
        <div
          style={{
            fontFamily: "Inter",
            fontWeight: "600",
            fontSize: "16px",
            color: "var(--primary-txtColor)",
          }}
        >
          <b>{day}</b>
        </div>
        <div
          style={{
            fontFamily: "Inter",
            fontWeight: "400",
            fontSize: "16px",
            color: "var(--primary-txtColor)",
            margin: "6px 0 6px 0",
          }}
        >
          {time}
          <br />
        </div>
        <div
          style={{
            fontFamily: "Inter",
            fontWeight: "400",
            fontSize: "16px",
            color: "var(--primary-txtColor)",
          }}
        >
          {props.item.location}
        </div>
      </div>
    </Box>
  );
};

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setEvents(data);
      }
    });
  }, []);

  return (
    <Box id="events" className="section">
      <EventsTitle />
      {events.map((item, index) => {
        return <EventsCell key={index} item={item} />;
      })}
      <Box className="eventsFooterWrap">
        <div
          style={{
            width: "455px",
            fontFamily: "Inter",
            fontWeight: "700",
            fontSize: "18px",
            color: "var(--pinkColor)",
            lineHeight: "25.2px",
            letterSpacing: "-0.02em",
          }}
        >
          Lorem ipsum dolor sit amet,
          <br /> consectetuer 
        </div>
        <Box>
          <BlackBtn title="Lorem ipsum dolor sit" />
        </Box>
      </Box>
    </Box>
  );
};

export default Events;
