import BoardOptions from "./BoardOptions";
import ColorwayList from "../colorway/ColorwayList";
import About from "./About";

interface OptionsPaneProps {
  setTab: (tabIndex: number) => void;
}

export default function OptionsPane(props: OptionsPaneProps) {
  return (
    <>
      <BoardOptions />
      <ColorwayList setTab={props.setTab} />
      <About />
    </>
  );
}
