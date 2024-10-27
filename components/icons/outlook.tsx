import { cn } from "@/utils/functions"

export const Outlook = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-4 w-4", className)}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.1777 5.46094V8.88406L13.3752 9.63719C13.4185 9.64669 13.4633 9.64669 13.5065 9.63719L18.6552 6.16594C18.6515 5.99747 18.5898 5.83543 18.4807 5.70704C18.3715 5.57866 18.2215 5.49176 18.0559 5.46094H12.1777Z"
        fill="#1948BD"
      />
      <path
        d="M12.1767 10.1601L13.2686 10.9101C13.3197 10.9412 13.3784 10.9577 13.4383 10.9577C13.4982 10.9577 13.5569 10.9412 13.608 10.9101C13.4205 11.0232 18.6536 7.54883 18.6536 7.54883V13.8401C18.6673 13.9676 18.6529 14.0965 18.6115 14.2178C18.5701 14.3392 18.5027 14.45 18.414 14.5426C18.3253 14.6352 18.2174 14.7072 18.098 14.7538C17.9785 14.8003 17.8503 14.8201 17.7224 14.812H12.1761L12.1767 10.1601ZM6.52424 8.58195C6.34282 8.58108 6.16454 8.6293 6.0083 8.72151C5.85206 8.81371 5.72367 8.94647 5.63674 9.1057C5.39931 9.52781 5.28539 10.0082 5.30799 10.492C5.28331 10.9747 5.39739 11.4545 5.63674 11.8745C5.72331 12.0271 5.84853 12.1543 5.99984 12.2433C6.15114 12.3323 6.3232 12.3798 6.49871 12.3812C6.67422 12.3826 6.847 12.3378 6.9997 12.2512C7.1524 12.1647 7.27963 12.0395 7.36861 11.8882C7.60535 11.4701 7.71707 10.9929 7.69049 10.5132C7.7176 10.0184 7.60957 9.52563 7.37799 9.08758C7.29523 8.93353 7.17196 8.80502 7.0215 8.71591C6.87104 8.6268 6.6991 8.58048 6.52424 8.58195Z"
        fill="#1948BD"
      />
      <path
        d="M1.3457 3.72187V17.1137L11.5332 19.25V1.75L1.3457 3.72187ZM8.1632 12.6819C7.97263 12.9505 7.71923 13.1685 7.4251 13.3168C7.13096 13.465 6.80503 13.5391 6.4757 13.5325C6.15467 13.5382 5.83701 13.4663 5.54973 13.3229C5.26246 13.1794 5.01408 12.9688 4.8257 12.7087C4.37894 12.085 4.15546 11.3289 4.19133 10.5625C4.15332 9.75852 4.38085 8.96437 4.83883 8.3025C5.03181 8.02871 5.28918 7.80659 5.58827 7.65575C5.88735 7.5049 6.21894 7.42995 6.55383 7.4375C6.87254 7.4311 7.18794 7.50304 7.47236 7.64699C7.75678 7.79094 8.00151 8.00251 8.18508 8.26312C8.62737 8.9004 8.84706 9.66579 8.81008 10.4406C8.84904 11.2388 8.62148 12.0272 8.1632 12.6819Z"
        fill="#1948BD"
      />
    </svg>
  )
}