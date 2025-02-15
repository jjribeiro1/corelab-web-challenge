import { HTMLAttributes } from "react";

type Props = { isFavorite: boolean } & HTMLAttributes<SVGSVGElement>;

export default function FavoriteIcon({ isFavorite, ...props }: Props) {
  return (
    <svg
      {...props}
      className="absolute block top-1/2 -translate-x-1/2 -translate-y-1/2 right-3 cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        className={isFavorite ? "fill-[#FFA000]" : "fill-none"}
        d="M7.47998 7.50378L2.32617 8.29669L6.88529 11.9638L5.69595 17.5141L9.85865 14.3425L15.0125 17.5141L13.6249 11.9638L17.4903 8.29669L12.2373 7.50378L9.85865 2.34998L7.47998 7.50378Z"
      />
      <path
        d="M9.93823 13.7112L6.29995 15.9077L7.25791 11.7662L4.04538 8.97947L8.28359 8.62145L9.93823 4.71223L11.5929 8.62145L15.8311 8.97947L12.6186 11.7662L13.5765 15.9077M19.6145 7.76026L12.6573 7.17001L9.93823 0.754639L7.2192 7.17001L0.261963 7.76026L5.53553 12.3371L3.9583 19.1396L9.93823 15.5303L15.9182 19.1396L14.3313 12.3371L19.6145 7.76026Z"
        fill="#455A64"
      />
    </svg>
  );
}
