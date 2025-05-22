import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  isText?: boolean;
  icon?: React.ReactNode;
  handler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.handler}
      className={props.isText ? styles.btnText : styles.btn}
    >
      {props.icon}
      <span>{props.title}</span>
    </button>
  );
}
