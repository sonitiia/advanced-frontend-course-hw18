import "./App.css";
import InfiniteTimer from "./InfiniteTimer";
import Timer from "./Timer";

function App() {
  const handleTick = (time) => console.log("Залишилось часу: " + time + " ms");

  const handleTimeEnd = () => console.log("Час вийшов!");

  const handleTimeStart = () => console.log("Таймер запущено!");

  const handleTimePause = () => console.log("Таймер на паузі!");

  return (
    <div className="App">
      <Timer
        time={10000}
        step={1000}
        autostart={false}
        onTick={handleTick}
        onTimeEnd={handleTimeEnd}
        onTimeStart={handleTimeStart}
        onTimePause={handleTimePause}
      />
      <InfiniteTimer
        time={5000}
        step={1000}
        autostart={true}
        onTick={handleTick}
        onTimeEnd={handleTimeEnd}
        onTimeStart={handleTimeStart}
        onTimePause={handleTimePause}
      />
    </div>
  );
}

export default App;
