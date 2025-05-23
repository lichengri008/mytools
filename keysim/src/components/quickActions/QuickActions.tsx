import Permalink from "./Permalink";
import ScreenShot from "./ScreenShot";
import GithubIcon from "../../assets/icons/icon_github.svg?react";
import styles from "./action.module.scss";

export default function QuickActions() {
  return (
    <div className={styles.actionBar}>
      <Permalink />
      <ScreenShot />
      <a
        className={styles.action}
        href="https://github.com/crsnbrt/keysim"
        aria-label="keyboard simulator on github"
        target="_blank"
      >
        <GithubIcon />
      </a>
    </div>
  );
}
