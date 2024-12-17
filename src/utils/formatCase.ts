export const formatCase = (string: string) => {
  return string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join(" ");
};
