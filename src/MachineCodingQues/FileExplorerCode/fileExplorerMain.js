import { useState } from "react";
import { fileData } from "./fileData";
import FileExplorer from "./fileExplorer";

const FileEplorerMain=()=>{
    const [explorerData,setExplorerData]= useState(fileData);

    console.log(">>explorerData",explorerData);
    

    const addItem = (currentFolder, parentId, newItem) => {
        if (currentFolder.id === parentId) {
            // Found the folder where we need to insert the new item
            return {
                ...currentFolder,
                items: [...currentFolder.items, newItem],
            };
        }
    
        // If not found, check inside each subfolder (recursive search)
        return {
            ...currentFolder,
            items: currentFolder.items.map((item) =>
                item.isFolder ? addItem(item, parentId, newItem) : item
            ),
        };
    };
    
    const handleSubmit = (value, isFolder, parentId) => {
        setExplorerData((prevData) =>
            addItem(prevData, parentId, {
                id: Date.now(), // Generate a unique ID
                fileName: value,
                isFolder,
                items: [],
            })
        );
    };
    
    
return(<>
 <div>
   <FileExplorer explorerData={explorerData} handleSubmit={handleSubmit}/>
</div>
</>)
}

export default FileEplorerMain;