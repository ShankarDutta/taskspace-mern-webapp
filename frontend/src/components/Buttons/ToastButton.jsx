import toast from "react-hot-toast";
import { Button } from "../ui/button";

const ToastButton = () => {
  return (
    <Button onClick={() => toast.success("Hello Developer 👋🏻 ")}>
      Click Me
    </Button>
  );
};

export default ToastButton;
