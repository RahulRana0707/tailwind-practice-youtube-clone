import Navbar from "./Components/Navbar";
import Topics from "./Components/Topics";
import Contents from "./Components/Contents";
import SideBar from "./Components/SideBar";
function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />
      <div className="flex">
        {/* Left Sidebar */}
        <SideBar />
        <div>
          {/* Topics */}
          <Topics />
          {/* Contents */}
          <Contents />
          {/* Shorts */}
        </div>
      </div>
    </div>
  );
}

export default App;
