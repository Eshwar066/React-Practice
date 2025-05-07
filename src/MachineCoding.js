import Accordian from "./MachineCodingQues/Accordian/accordian";
import Carousel from "./MachineCodingQues/CarosuelUi/carosuel";
import FileEplorerMain from "./MachineCodingQues/FileExplorerCode/fileExplorerMain";
import Progressbar from "./MachineCodingQues/ProgressBar/progressbar";
import ToastMessage from "./MachineCodingQues/ToastMessage/components/toastMsg";
import GenericToast from "./MachineCodingQues/ToastMessage/hooks/use-notification";
import MemeCoinsNearEma from "./MachineCodingQues/MemeCoins/memeCoinsNearEma.tsx";
const MachineCoding = () => {
  return (
    <>
      <h1> Machine Coding main file</h1>
      {/* <Carousel/> */}
      {/* <FileEplorerMain/> */}
      {/* <Progressbar/> */}
      {/* <Accordian/> */}
      {/* <GenericToast/> */}
      <MemeCoinsNearEma />
    </>
  );
};

export default MachineCoding;
