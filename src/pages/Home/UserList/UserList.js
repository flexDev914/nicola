import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import CountUp from "react-countup";
import { GoArrowUpRight } from "react-icons/go";
import UserListTitle from "./UserListTitle";
import SkillButton from "../../../components/Button/SkillButton";
import BlackBtn from "../../../components/Button/BlackBtn";
import PreviewImage from "./Preview/PreviewImage";
import Rectangle from "../../../assets/Rectangle.png";


import "./userlist.css";
import { smallAvatar } from "../../../constant/group";



const skillButton = [
  "Lorem ipsum dolor sit",
  "Aenean massa socilis",
  "Nascetur ridiculus",
  "Donec",
  "Integer tincidunt Cras da",
  "Phasellus viverra",
];

const UserList = () => {
  const[open, setOpen]=useState(false)
  const [selected,setSelected] = useState(0);

  const handleClick = (index) => {
    setOpen(true)
    setSelected(index)
  };

  return (
    <Box>
      <UserListTitle />
      <Box className="customerBottom">
        <div className="userListLeftWrap">
         { selected >=0 && <PreviewImage selected={selected} open={open} setOpen={setOpen} />}
          <div
            onClick={handleClick}
            className="customerImg"
            style={{ backgroundImage: `url(${Rectangle})` }}
          />
        </div>
        <div className="userListRightWrap">
          <div className="circlePhotoContainer">
            {smallAvatar.map((item, index) => (
              <Box key={index} onClick={() =>handleClick(index)} sx={{ marginRight: "21px" }}>
                <img src={item.url} className="smallAvatar" />
                <div className="smallAvatarText">{item.title}</div>
              </Box>
            ))}
          </div>
          <Typography className="middleText">
            Lorem Ipsum <span>Dolores Amen</span>
          </Typography>
          <div className="skillCardWrap">
            <div style={{ width: "80px", marginRight: "60px" }}>
              <div className="piceNumber">
                <CountUp end={20} duration={4} />+
              </div>

              <div className="piceText">
                Lorem <br /> Ipsum Dolor
              </div>
            </div>
            <div style={{ width: "88.72px", marginRight: "60px" }}>
              <div className="piceNumber">
                <CountUp end={50} duration={4} />+
              </div>

              <div className="piceText">
                Consectetuer <br /> adipiscing
              </div>
            </div>
            <div style={{ width: "91px", marginRight: "68px" }}>
              <div className="piceNumber">
                <CountUp end={187} duration={4} />
                +&nbsp;sit
              </div>

              <div className="piceText">
                Lorem <br /> Ipsum Dolor
              </div>
            </div>
            <div style={{ width: "80px", marginRight: "46.12px" }}>
              <div className="piceNumber">
                <CountUp end={5} duration={4} />
                &nbsp;amet
              </div>

              <div className="piceText">
                Consectetuer <br /> adipiscing
              </div>
            </div>
            <div style={{ width: "90px" }}>
              <div className="piceNumber">
                <CountUp end={30} duration={4} />+
              </div>

              <div className="piceText">
                Lorem <br /> Ipsum Dolor
              </div>
            </div>
          </div>
          <Box className="skillBtnWrapper">
            {skillButton.map((title, index) => (
              <SkillButton key={index} number={index} title={title} />
            ))}
          </Box>
          <div style={{ marginTop: "30px" }}>
            <BlackBtn
              title="Donec vitae sapien ut liber"
              goarrowupright=<GoArrowUpRight />
            />
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default UserList;
