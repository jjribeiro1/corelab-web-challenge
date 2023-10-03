import * as RadixPopover from "@radix-ui/react-popover";

type Props = {
  iconTrigger: JSX.Element;
  open: boolean;
  onOpenChange: (value: boolean) => void;
  editMode: boolean
  children: React.ReactNode;
};

export default function Popover({
  open,
  onOpenChange,
  iconTrigger,
  editMode,
  children,
}: Props) {
  return (
    <RadixPopover.Root open={open} onOpenChange={onOpenChange}>
      <RadixPopover.Trigger asChild>
        <button type="button" disabled={editMode ? false : true}>{iconTrigger}</button>
      </RadixPopover.Trigger>
      <RadixPopover.Portal>
        <RadixPopover.Content
          className="rounded p-3 w-max bg-white shadow-primary will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
          sideOffset={15}
        >
          {children}
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  );
}
