import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import ColorUtil from "./util/color";
import "./App.scss";

import * as colorwaysActions from "./store/slices/colorways";
import * as settingsActions from "./store/slices/settings";
import type { CSSProperties } from "react";

function App() {
  const colorway_id = useSelector(colorwaysActions.selectColorway);
  const sceneAutoColor = useSelector(settingsActions.selectSceneAutoColor);
  const sceneColor = useSelector(settingsActions.selectSceneColor);
  const highContrast = useSelector(settingsActions.selectHighContrast);

  const getAccent = () => {
    return ColorUtil.getUiAccent(colorway_id, null);
  };

  const getSceneColor = () => {
    return sceneAutoColor ? ColorUtil.getAccent(colorway_id) : sceneColor;
  };

  const uiColors = {
    "--main": "#202024",
    "--dark-1": "#202024",
    "--dark-2": "#202024",
    "--light-1": "#38383f",
    "--light-2": "#9c9ca7",
    "--light-3": "#e0e0e3",
    "--accent": getAccent(),
    "--sceneColor": getSceneColor(),
    "--accent-transparent": ColorUtil.getTransparentColor(
      getAccent(),
      undefined
    ),
    "--compliment": ColorUtil.getUiCompliment(colorway_id),
    "--accent-text": ColorUtil.getUiAccentText(colorway_id),
  } as CSSProperties;

  const uiColorsHC = {
    "--main": "#000000",
    "--dark-1": "#202024",
    "--dark-2": "#202024",
    "--light-1": "#202024",
    "--light-2": "#cccccc",
    "--light-3": "#ffffff",
    "--accent": getAccent(),
    "--sceneColor": getSceneColor(),
    "--accent-transparent": ColorUtil.getTransparentColor(
      getAccent(),
      undefined
    ),
    "--compliment": ColorUtil.getUiCompliment(colorway_id),
    "--accent-text": "#000000",
  } as CSSProperties;

  return (
    <div className="App" style={highContrast ? uiColorsHC : uiColors}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
