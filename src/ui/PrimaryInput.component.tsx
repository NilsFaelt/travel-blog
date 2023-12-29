interface Props<T> {
  placholder: string;
  value: string | number;
  setValue: React.Dispatch<React.SetStateAction<T>>;
  type?: "text" | "password" | "number";
}
export const PrimaryInput = <T,>({
  placholder,
  type = "text",
  value,
  setValue,
}: Props<T>) => {
  return (
    <input
      className=' self-center rounded-md h-5.5 w-50 border-solid border-2 border-black  p-1 focus:outline-none max-w-60'
      onChange={(e) => setValue(e.target.value as T)}
      type={type}
      placeholder={placholder}
      value={value}
    />
  );
};
