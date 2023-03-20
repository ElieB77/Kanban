import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  size: "small" | "large";
  backgroundColor: "primary" | "secondary" | "tertiary";
  icon?: boolean;
  onClick?: () => void;
}

export const Button = (props: ButtonProps): JSX.Element => {
  const ButtonClassname = clsx({
    "text-base": props.size === "large",
    "text-sm": props.size === "small",
    "bg-blue": props.backgroundColor === "primary",
    "bg-lightest-gray": props.backgroundColor === "secondary",
    "bg-red": props.backgroundColor === "tertiary",
    "text-purple": props.backgroundColor === "secondary",
    "hover:bg-purple": props.backgroundColor === "primary",
    "hover:bg-lighter-gray": props.backgroundColor === "secondary",
  });

  return (
    <button
      className={`${ButtonClassname} text-light px-6 py-2 rounded-[20px]`}
      {...props}
    >
      {props.icon && <span>+ </span>}
      {props.children}
    </button>
  );
};
