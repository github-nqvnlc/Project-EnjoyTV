import React from "react";
import avarholder from "./../assets/placeholder.jpg";

interface AvatarProps {
  imageUrl?: string;
  altText?: string;
  size?: "small" | "medium" | "large";
}

const Avatar: React.FC<AvatarProps> = ({
  imageUrl,
  altText,
  size = "medium",
}) => {
  let sizeClass = "h-10 w-10"; // Medium size by default

  if (size === "small") {
    sizeClass = "h-6 w-6";
  } else if (size === "large") {
    sizeClass = "h-16 w-16";
  }

  return (
    <img
      src={imageUrl || avarholder}
      alt={altText || "User"}
      className={`rounded-full object-cover ${sizeClass}`}
    />
  );
};

export default Avatar;
