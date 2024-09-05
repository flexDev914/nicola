import React from "react";
import "./footer.css";
import { Box } from "@mui/material";
import telegramIcon from "../../../src/assets/icon/bxl_telegram.png";
import mailIcon from "../../../src/assets/icon/fluent_mail-20-filled.png";
import icon1 from "../../../src/assets/icon/Vector (4).png";
import icon2 from "../../../src/assets/icon/vcru_pink.png";
import icon3 from "../../../src/assets/icon/Vector.png";
import icon4 from "../../../src/assets/icon/Vector (1).png";
import icon5 from "../../../src/assets/icon/Vector (2).png";
import icon6 from "../../../src/assets/icon/Vector (3).png";

const Footer = () => {
  return (
    <Box className="footerContainer">
      <Box className="footerWrapper">
        <Box className="footerFirst">
          <Box>
            Physical space is often conceived in three linear dimensions,
            <br />
            although modern physicists usually con
          </Box>
          <input className="footerInput" />
        </Box>
        <Box className="footerSecond">
          <Box>
            {[
              { icons: <img src={telegramIcon} />, letter: "@login" },
              { icons: <img src={mailIcon} />, letter: "mail@site.ru" },
            ].map((item, index) => (
              <Box key={index} className="footerIcontxt">
                {item.icons}
                <Box>{item.letter}</Box>
              </Box>
            ))}
          </Box>
          <Box className="footerDarkBtn">Lorem ipsum sit</Box>
        </Box>
        <Box className="footerThird">
          <Box className="footerBtns">
            {["Lorem", "Ipsum", "Dolor sit", "Amet", "Aenean"].map(
              (item, index) => (
                <Box key={index} className="footerGrayBtns">
                  <Box
                    className="footerBtnItem"
                    style={{
                      padding: `${
                        index === 0 || index === 3 || index === 4
                          ? "16px 24px 17px 24px"
                          : "16px 37px 16px 36px"
                      }`,
                    }}
                  >
                    {item}
                  </Box>
                </Box>
              )
            )}
          </Box>
          <Box className="footerSocials">
            {[
              <a href="https://habr.com/ru/articles/" target="_blank"><img src={icon1} /></a>,
              <a href="https://vc.ru/"  target="_blank"><img src={icon2} /></a>,
              <a href="https://ru.linkedin.com/" target="_blank"><img src={icon3} /></a>,
              <a href="https://www.facebook.com/" target="_blank"><img src={icon4} /></a>,
              <a href="https://twitter.com" target="_blank"><img src={icon5} /></a>,
              <a href="https://www.youtube.com/" target="_blank"><img src={icon6} /></a>
            ].map((item, index) => (
              <Box key={index}>{item}</Box>
            ))}
          </Box>
        </Box>
        <Box className="footerDown">
          <Box>© 2024 Василий Петров</Box>
          <Box>Политика конфиденциальности</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
