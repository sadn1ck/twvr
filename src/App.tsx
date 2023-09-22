import { cn } from "@lib/utils";
import viteSvg from "@src/assets/vite.svg";

function App() {
  return (
    <>
      <main
        className={cn(
          "w-screen h-screen",
          "flex flex-col justify-center items-center gap-4"
        )}
      >
        <img
          src={viteSvg}
          alt="vite icon"
          className="w-32 h-32 animate-bounce"
        ></img>
        <h1 className="text-2xl text-center font-bold">
          twvr - a vite/react/tailwind template
        </h1>
        <code className="text-lg text-center">src/App.tsx to edit</code>
      </main>
    </>
  );
}

export default App;
