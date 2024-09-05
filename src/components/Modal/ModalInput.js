import React from "react";

const inputTitle = ["Ваше имя",, "Ваш телефон", "Ваш telegram", "Ваш email"];

const ModalInput = () => {
  return (
    <div className="modalInputConta">
      {inputTitle.map((item, index) => (
        <label key={index} className="inpD">
            <input id="inp" placeholder="&nbsp;" />
            <span className="labelD">{item}</span>
            <span className="focus-bgD"></span>
          </label>
      ))}
    </div>
  );
  {/* <input key={index} placeholder={item} /> */}

};

export default ModalInput;
