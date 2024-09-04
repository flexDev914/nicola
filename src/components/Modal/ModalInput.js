import React from "react";

const inputTitle = ["Ваше имя", "Ваш телефон", "Ваш telegram", "Ваш email"];

const ModalInput = () => {
  return (
    <div className="modalInputConta">
      {inputTitle.map((item, index) => (
        <input key={index} placeholder={item} />
      ))}
    </div>
  );
};

export default ModalInput;
