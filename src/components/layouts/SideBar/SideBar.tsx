import { SideBarData } from "@/services/menu";
import Image from "next/image";
import { NavLink } from "@/components/ui/NavLink";
import { ButtonToggle } from "@/components/ui/Button";

export const SideBar = (): JSX.Element => {
  return (
    <div className="pt-[38px] border-r-[1px] border-lighter-gray w-fit h-screen relative">
      <Image
        className="pl-[34px]"
        src={SideBarData.logo}
        width={SideBarData.logo.width}
        height={SideBarData.logo.height}
        alt={SideBarData.logo.alt}
      />
      <p className="pl-[34px] pt-[54px]">{SideBarData.total} (3)</p>
      <div className="pt-[10px]">
        {SideBarData.links.map((link: any, index: any) => {
          return (
            <NavLink
              key={index}
              children={link.name}
              href={link.href}
              icon={SideBarData.linkIcon.src}
              iconWidth={SideBarData.linkIcon.width}
              iconHeight={SideBarData.linkIcon.height}
              iconAlt={SideBarData.linkIcon.alt}
            />
          );
        })}
      </div>
      <div className="flex items-center w-[250px] bg-lightest-gray justify-center gap-[23px] mx-auto py-[14px] rounded-[6px] absolute bottom-[88px] left-[50%] translate-x-[-50%]">
        <Image
          src={SideBarData.theme.lightIcon.src}
          width={SideBarData.theme.lightIcon.width}
          height={SideBarData.theme.lightIcon.height}
          alt={SideBarData.theme.lightIcon.alt}
        />
        <ButtonToggle />
        <Image
          src={SideBarData.theme.darkIcon.src}
          width={SideBarData.theme.darkIcon.width}
          height={SideBarData.theme.darkIcon.height}
          alt={SideBarData.theme.darkIcon.alt}
        />
      </div>
      <button className="flex items-center gap-[15px] absolute bottom-[52px] ml-[24px]">
        <Image
          src={SideBarData.toggle.icon.src}
          width={SideBarData.toggle.icon.width}
          height={SideBarData.toggle.icon.height}
          alt={SideBarData.toggle.icon.alt}
        />
        {SideBarData.toggle.content}
      </button>
    </div>
  );
};
