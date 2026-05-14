function BackgroundGlow() {

  return (

    <div className="pointer-events-none">

      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-indigo-500 opacity-20 blur-[120px] rounded-full -z-10" />

      <div className="fixed bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500 opacity-20 blur-[120px] rounded-full -z-10" />

    </div>
  );
}

export default BackgroundGlow;