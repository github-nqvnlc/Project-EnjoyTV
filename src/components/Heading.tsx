interface HeadingProps {
  title?: string;
  subtitle?: string;
  center?: string;
  color?: string;
}

const Heading: React.FC<HeadingProps> = ({
  title,
  subtitle,
  center,
  color,
}) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div
        className={
          color
            ? `text-2xl font-bold text-[${color}]`
            : "text-2xl font-bold text-slate-200"
        }
      >
        {title}
      </div>
      <div className="text-sm font-light text-neutral-500 mt-2">{subtitle}</div>
    </div>
  );
};

export default Heading;
