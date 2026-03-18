interface TagProps {
  children: string;
  variant?: "base" | "secondary";
}

export default function Tag({ children, variant = "base" }: TagProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 ${
        variant === "secondary"
          ? "text-white"
          : ""
      }`}
    >
      <div
        className={`w-[6px] h-[6px] rounded-full ${
          variant === "secondary" ? "bg-white" : "bg-brand-black"
        }`}
      />
      <span className="text-sm font-semibold uppercase tracking-[0.02em]">
        {children}
      </span>
    </div>
  );
}
