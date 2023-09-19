export default function Button({ text, loading, type }) {
  return (
    <button
      type={type}
      className="flex w-full justify-center rounded-md bg-[#004792] p-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#004792]/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="h-8 w-8 rounded-full border-t-4 border-b-4 border-[#6691be]"></div>
            <div className="absolute top-0 left-0 h-8 w-8 rounded-full border-t-4 border-b-4 border-[#e6edf4] animate-spin"></div>
          </div>
        </div>
      ) : (
        text
      )}
    </button>
  );
}
