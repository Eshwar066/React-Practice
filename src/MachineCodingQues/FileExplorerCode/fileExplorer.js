import { useState } from "react";

const FileExplorer = (props) => {
  const [expandState, setExpandState] = useState(false);
  const [inputString, setInputString] = useState("");
  const [formState, setFormState] = useState({createFolder:false,createFile:false});

  const handleChange = (e) => {
    setInputString(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
   props?.handleSubmit(inputString, formState.createFolder ? true : false,props.explorerData?.id);
  
    setInputString("");
  
    // Delay resetting formState to ensure the form is not removed before submission completes
    setTimeout(() => {
      setFormState({ createFolder: false, createFile: false });
    }, 100);

  };
  

  const formComponent=()=>{
    return(
      <form onSubmit={handleSubmit}>
      <input
      autoFocus={true}
        placeholder="file name"
        value={inputString}
        onChange={handleChange}
      />
      <button
        type="submit"
        style={{ background: "grey", width: "100px", height: "30px" }}
      >
        Submit
      </button>
    </form>
    )
  }

  return (
    <div>
      <div style={{display:"flex"}}>

      <div onClick={() => setExpandState(!expandState)}>
        📁 {props.explorerData.fileName}{" "}
       
      </div>
      <button
          onClick={()=>setFormState({...formState,createFolder:true})}
          style={{ background: "grey", width: "100px", height: "30px" }}
        >
          {" "}
          Create Folder
        </button>{" "}
        <button onClick={()=>setFormState({...formState,createFile:true})} style={{ background: "grey", width: "100px", height: "30px" }}>
          Create File
        </button>
      </div>
        {(formState.createFile || formState.createFolder) && formComponent()}

      <div
        style={{ display: expandState ? "block" : "none", marginLeft: "30px" }}
      >
        {props.explorerData.items.map((item,id) => {
          if (item.isFolder) {
            return (
              <div key={item.id} >
                <FileExplorer explorerData={item} handleSubmit={props.handleSubmit} />
              </div>
            );
          } else {
            return <>{item.fileName}</>;
          }
        })}
      </div>
    </div>
  );
};

export default FileExplorer;
