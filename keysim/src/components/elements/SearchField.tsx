import { useState, type ChangeEvent } from "react";
import styles from "./SearchField.module.scss";

import SearchIcon from "../../assets/icons/icon_search.svg?react";
import CloseIcon from "../../assets/icons/icon_x.svg?react";

interface SearchFieldProps {
  filter: (val: string) => void;
}

export default function SearchField(props: SearchFieldProps) {
  const [value, setValue] = useState("");

  const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    props.filter(e.target.value);
  };

  return (
    <div className={styles.search} role="search">
      <div
        className={styles.icon}
        onClick={() => {
          setValue("");
          props.filter("");
        }}
      >
        {value ? <CloseIcon /> : <SearchIcon />}{" "}
      </div>
      <input
        aria-label="Colorway Search"
        type="search"
        placeholder="Search"
        value={value}
        onChange={handelChange}
      />
    </div>
  );
}
