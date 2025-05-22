import  { useState } from "react";
import styles from "./action.module.scss";
import CameraIcon from "../../assets/icons/icon_camera.svg?react";

export default function ScreenShot() {
  const [visible, setVisible] = useState(false);
  return (
    <div
      role="button"
      aria-label="take screenshot"
      className={styles.action}
      onMouseEnter={() => {
        setVisible(true);
      }}
      onMouseLeave={() => {
        setVisible(false);
      }}
      onClick={() => {
        let event = new CustomEvent("screenshot", {});
        document.dispatchEvent(event);
      }}
    >
      <CameraIcon />
      {visible && (
        <div role="tooltip" className={styles.tooltip}>
          Take Screenshot
        </div>
      )}
    </div>
  );
}
