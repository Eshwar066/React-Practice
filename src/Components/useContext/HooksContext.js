import React, { useContext } from "react";

const ThemeContext = React.createContext("light");

function HooksContext() {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <p>Current Theme: {theme}</p>
    </div>
  );
}

export default HooksContext;
