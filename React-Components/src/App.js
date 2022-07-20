import Header from "./components/Header/Header";
import Students from "./components/Students/studentData";

import "./App.css";

const App = () => {

  return (
     <section className="app">
      <Header></Header>
      <Students></Students>
    </section>  
  );
}

export default App;
