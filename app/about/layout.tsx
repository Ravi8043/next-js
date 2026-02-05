export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-black text-white">
      <h1 className="mb-6 text-4xl bg-stone-800">Layout</h1>
      {children}
    </div>
  );
}
