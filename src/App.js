import "./App.css";
import "./components/ShowList";
import ShowList from "./components/ShowList";
import useTVMazeAPI from "./hooks/useTVMazeAPI";
import BarChart from "./components/BarChart";

function App() {
  const tvShow1 = useTVMazeAPI(1);
  const tvShow2 = useTVMazeAPI(2);
  const tvShow3 = useTVMazeAPI(3);

  return (
    <div className="App">
      <h1>TV Maze API</h1>
      <ShowList tvShow1={tvShow1} tvShow2={tvShow2} tvShow3={tvShow3} />
      <BarChart tvShow1={tvShow1} tvShow2={tvShow2} tvShow3={tvShow3} />
    </div>
  );
}

export default App;
