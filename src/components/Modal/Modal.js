import React, { useState } from "react";
import { Box, Checkbox } from "@mui/material";
import UploadBtn from "../Button/UploadBtn";
import ModalInput from "./ModalInput";
import "./modal.css"; // Import your CSS file

const ModalSelectBtn = [
  {
    title: "Lorem ipsum",
  },
  {
    title: "Dolor sit amet",
  },
  {
    title: "Sit amet",
  },
  {
    title: "Consectetuer",
  },
  {
    title: "Donec quam felis",
  },
  {
    title: "Curabitur ullamcorper",
  },
];

const Modal = ({ isOpen, onClose }) => {
  const [toggle, setToggle] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  if (!isOpen) return null; // Don't render the modal if it's not open

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  const handleCheck = (index) => {
    setToggle(Object.values({ ...toggle, [index]: !toggle[index] }));
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <p className="modalTitle">Оставьте ваш запрос</p>
        <p className="modalText">Lorem ipsum dolor sit amet, consectetuer </p>
        <div className="modalBtnWrapper">
          <p className="modalSmallTitle">Тема</p>
          {ModalSelectBtn.map((item, index) => (
            <button
              className="modalSelectBtns"
              key={index}
              onClick={() => handleCheck(index)}
              style={{
                marginRight: "5px",
                background: `${toggle[index] ? "#8424DE" : ""}`,
                color: `${toggle[index] ? "#F7F7F7" : ""}`,
              }}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="modalTextWrapper">
          <p>Опишите задачу</p>
          <textarea placeholder="Текстовое описание"></textarea>
          <UploadBtn />
        </div>
        <div className="modalInputWrapper">
          <p>Контактные данные</p>
          <ModalInput />
          <Box style={{ display: "flex", alignItems: "center" }}>
            <Checkbox
              sx={{
                "&.Mui-checked": {
                  color: "#8424DE",
                },
              }}
            />
            <div className="checkTxt">
              Отправляя форму, вы соглашаетесь на обработку{" "}
              <span>персональных данных</span>
            </div>
          </Box>
        </div>
        <button
          style={{ marginLeft: "75px", marginBottom: "100px" }}
          className="welcomeMotalBtn"
        >
          Отправить
        </button>
      </div>
    </div>
  );
};

export default Modal;
