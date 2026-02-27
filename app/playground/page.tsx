function page() {
  return (
    <div className="flex items-center justify-center gap-5 p-10">
        {/* Buttons */}
        <div className="h-fit w-full border-2 border-black border-dashed p-5 rounded-md flex-col">
            <h1 className="text-3xl font-bold">Buttons</h1>
            <h2 className="mt-3 font-semibold text-neutral-600">Basic Tailwind CSS Buttons</h2>
            <div className="flex flex-wrap gap-4 mt-3">
                <button className="bg-black text-white px-3 py-1 rounded cursor-pointer hover:opacity-85">
                    Basic
                </button>
                <button className="bg-pink-700 text-white px-3 py-1 rounded
                cursor-pointer duration-300 hover:-translate-y-1">
                    Lift Up
                </button>
                <button className="bg-purple-800 text-white px-3 py-1 rounded
                cursor-pointer duration-300 hover:-translate-y-1 hover:shadow-[0_5px_10px_2px_gray]">
                    Lift Up Shadow
                </button>
                <button className="px-3 py-1 rounded               cursor-pointer duration-300 border-2 border-black bg-yellow-600 text-white font-semibold hover:bg-blue-700">
                    Inversion
                </button>
                <button className="font-semibold underline-offset-5 underline cursor-pointer">
                    Underline Button
                </button>
                <button className="font-semibold underline-offset-5 hover:underline duration-300 cursor-pointer">
                    Hover Underline Button
                </button>
                <button className="bg-yellow-400 px-3 font-semibold shadow-[0_0_0px_5px_black] cursor-pointer hover:opacity-90">
                    Sharp Shadow
                </button>
                <button className="bg-yellow-400 px-3 font-semibold shadow-[5px_5px_0px_1px_black] cursor-pointer hover:opacity-90">
                    Angle Shadow
                </button>
            </div>
        </div>
    </div>
  )
}

export default page