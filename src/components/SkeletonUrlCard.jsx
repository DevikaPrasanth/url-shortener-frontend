function SkeletonUrlCard() {

  return (

    <div className="bg-white/5 border border-white/5 rounded-2xl p-5 animate-pulse">

      <div className="h-4 bg-white/10 rounded w-32 mb-4" />

      <div className="h-5 bg-white/10 rounded w-full mb-3" />

      <div className="h-5 bg-white/10 rounded w-52 mb-5" />

      <div className="flex justify-between items-center">

        <div className="h-8 w-20 bg-white/10 rounded" />

        <div className="flex gap-3">

          <div className="w-10 h-10 bg-white/10 rounded-xl" />

          <div className="w-10 h-10 bg-white/10 rounded-xl" />

          <div className="w-10 h-10 bg-white/10 rounded-xl" />

        </div>

      </div>

    </div>
  );
}

export default SkeletonUrlCard;
