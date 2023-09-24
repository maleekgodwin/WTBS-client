export function loadPage(value) {
  if (value === true) {
    document.querySelector("#page-loader").style.display = "grid";
  } else if (value === false) {
    document.querySelector("#page-loader").style.display = "none";
  }
  //   console.log(document.querySelector("#page-loader"));
}
export default function PageLoader() {
  return (
    <div
      id="page-loader"
      className="hidden fixed h-full w-full bg-white/10 backdrop-blur-sm place-items-center"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <div className="h-14 w-14 rounded-full border-t-8 border-b-8 border-[#99b5d3]"></div>
          <div className="absolute top-0 left-0 h-14 w-14 rounded-full border-t-8 border-b-8 border-[#004792] animate-[spin_1s_linear_infinite]"></div>
        </div>
      </div>
    </div>
  );
}
