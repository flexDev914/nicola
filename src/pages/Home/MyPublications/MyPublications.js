import React, {useState} from "react";
import { Box } from "@mui/material";
import PublicationTitle from "./PublicationTitle";
import Modal from "../../../components/Modal/Modal";
import { publicationCards } from "../../../constant/group";
import CustomIconButton from "../../../components/CustomButton";
import circles from "../../../assets/circleGroup.png";
import "./my-publications.css";

const MyPublications = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <Box id="mypub" className="section">
      <PublicationTitle />
      <Box className="myPublicationCard">
        {publicationCards?.map((item, index) => (
          <div key={index} className="pubCardSquare">
            <Box
              className={`${index === 1 ? "pubCard1" : "pubCard"}`}
              style={{
                marginTop: `${index % 2 === 0 ? "0" : "98px"}`,
                // marginLeft: `${index === 2 && "40px"}`,
              }}
            >
              <p
                className="mdText"
                style={{ paddingTop: `${index === 1 && "0px"}` }}
              >
                {item.purpleText}
                <br />
                <span style={{ color: `${index === 1 ? "white" : "var(--primary-bgColor)"}` }}>
                  {item.text}
                </span>
              </p>
              <img
                className="pubImg"
                src={circles}
                style={{ display: `${index === 1 && "none"}` }}
              />
              <div>
                <span className="cardHover">
                  <p
                    className="mmdText"
                    style={{
                      marginBottom: "10px",
                      display: `${index === 1 && "none"}`,
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="xmText"
                    style={{
                      color: "var(--primary-bgColor)",
                      display: `${index === 1 && "none"}`,
                    }}
                  >
                    {item.content}
                  </p>
                </span>
                <Box
                  className="addBtn"
                  onClick={openModal}
                  style={{ display: `${index === 1 && "flex"}` }}
                >
                  <CustomIconButton />
                  
                </Box>
                <Modal isOpen={isModalOpen} onClose={closeModal} />
                ;
              </div>
            </Box>
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default MyPublications;
