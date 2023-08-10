import React, { useState } from "react";

function StateString() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <form>
      <h1>{name.firstName}</h1>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />

      <h1>{name.lastName}</h1>
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />

      <h1>{JSON.stringify(name)}</h1>
    </form>
  );
}

export default StateString;
