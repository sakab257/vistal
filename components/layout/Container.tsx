interface ContainerProps {
  size?: "large" | "medium" | "small";
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  size = "large",
  children,
  className = "",
}: ContainerProps) {
  const maxWidths = {
    large: "max-w-[82.5rem]",
    medium: "max-w-[64rem]",
    small: "max-w-[54.5rem]",
  };

  return (
    <div className={`w-full ${maxWidths[size]} mx-auto ${className}`}>
      {children}
    </div>
  );
}
