import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero/index";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
    </Router>
  );
}

export default App;
