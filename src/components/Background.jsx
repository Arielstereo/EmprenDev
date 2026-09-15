import DarkVeil from "./DarkVeil";

const Background = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 h-screen w-full">
      <DarkVeil />
    </div>
  );
};

export default Background;