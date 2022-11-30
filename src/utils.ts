import { toast } from "react-hot-toast";

export const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
  toast("Copied to Clipboard!", {
    icon: "📝",
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });
};
