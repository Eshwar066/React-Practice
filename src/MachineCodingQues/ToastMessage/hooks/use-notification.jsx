import { useState } from "react";
import ToastMessage from "../components/toastMsg";
import "./use-notification.css"

const GenericToast = () => {
  const [toast, setToast] = useState([]);

  const handleToastType = ({ type, msg }) => {
    const newToast = { type, msg };

    setToast((prevToast) => [...prevToast, newToast]);

    setTimeout(() => {
      setToast((prevToast) => prevToast.slice(1));
    }, 3000);
  };
  return (
    <>
    <div className="btn-container"> 
    <button
        onClick={() =>
          handleToastType({ type: "info", msg: "Need to update the cart" })
        }
      >
        Info
      </button>
      <button
        onClick={() => handleToastType({ type: "sucess", msg: "Cart updated" })}
      >
        sucess
      </button>
      <button
        onClick={() =>
          handleToastType({ type: "error", msg: "Unable to send request" })
        }
      >
        Error
      </button>


    </div>
     
      {toast.length > 0 &&
        toast.map((item) => (
          <>
            <ToastMessage type={item.type} msg={item.msg} />
          </>
        ))}
    </>
  );
};

export default GenericToast;
