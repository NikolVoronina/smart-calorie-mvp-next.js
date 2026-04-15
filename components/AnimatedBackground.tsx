export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
      <div className="relative h-[600px] w-[800px]">

        <div
          className="absolute left-[100px] top-[-80px] h-[300px] w-[300px] rounded-full bg-lime-300/25 blur-[70px]"
          style={{ animation: "float-slow 7s ease-in-out infinite" }}
        />

                <div
          className="absolute left-[280px] top-[40px] h-[300px] w-[300px] rounded-full bg-white/10 blur-[80px]"
          style={{ animation: "float-slow 10s ease-in-out infinite" }}
        />

                <div
          className="absolute left-[480px] top-[390px] h-[300px] w-[300px] rounded-full bg-lime-300/25 blur-[80px]"
          style={{ animation: "float-slow 12s ease-in-out infinite" }}
        />

        <div
          className="absolute right-[-80px] top-[100px] h-[260px] w-[260px] rounded-full bg-emerald-300/25 blur-[60px]"
          style={{ animation: "float-medium 7s ease-in-out infinite" }}
        />

        <div
          className="absolute bottom-[-120px] left-[20%] h-[340px] w-[340px] rounded-full bg-fuchsia-300/25 blur-[80px]"
          style={{ animation: "float-slow 5s ease-in-out infinite" }}
        />

        <div
          className="absolute bottom-[-120px] left-[20%] h-[340px] w-[340px] rounded-full bg-fuchsia-300/25 blur-[80px]"
          style={{ animation: "float-slow 12s ease-in-out infinite" }}
        />

        <div
          className="absolute bottom-[-320px] left-[60%] h-[340px] w-[340px] rounded-full bg-emerald-300/25 blur-[80px]"
          style={{ animation: "float-slow 12s ease-in-out infinite" }}
        />

        <div
          className="absolute bottom-[10%] right-[10%] h-[220px] w-[220px] rounded-full bg-white/10 blur-[30px]"
          style={{ animation: "float-fast 5s ease-in-out infinite" }}
        />
      </div>




    </div>
  );
}