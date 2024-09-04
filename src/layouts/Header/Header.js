import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Link } from "react-scroll";
import { GoSun } from "react-icons/go";
import { PiMoonLight } from "react-icons/pi";
import HeaderBtn from "../../components/Button/HeaderBtn";
import "../../components/Switch/switch.css";
import "./header.css";

export const headerBtnInfo = [
  {
    title: "Lorem",
    id: "welcome",
    classPadding: "padding: '10px 20px 10px 20px'",
  },
  {
    title: "Ipsum",
    id: "mypub",
    classPadding: "padding: '10px 20px 10px 20px'",
  },
  {
    title: "Dolor sit",
    id: "c_reviews",
    classPadding: "padding: '10px 20px 10px 20px'",
  },
  {
    title: "Amet",
    id: "events",
    classPadding: "padding: '10px 20px 10px 20px'",
  },
  {
    title: "Commodo",
    id: "commodo",
    classPadding: "padding: '10px 20px 10px 20px'",
  },
];

const Header = (props) => {
  const { theme, switchTheme } = props;
  const [checked, setChecked] = useState(theme === "light" ? false : true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    switchTheme();
  };

  useEffect(() => {
    window.localStorage.setItem("theme", "light");
  });

  const ToggleTheme = () => (
    <div className="toggleTheme">
      <i style={{ marginTop: "3.5px" }}>
        <GoSun
          style={{ color: "var(--primary-txtColor)", marginRight: "12px" }}
        />
      </i>
      <label className="switch">
        <input type="checkbox" onChange={handleChange} checked={checked} />
        <span className="slider round"></span>
      </label>
      <i style={{ marginTop: "3.5px" }}>
        <PiMoonLight
          style={{ color: "var(--primary-txtColor)", marginLeft: "12px" }}
        />
      </i>
    </div>
  );

  return (
    <Box className="headerWrapper">
      <div className="headerLeftWrap">
        <div className="headerTitle">Василий Петров</div>
      </div>
      <div className="headerRightWrap">
        <div className="buttonGroup">
          {/* {headerBtnInfo.map((item, index) => (
            <Link key={index} to={item.id} spy={true} smooth={true}>
              <HeaderBtn title={item.title} class={item.class} />
            </Link>
          ))} */}
          <Link to="welcome" spy={true} smooth={true}>
            <HeaderBtn title="Lorem" padding="12.5px 24.5px 13.5px 24.5px" />
          </Link>
          <Link to="welcome" spy={true} smooth={true}>
            <HeaderBtn title="Ipsum" padding="12.5px 37.5px 13.5px 36.5px" />
          </Link>
          <Link to="welcome" spy={true} smooth={true}>
            <HeaderBtn
              title="Dolor sit"
              padding="12.5px 34.5px 13.5px 34.5px"
            />
          </Link>
          <Link to="welcome" spy={true} smooth={true}>
            <HeaderBtn title="Amet" padding="12.5px 23.5px 13.5px 24.5px" />
          </Link>
          <Link to="welcome" spy={true} smooth={true}>
            <HeaderBtn title="Commodo" padding="12.5px 14.5px 13.5px 14.5px" />
          </Link>
        </div>
        <ToggleTheme />
      </div>
    </Box>
  );
};

export default Header;
