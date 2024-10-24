import React from "react";
import Card from "./Components/Card";
import "./style.css";
const App = () => {
  return (
    <div className="App">
      <main className="row">
        <Card
          name="jack sparrow"
          email="pirate@email.com"
          phone="9900909090"
          imgURL="https://variety.com/wp-content/uploads/2022/05/MCDPIOF_EC366.jpg?w=1000&h=667&crop=1"
        />
        <Card
          name="johnny"
          email="johnyjohny@email.com"
          phone="6483947293"
          imgURL="https://cdn.marvel.com/content/1x/ghostr2024001_capullo.jpg"
        />
      </main>
    </div>
  );
};

export default App;
