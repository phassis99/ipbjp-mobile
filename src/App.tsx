import "./App.css";
import Header from "./components/header/header.component";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App h-screen w-screen bg-gray-100 flex flex-col gap-y-4">
      <Header />
      <div className="flex flex-col px-8">
        <Home />
      </div>
    </div>
  );
}

export default App;
