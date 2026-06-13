type EyebrowProps = {
  children: string;
};

export function Eyebrow({ children }: EyebrowProps) {
  return (
    <p className="mb-5 text-xs font-bold uppercase text-accent-red">
      {children}
    </p>
  );
}
