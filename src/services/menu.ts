import { data } from "@/data/data.js";

export const SideBarData = {
  logo: {
    src: "/images/logo-dark.svg",
    width: 150,
    height: 25,
    alt: "Side Bar Logo",
  },
  total: data.sideBar.total,
  links: [
    { name: data.boards[0].name, href: "/hello" },
    { name: data.boards[1].name, href: "/" },
    { name: data.boards[2].name, href: "/" },
    { name: data.sideBar.name, href: "/" },
  ],
  linkIcon: {
    src: "/images/icon-board.svg",
    width: 16,
    height: 16,
    alt: "Board Icon",
  },
  theme: {
    lightIcon: {
      src: "/images/icon-light-theme.svg",
      width: 15,
      height: 15,
      alt: "Light Theme Icon",
    },
    darkIcon: {
      src: "/images/icon-dark-theme.svg",
      width: 15,
      height: 15,
      alt: "Dark Theme Icon",
    },
  },
  toggle: {
    content: "Hide Sidebar",
    icon: {
      src: "/images/icon-hide-sidebar.svg",
      width: 15,
      height: 15,
      alt: "Hide Sidebar Icon",
    },
  },
};
