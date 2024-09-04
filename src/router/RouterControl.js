import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { styled } from "@mui/material/styles";
import useTheme from "../hooks/useTheme";
import Header from "../layouts/Header/Header";
import Home from "../pages/Home";
import Footer from "../layouts/Footer/Footer";
import AdminPage from "../adminpage/AdminPage";

const ThemeProvider = styled("div")({});

const RouterControl = () => {
  const [theme, switchTheme] = useTheme();

  return (
    <>
      <ThemeProvider data-theme={theme}>
        <BrowserRouter>
          <Header theme={theme} switchTheme={switchTheme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default RouterControl;
