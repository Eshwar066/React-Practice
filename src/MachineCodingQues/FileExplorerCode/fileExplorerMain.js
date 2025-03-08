import { useState } from "react";
import { fileData } from "./fileData";
import FileExplorer from "./fileExplorer";

const FileEplorerMain=()=>{
    const [explorerData,setExplorerData]= useState(fileData);

    //recursion
    const addItem = (currentFolder, parentId, newItem) => {
        if (currentFolder.id === parentId) {
            
            return {
                ...currentFolder,
                items: [...currentFolder.items, newItem],
            };
        }

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
                id: Date.now(),
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