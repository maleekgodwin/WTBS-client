export default function Logo() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <div className="h-12 w-12 rounded-full border-t-4 border-b-[12px] border-[#99b5d3]"></div>
        <div className="absolute top-0 left-0 h-12 w-12 rounded-full border-t-8 border-b-8 border-[#004792] rotate-45"></div>
      </div>
    </div>
  );
}
