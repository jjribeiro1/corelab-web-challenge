import { HTMLAttributes } from "react";

type Props = HTMLAttributes<SVGSVGElement>;

export default function EditIcon({ ...props }: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M13.9443 9.16667L14.8321 10.0544L6.25656 18.6111H5.38767V17.7422L13.9443 9.16667ZM17.3443 3.5C17.1082 3.5 16.8627 3.59444 16.6832 3.77389L14.9549 5.50222L18.4966 9.04389L20.2249 7.31556C20.5932 6.94722 20.5932 6.33333 20.2249 5.98389L18.0149 3.77389C17.826 3.585 17.5899 3.5 17.3443 3.5ZM13.9443 6.51278L3.49878 16.9583V20.5H7.04045L17.486 10.0544L13.9443 6.51278Z"
        fill="#51646E"
      />
    </svg>
  );
}
