function AdBoard() {
  return (
    <div className="mt-30 flex gap-8 md:flex-row flex-col items-center min-h-10s0 justify-between rounded-lg p-8 bg-gradient-to-r from-[#F97316] to-amber-700 shadow-lg">
      <div className=" text-center">
        <h2 className="text-3xl font-bold text-white mb-2 tracking-wider lg:text-5xl">
          Get Footwears at an Exclusive Price!
        </h2>
        <p className="text-white mb-4 lg:text-2xl">
          Step up your style with our exclusive deals on the latest shoes and
          crocs. Don't miss out on comfort and fashion at unbeatable prices.
          Limited time offer!
        </p>
        <button className="bg-white text-amber-700 font-semibold px-6 py-2 rounded hover:bg-amber-100 transition">
          Explore
        </button>
      </div>
    </div>
  );
}

export default AdBoard;
