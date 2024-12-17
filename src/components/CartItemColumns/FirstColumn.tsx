export default function FirstColumn({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  return (
    <img
      src={image}
      alt={title}
      className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover  transition-all duration-300 hover:scale-125"
    />
  );
}
