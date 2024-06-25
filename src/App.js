import { useEffect } from "react";
import ReactGA from "react-ga4";

import "./App.css";
import { Bottom, Header, SignUpForm } from "./Components";

function App() {
  useEffect(() => {
    ReactGA.initialize("UA-214444346-1");
  }, []);

  return (
    <div className="App">
      <div className="AppContainer">
        <Header />
        <br />
        <SignUpForm />
        <Bottom />
      </div>
    </div>
  );
}

export default App;
