import Image from "next/image";
import { LinkHTMLAttributes } from "react";

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: string;
  icon?: string;
  iconWidth?: number;
  iconHeight?: number;
  iconAlt?: string;
}

export const NavLink = (props: NavLinkProps): JSX.Element => {
  return (
    <a
      className="flex w-fit items-center gap-[16px] py-[15px] hover:bg-blue hover:text-light rounded-r-[100px] pr-[92px] pl-[34px]"
      {...props}
    >
      <span>
        <Image
          src={props.icon!}
          width={props.iconWidth}
          height={props.iconHeight}
          alt={props.iconAlt!}
        />
      </span>
      {props.children}
    </a>
  );
};
