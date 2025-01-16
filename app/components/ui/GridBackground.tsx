const GridBackground = () => {
  return (
    <div className="hidden md:flex absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#0000ff_1px,transparent_1px),linear-gradient(to_bottom,#0000ff_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-5">
      <div className="absolute inset-0 bg-gray-50 [mask-image:linear-gradient(180deg,rgba(255,255,255,0),white)]"></div>
    </div>
  );
};

export default GridBackground;
