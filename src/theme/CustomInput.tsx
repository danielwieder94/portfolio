import React from "react";

// Specify the type for the ref to be an HTMLInputElement
const CustomInput = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <input
      {...props}
      name="phoneNumber"
      ref={ref}
      className="block w-full py-2.5 px-0 text-sm text-slate-300/75 bg-transparent border-0 border-b-2 border-slate-200 appearance-none dark:text-white dark:border-gray-600 focus:border-blue-500/50 focus:outline-none focus:ring-0 peer"
      // style={{
      //   backgroundColor: "transparent",
      //   border: "none",
      //   borderBottom: "2px solid rgba(226, 232, 240)",
      //   color: "rgba(203, 213, 225, 0.75)",
      // }}
    />
  );
});

export default CustomInput;
