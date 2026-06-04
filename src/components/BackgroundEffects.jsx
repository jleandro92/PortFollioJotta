export default function BackgroundEffects() {
  return (
    <>
      <div className="fixed inset-0 -z-20 bg-slate-950" />

      <div className="fixed inset-0 -z-10 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(#ffffff 1px, transparent 1px),
              linear-gradient(90deg, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="fixed top-0 left-0 w-125 h-125 bg-green-500 rounded-full blur-[180px] opacity-10 -z-10" />

      <div className="fixed bottom-0 right-0 w-125 h-125 bg-green-500 rounded-full blur-[180px] opacity-10 -z-10" />
    </>
  );
}