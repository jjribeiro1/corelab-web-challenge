import { HTMLAttributes } from "react";

type Props = HTMLAttributes<SVGSVGElement>;

export default function ColorPicker({ ...props }: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
    >
      <path
        d="M16.6236 12.012C16.6236 12.012 14.6236 14.182 14.6236 15.512C14.6236 16.0424 14.8343 16.5511 15.2094 16.9262C15.5845 17.3012 16.0932 17.512 16.6236 17.512C17.154 17.512 17.6627 17.3012 18.0378 16.9262C18.4129 16.5511 18.6236 16.0424 18.6236 15.512C18.6236 14.182 16.6236 12.012 16.6236 12.012ZM2.83359 10.512L7.62359 5.72196L12.4136 10.512M14.1836 9.45196L5.24359 0.511963L3.83359 1.92196L6.21359 4.30196L1.06359 9.45196C0.473594 10.012 0.473594 10.982 1.06359 11.572L6.56359 17.072C6.85359 17.362 7.24359 17.512 7.62359 17.512C8.00359 17.512 8.39359 17.362 8.68359 17.072L14.1836 11.572C14.7736 10.982 14.7736 10.012 14.1836 9.45196Z"
        fill="#51646E"
      />
      <path
        d="M7.69231 15.5089L2.8623 10.4651H12.4297L7.69231 15.5089Z"
        fill="#FFA000"
      />
    </svg>
  );
}