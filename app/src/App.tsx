import { useCallback, useMemo, useRef } from "react";
import "./App.css";

const Element = () => (
  <div className="item">
    <div className="native">
      <div>
        <img src="https://picsum.photos/200/300" />
      </div>
    </div>
  </div>
);

const App = () => {
  const container = useRef<HTMLDivElement>(null);

  const crash = useCallback(
    () =>
      container.current?.animate(
        [
          { offset: 0, transform: "translate3d(0, 0, 0)" },
          { offset: 1, transform: "translate3d(0, 0, 0)" },
        ],
        500
      ),
    [container]
  );

  const elements = useMemo(
    () => new Array(500).fill(null).map((_, index) => <Element key={index} />),
    []
  );

  return (
    <>
      <button onClick={crash}>crash</button>
      <div ref={container} className="container">
        {elements}
      </div>
    </>
  );
};

export default App;
