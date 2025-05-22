import { useEffect, useRef, useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import threeApp from "../three";
import QuickActions from "../components/quickActions/QuickActions";

export default function Home() {
  const rootEl = useRef(null);
  const [showSidebar] = useState(true);

  useEffect(() => {
    threeApp(rootEl.current);
  }, []);

  return (
    <>
      {showSidebar && <Sidebar />}
      <div
        id="canvas-wrapper"
        ref={rootEl}
        role="region"
        aria-label="3d scene of keyboard"
      ></div>
      <QuickActions />
    </>
  );
}
