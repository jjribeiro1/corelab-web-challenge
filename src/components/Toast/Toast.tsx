import toast from "react-hot-toast";

type Props = {
  type: "success" | "error";
  message: string;
};

export default function Toast({ type, message }: Props) {
  return toast[type](message, { position: "top-right" });
}
