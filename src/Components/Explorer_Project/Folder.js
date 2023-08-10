import { useState } from "react";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);

  if (explorer.isFolder) {
    return (
      <div>
        <span onClick={() => setExpand(!expand)}>
          {explorer.name}
          <br />
        </span>

        <div
          style={{ display: expand ? "block" : "none", paddingLeft: "15px" }}
        >
          {explorer.items &&
            explorer.items.map((expl) => {
              return <Folder explorer={expl} />;
            })}
        </div>
      </div>
    );
  } else {
    return (
      <span>
        {explorer.name}
        <br />
      </span>
    );
  }
};

export default Folder;
