type Props = React.HTMLAttributes<SVGSVGElement>;

export default function SendIcon({ ...props }: Props) {
  return (
    <svg
      {...props}
      className="absolute block bottom-2 right-6 cursor-pointer lucide lucide-send text-[#455A64]"
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}
