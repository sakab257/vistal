interface SpacerProps {
  desktop?: string;
  tablet?: string;
  mobile?: string;
}

export default function Spacer({
  desktop = "6rem",
  tablet = "4rem",
  mobile = "2rem",
}: SpacerProps) {
  return (
    <div>
      <div className="hidden md:block" style={{ height: desktop }} />
      <div className="hidden sm:block md:hidden" style={{ height: tablet }} />
      <div className="block sm:hidden" style={{ height: mobile }} />
    </div>
  );
}
