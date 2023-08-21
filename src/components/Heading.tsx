interface HeadingProps {
  title?: string;
  subtitle?: string;
  center?: boolean;
  color?: string;
  size?: string;
  magrin?: number;

  onClick?: () => void;
}

const Heading: React.FC<HeadingProps> = ({
  title,
  subtitle,
  center,
  color,
  size,
  magrin,
  onClick,
}) => {
  return (
    <div
      className={`my-${magrin ? [magrin] : 10} cursor-pointer`}
      onClick={onClick}
    >
      <div className={center ? "text-center" : "text-start"}>
        <div
          className={
            size
              ? `text-[${size}] font-bold text-white`
              : "text-sm sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-bold text-slate-200"
          }
        >
          {title}
        </div>
        <div className={`text-sm font-light text-neutral-500 mt-1`}>
          {subtitle}
        </div>
      </div>
    </div>
  );
};

export default Heading;
