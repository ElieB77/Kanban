import clsx from "clsx";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
}

export const Input = (props: InputProps): JSX.Element => {
  const inputClassname = clsx({
    "border-lighter-gray": !props.errorMessage,
    "border-red": props.errorMessage,
  });
  return (
    <input
      className={`${inputClassname} border-2 rounded-[4px] pl-[16px] py-[8px]`}
      {...props}
    />
  );
};
