import { cn } from "@/utils/functions"

export const Filter = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-5 w-5", className)}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.49967 4.16667C7.03944 4.16667 6.66634 4.53976 6.66634 5C6.66634 5.46024 7.03944 5.83333 7.49967 5.83333C7.95991 5.83333 8.33301 5.46024 8.33301 5C8.33301 4.53976 7.95991 4.16667 7.49967 4.16667ZM5.14193 4.16667C5.48513 3.19567 6.41116 2.5 7.49967 2.5C8.58819 2.5 9.51422 3.19567 9.85742 4.16667H15.833C16.2932 4.16667 16.6663 4.53976 16.6663 5C16.6663 5.46024 16.2932 5.83333 15.833 5.83333H9.85742C9.51422 6.80433 8.58819 7.5 7.49967 7.5C6.41116 7.5 5.48513 6.80433 5.14193 5.83333H4.16634C3.7061 5.83333 3.33301 5.46024 3.33301 5C3.33301 4.53976 3.7061 4.16667 4.16634 4.16667H5.14193ZM12.4997 9.16667C12.0394 9.16667 11.6663 9.53976 11.6663 10C11.6663 10.4602 12.0394 10.8333 12.4997 10.8333C12.9599 10.8333 13.333 10.4602 13.333 10C13.333 9.53976 12.9599 9.16667 12.4997 9.16667ZM10.1419 9.16667C10.4851 8.19567 11.4112 7.5 12.4997 7.5C13.5882 7.5 14.5142 8.19567 14.8574 9.16667H15.833C16.2932 9.16667 16.6663 9.53976 16.6663 10C16.6663 10.4602 16.2932 10.8333 15.833 10.8333H14.8574C14.5142 11.8043 13.5882 12.5 12.4997 12.5C11.4112 12.5 10.4851 11.8043 10.1419 10.8333H4.16634C3.7061 10.8333 3.33301 10.4602 3.33301 10C3.33301 9.53976 3.7061 9.16667 4.16634 9.16667H10.1419ZM7.49967 14.1667C7.03944 14.1667 6.66634 14.5398 6.66634 15C6.66634 15.4602 7.03944 15.8333 7.49967 15.8333C7.95991 15.8333 8.33301 15.4602 8.33301 15C8.33301 14.5398 7.95991 14.1667 7.49967 14.1667ZM5.14193 14.1667C5.48513 13.1957 6.41116 12.5 7.49967 12.5C8.58819 12.5 9.51422 13.1957 9.85742 14.1667H15.833C16.2932 14.1667 16.6663 14.5398 16.6663 15C16.6663 15.4602 16.2932 15.8333 15.833 15.8333H9.85742C9.51422 16.8043 8.58819 17.5 7.49967 17.5C6.41116 17.5 5.48513 16.8043 5.14193 15.8333H4.16634C3.7061 15.8333 3.33301 15.4602 3.33301 15C3.33301 14.5398 3.7061 14.1667 4.16634 14.1667H5.14193Z"
        fill="currentColor"
      />
    </svg>
  )
}