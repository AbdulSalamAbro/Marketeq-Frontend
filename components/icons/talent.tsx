import { cn } from "@/utils/functions"

export const Talent = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("size-5", className)}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_13362_76761)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.29494 0.132446C7.74242 0.132446 6.34643 0.981811 5.33408 1.80779C4.32174 2.63474 3.67635 3.46426 3.67635 3.46426L3.38701 3.83508L3.8393 3.96789C3.8393 3.96789 4.01476 4.01664 4.22518 4.2322C4.43432 4.44647 4.65855 4.81247 4.65855 5.50533C4.65855 6.40348 4.79647 7.12939 4.86544 7.43637C4.67939 7.60188 4.57258 7.83854 4.57097 8.08746C4.57097 8.27013 4.61899 8.42918 4.6654 8.58292C4.67196 8.60466 4.67849 8.62629 4.68485 8.64787C4.69299 8.676 4.7011 8.7035 4.70889 8.72992C4.72534 8.78573 4.74036 8.8367 4.75125 8.8785C4.75865 8.90623 4.7635 8.93378 4.76658 8.95131C4.7703 8.9725 4.77145 8.97906 4.77145 8.9536C4.77145 9.39947 5.14996 9.75552 5.59358 9.75552H5.61219C5.74691 10.8295 6.29383 11.809 7.13713 12.4872V13.4582L6.16103 14.3014C5.43545 14.6183 4.29159 15.1284 3.29784 15.7562C2.79167 16.0756 2.32559 16.4227 1.9721 16.8038C1.61894 17.1845 1.36328 17.6144 1.36328 18.0955V20.0201H18.0433V18.0955C18.0433 17.6144 17.7876 17.1845 17.4345 16.8038C17.081 16.4227 16.6149 16.0756 16.1087 15.7562C15.115 15.1284 13.9711 14.6183 13.2455 14.3014L12.2694 13.4582V12.4885C13.0916 11.8293 13.6516 10.8593 13.7944 9.75552H13.8133C14.2566 9.75552 14.6351 9.39947 14.6351 8.9536C14.6351 8.97906 14.6363 8.9725 14.64 8.9513C14.6431 8.93377 14.6479 8.90623 14.6553 8.8785C14.666 8.83748 14.6807 8.78765 14.6967 8.73298C14.7048 8.70555 14.7132 8.67691 14.7217 8.64755C14.728 8.62628 14.7344 8.60494 14.7409 8.58349C14.7874 8.42968 14.8356 8.27027 14.8356 8.08785C14.8356 7.82482 14.7166 7.59285 14.5337 7.42862C14.5924 7.0902 14.8356 5.64198 14.8356 4.62322C14.8356 3.47037 14.4045 2.64467 13.8232 2.13209C13.3004 1.67339 12.6868 1.48926 12.1427 1.45045C12.0552 1.31156 11.8999 1.09345 11.5779 0.841647C11.1153 0.482065 10.3737 0.132446 9.29494 0.132446ZM9.29494 0.773985C10.237 0.773985 10.8221 1.0659 11.1817 1.34817C11.5426 1.62981 11.6616 1.87773 11.6616 1.87773L11.7495 2.05706H11.9487C12.3759 2.05706 12.9511 2.22002 13.3985 2.61457C13.847 3.00912 14.194 3.62594 14.194 4.62322C14.194 5.51816 13.9811 6.82369 13.9182 7.18937H13.9134C13.897 7.18937 13.8921 7.19162 13.8872 7.19392C13.8838 7.19549 13.8804 7.19707 13.8733 7.19798V6.22706C13.8733 5.12939 13.4248 4.39124 12.9735 3.95403C12.5225 3.51682 12.05 3.35651 12.05 3.35651L11.8672 3.29487L11.727 3.42895C11.727 3.42895 11.5249 3.62718 11.0377 3.85011C10.5501 4.07305 9.7963 4.30245 8.74097 4.30245C8.16359 4.30245 7.40272 4.50677 6.74258 4.96771C6.08468 5.4277 5.53713 6.17959 5.53456 7.19932C5.52746 7.19828 5.52384 7.19647 5.52025 7.19467C5.51493 7.192 5.50967 7.18937 5.49319 7.18937C5.4895 7.18937 5.48573 7.19 5.48196 7.19062C5.47819 7.19125 5.47442 7.19187 5.47073 7.19187C5.35621 6.63694 5.29912 6.07181 5.30009 5.50533C5.30009 4.66588 4.99952 4.10837 4.68485 3.78503C4.59347 3.69103 4.55051 3.67211 4.49545 3.64786C4.46973 3.63653 4.44136 3.62403 4.40418 3.60217C4.62615 3.34139 5.03833 2.87883 5.74017 2.30625C6.6935 1.52839 7.98171 0.773985 9.29494 0.773985ZM11.966 4.03831C12.054 4.07146 12.2494 4.14505 12.5277 4.41404C12.8783 4.7547 13.2317 5.29843 13.2317 6.22706V8.24949L13.7142 7.96623C13.7969 7.91844 13.8733 7.87611 13.9272 7.84853C13.9304 7.8466 13.9325 7.84565 13.9347 7.84469C13.9369 7.84373 13.939 7.84278 13.9422 7.84085C14.0888 7.85593 14.194 7.95858 14.194 8.08785C14.194 8.11159 14.1565 8.29951 14.1074 8.46728C14.0824 8.55004 14.0574 8.6341 14.0362 8.71044C14.0332 8.72111 14.0302 8.73135 14.0273 8.74137C14.0092 8.80301 13.9936 8.85647 13.9936 8.9536C13.9936 9.03892 13.9233 9.11399 13.813 9.11399H13.2382L13.2231 9.4187C13.1368 11.053 11.9368 12.4134 10.3259 12.7024L10.2345 12.7175L10.1655 12.7816C10.0404 12.8955 9.88259 12.9632 9.70328 12.9632C9.52397 12.9632 9.36647 12.8942 9.23977 12.7804L9.17209 12.7175L9.08067 12.7024C7.46944 12.4134 6.26945 11.053 6.18348 9.41839L6.16744 9.11399H5.59327C5.48324 9.11399 5.41299 9.03892 5.41299 8.9536C5.41299 8.85648 5.39733 8.80301 5.37927 8.74137C5.37634 8.73135 5.37334 8.72111 5.37033 8.71044C5.34916 8.6341 5.32414 8.55004 5.29912 8.46728C5.25004 8.29951 5.21251 8.11159 5.21251 8.08785C5.21251 7.95858 5.31773 7.85593 5.46432 7.84085C5.46753 7.84278 5.46969 7.84373 5.47185 7.84469C5.47402 7.84565 5.47618 7.8466 5.47939 7.84853C5.53328 7.87611 5.60963 7.91844 5.69238 7.96623L6.17482 8.24949V7.20535C6.17482 6.40599 6.57322 5.8684 7.10954 5.49374C7.64587 5.1194 8.3275 4.94398 8.74097 4.94398C9.88997 4.94398 10.7394 4.69215 11.3046 4.43393C11.67 4.26699 11.801 4.1562 11.9039 4.06916C11.9192 4.05619 11.9339 4.04374 11.9487 4.03172C11.9539 4.03375 11.9597 4.03592 11.966 4.03831ZM7.77867 12.908C8.12189 13.0899 8.49302 13.2262 8.88628 13.3051C9.11178 13.4832 9.39117 13.6048 9.70328 13.6048C10.0154 13.6048 10.2922 13.4832 10.518 13.3051C10.9126 13.2275 11.2847 13.0899 11.6279 12.908V13.7362C11.472 13.9499 11.3033 14.1539 11.123 14.3476C10.6957 14.8025 10.1331 15.2086 9.70328 15.2086C9.27345 15.2086 8.71082 14.8025 8.28356 14.3476C8.10329 14.1539 7.93456 13.9499 7.77867 13.7362V12.908ZM7.29879 14.1661C7.45918 14.3823 7.63176 14.5895 7.81524 14.7864C8.05678 15.0443 8.34386 15.3112 8.66719 15.5146L7.46174 16.3175L6.834 14.5683L7.29879 14.1661ZM11.5916 14.7861C11.7751 14.5892 11.9474 14.3822 12.1078 14.1661L12.6954 14.6736L12.1052 16.3175L10.8234 15.463C11.1131 15.2663 11.371 15.0219 11.5916 14.7861ZM6.28901 14.9481L7.13328 17.3074L9.06559 16.0191L9.29975 16.6055L9.08676 19.3786H2.00482V18.0955C2.00482 17.8511 2.15013 17.5554 2.44331 17.2397C2.7365 16.9241 3.16247 16.5994 3.63882 16.2986C4.52446 15.7398 5.56632 15.2651 6.28901 14.9481ZM13.2568 15.0081C13.9711 15.325 14.9357 15.7738 15.7677 16.2986C16.2441 16.5994 16.6701 16.9241 16.9633 17.2397C17.2564 17.5554 17.4017 17.8511 17.4017 18.0955V19.3786H15.7979V18.0955H12.5902V19.3786H10.3198L10.1068 16.6055L10.375 15.9351L12.4337 17.3074L13.2568 15.0081ZM15.1564 18.7371V19.3786H13.2317V18.7371H15.1564Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_13362_76761">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
