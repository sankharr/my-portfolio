// styling
import { memo } from "react";
import "./App.scss";
import ReactGA from "react-ga";

// components
import MovingStripes from "./components/background/MovingStripes";
import MainLayout from "./components/mainLayout/MainLayout";

function App() {
  const TRACKING_ID = process.env.REACT_APP_TRACKING_ID;
  ReactGA.initialize(TRACKING_ID);
  return (
    <div className="App gradient__bg2">
      <MovingStripes />
      <MainLayout />
    </div>
  );
}

export default memo(App);
