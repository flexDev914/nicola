import React from "react";
import { PiPaperclip } from "react-icons/pi";
import "./button.css";

const UploadBtn = () => {
  return (
    <button className="uploadBtn">
      Прикрепить файл &nbsp; <PiPaperclip />
    </button>
  );
};

export default UploadBtn;
