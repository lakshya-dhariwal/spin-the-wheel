import { toast } from "react-hot-toast";

export const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
  toast("Copied to Clipboard!", {
    icon: "📝",
    style: toastStyle,
  });
};

export const validateEmail = (mail: string) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  toast.error("Invalid Email Address", { style: toastStyle });
  return false;
};

export const validatePhone =(phone:string)=>{
  if (/^\d{10}$/.test(phone)) {
    return true;
  }
  toast.error("Invalid Phone Number", { style: toastStyle });
  return false;
}

export const toastStyle = {
  borderRadius: "10px",
  background: "#333",
  color: "#fff",
};

