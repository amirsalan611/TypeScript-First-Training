import React, { Ref } from "react";

interface IpropsType {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  value?: string;
  className?: string;
  onchange?: (e: any) => void;
  ref: Ref<HTMLInputElement> | undefined;
}

export default function Input({
  label,
  type,
  name,
  placeholder,
  value,
  className,
  onchange,
  ref,
}: IpropsType) {
  return (
    <div className="flex flex-col gap-5 w-full">
      <label className="text-[20px]">{label} :</label>
      <input
        ref={ref}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        className={className}
        onChange={onchange}
      />
    </div>
  );
}
