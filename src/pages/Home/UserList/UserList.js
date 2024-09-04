import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import CountUp from "react-countup";
import { GoArrowUpRight } from "react-icons/go";
import UserListTitle from "./UserListTitle";
import SkillButton from "../../../components/Button/SkillButton";
import BlackBtn from "../../../components/Button/BlackBtn";
import PreviewImage from "./Preview/PreviewImage";
import Rectangle from "../../../assets/Rectangle.png";
import smallAvatar1 from "../../../assets/smallAvatar1.png";
import smallAvatar2 from "../../../assets/smallAvatar2.png";
import smallAvatar3 from "../../../assets/smallAvatar3.png";
import smallAvatar4 from "../../../assets/smallAvatar4.png";

import slide1 from '../../../assets/slide/slide1.png'
import slide2 from '../../../assets/slide/slide2.png'
import slide3 from '../../../assets/slide/slide3.png'
import slide4 from '../../../assets/slide/slide4.png'
import slide5 from '../../../assets/slide/slide5.png'
import slide6 from '../../../assets/slide/slide6.png'
import slide7 from '../../../assets/slide/slide7.png'
import slide8 from '../../../assets/slide/slide8.png'
import slide9 from '../../../assets/slide/slide9.png'
import slide10 from '../../../assets/slide/slide10.png'
import slide11 from '../../../assets/slide/slide11.png'
import slide12 from '../../../assets/slide/slide12.png'
import slide13 from '../../../assets/slide/slide13.png'
import slide14 from '../../../assets/slide/slide14.png'
import slide15 from '../../../assets/slide/slide15.png'
import slide16 from '../../../assets/slide/slide16.png'
import "./userlist.css";

const smallAvatar = [
  {
    url: smallAvatar1,
    title: "Lorem",
    images:[
      slide1,slide2,slide3,slide4
    ]
  },
  {
    url: smallAvatar2,
    title: "Ipsum",
    title: "Lorem",
   images:[
      slide5,slide6,slide7,slide8
    ]
  },
  {
    url: smallAvatar3,
    title: "Sit amet",
    title: "Lorem",
   images:[
      slide9,slide10,slide11,slide12
    ]
  },
  {
    url: smallAvatar4,
    title: "Consectetuer",
    title: "Lorem",
    images:[
      slide13,slide14,slide15,slide16
    ]
  },
];

const skillButton = [
  "Lorem ipsum dolor sit",
  "Aenean massa socilis",
  "Nascetur ridiculus",
  "Donec",
  "Integer tincidunt Cras da",
  "Phasellus viverra",
];

const UserList = () => {
  const [open, setOpen] = useState(false);
  const [imagesData,setImagesData] = useState([]);
  const handleClick = (item) => {
    setOpen(true);
    setImagesData(item.images);
  };

  return (
    <Box>
      <UserListTitle />
      <Box className="customerBottom">
        <div className="userListLeftWrap">
          <PreviewImage images={imagesData} open={open} setOpen={setOpen} />
          <div
            onClick={handleClick}
            className="customerImg"
            style={{ backgroundImage: `url(${Rectangle})` }}
          />
        </div>
        <div className="userListRightWrap">
          <div className="circlePhotoContainer">
            {smallAvatar.map((item, index) => (
              <Box key={index} onClick={() =>handleClick(item)} sx={{ marginRight: "21px" }}>
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
