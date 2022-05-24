import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import "./App.css";
import Exercise1 from "./routes/Exercise1";
import Exercise2 from "./routes/Exercise2";
import Exercise3 from "./routes/Exercise3";
import Exercise4 from "./routes/Exercise4";
import Exercise5 from "./routes/Exercise5";
import Exercise6 from "./routes/Exercise6";
import Exercise7 from "./routes/Exercise7";
import Exercise8 from "./routes/Exercise8";
import Exercise9 from "./routes/Exercise9";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> | <Link to="/exercise-1">Exercise 1</Link> |{" "}
          <Link to="/exercise-2">Exercise 2</Link> |{" "}
          <Link to="/exercise-3">Exercise 3</Link> |{" "}
          <Link to="/exercise-4">Exercise 4</Link> |{" "}
          <Link to="/exercise-5">Exercise 5</Link> |{" "}
          <Link to="/exercise-6">Exercise 6</Link> |{" "}
          <Link to="/exercise-7">Exercise 7</Link> |{" "}
          <Link to="/exercise-8">Exercise 8</Link> |{" "}
          <Link to="/exercise-9">Exercise 9</Link> |
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="exercise-1" element={<Exercise1 />} />
          <Route path="exercise-2" element={<Exercise2 />} />
          <Route path="exercise-3" element={<Exercise3 />} />
          <Route path="exercise-4" element={<Exercise4 />} />
          <Route path="exercise-5" element={<Exercise5 />} />
          <Route path="exercise-6" element={<Exercise6 />} />
          <Route path="exercise-7" element={<Exercise7 />} />
          <Route path="exercise-8" element={<Exercise8 />} />
          <Route path="exercise-9" element={<Exercise9 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
