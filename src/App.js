// Importing React library for creating components.
import React from "react";

// Importing the Card component from the Components folder.
import Card from "./Components/Card";

// Importing a CSS file for styling the components.
import "./style.css";

// Creating a functional component named 'App'.
const App = () => {
  // Returning JSX, which is a mix of HTML-like syntax and JavaScript.
  return (
    // Defining a parent 'div' with a class name 'App' for styling.
    <div className="App">
      {/* A 'main' element with a class of 'row' for layout purposes. */}
      <main className="row">
        {/* Rendering the Card component and passing it properties (name, email, phone, and imgURL). */}
        <Card
          name="jack sparrow"
          email="pirate@email.com"
          phone="9900909090"
          imgURL="https://variety.com/wp-content/uploads/2022/05/MCDPIOF_EC366.jpg?w=1000&h=667&crop=1"
        />
        {/* Another Card component with different properties (name, email, phone, and imgURL). */}
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

// Exporting the App component as the default export so it can be imported in other files.
export default App;
