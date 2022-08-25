// styling
import { memo } from "react";
import "./App.scss";

// components
import MovingStripes from "./components/background/MovingStripes";
import MainLayout from "./components/mainLayout/MainLayout";

function App() {
  return (
    <div className="App gradient__bg2">
      <MovingStripes />
      <MainLayout />
    </div>
  );
}

export default memo(App);
