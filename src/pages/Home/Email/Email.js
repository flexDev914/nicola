import React, { useState } from "react";
import { Box } from "@mui/material";
import { circleIcon } from "../../../constant/group";
import groupImg from "../../../assets/Group 21.png";
import { insertEmail, sendEmail } from "../../../api/emailAPI";
import "./email.css";

const Email = () => {
  const [emailData, setEmailData] = useState({
    email: "",
  });
  const handleChange = (e) => {
    setEmailData({ ...emailData, email: e.target.value });
  };

  const handleClick = () => {
    insertEmail(emailData).then((data) => {
      if (data.error) {
        alert(data.error);
      } else {
        sendEmail(emailData).then((data) => {
          if (data.error) {
            alert(data.error);
          } else {
            alert(data.message);
          }
        });
      }
    });
  };
  return (
    <div className="Emailsection">
      <img src={groupImg} className="groupImg" />
      <div className="emailTitle">The More Important</div>
      <div className="emailTxt">Physiological respiration involves</div>
      <div className="emailFooter">
        <div className="inputWrapper">
          <input type="email" placeholder="Ваш Email" onChange={handleChange} />
          <button onClick={handleClick} className="emailSend">
            Подписаться
          </button>
        </div>
        <div className="emailIconWrapper">
          {circleIcon.map((item, index) => (
            <Box key={index} className="emailCircle">
              <img
                src={item}
                style={{
                  paddingTop: `${index === 2 && "7px"}`,
                  paddingLeft: `${index === 2 && "5px"}`,
                }}
              />
            </Box>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Email;
