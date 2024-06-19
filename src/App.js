import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Info from "./components/Info/Info.js";
import Feedback from "./components/Feedback/Feedback.js";
import Meal from "./components/Meal/Meal.js";
import Restaurant from "./components/Restaurant/Restaurant.js";
import BookingScreen from "./screens/BookingScreen/BookingScreen.js";
import ConfirmationScreen from "./screens/ConfirmationScreen/ConfirmationScreen.js";

function Home() {
  return (
    <>
      <Restaurant />
      <Meal />
      <Feedback />
      <Info />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookings" element={<BookingScreen />} />
        <Route path="/confirmation" element={<ConfirmationScreen />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
