import "./toastmsg.css"

const ToastMessage=({type,msg})=>{

    return(
        <div className="toastmsg" >
        
        <span>
        {type=="info"?  "ℹ️"   :  " ✅ "}
        </span>
      
           {msg}
         ❎
        
        </div>
    )
}

export default ToastMessage;