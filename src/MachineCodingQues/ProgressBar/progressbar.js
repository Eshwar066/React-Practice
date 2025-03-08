import { useEffect, useState } from "react";
import "./progressbar.css";

const ProgressbarComponent = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimatedProgress(progress), 100);
    return () => clearTimeout(timeout); // Cleanup
  }, [progress]);

  return (
    <div className="outer">
      <div
        className="inner"
        style={{ transform: `translateX(${animatedProgress - 100}%)` }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemax={100}
        aria-valuemin={0}
      >
        {animatedProgress}%
      </div>
    </div>
  );
};

const Progressbar = () => {
  const initialBars = [0, 30, 50, 70, 80, 100];
  const [bars, setBars] = useState(initialBars);

  const reloadProgressBars = () => {
    setBars([]);
    setTimeout(() => setBars(initialBars), 50);
  };

  return (
    <div>
      <div>Progress Bar</div>
      <div>
        {bars.map((item, id) => (
          <ProgressbarComponent progress={item} key={id} />
        ))}
      </div>
      <button onClick={reloadProgressBars}>Reload</button>
    </div>
  );
};

export default Progressbar;
