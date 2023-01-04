import { CheckIn } from "./CheckIn";
import { CheckOut } from "./CheckOut";
import { AdultsDropdown } from "./AdultsDropdown";
import { KidsDropdown } from "./KidsDropdown";

export function BookForm() {
  return (
    <form action="" className=" h-[300px] w-full lg:h-[70px]">
      <div className="flex flex-col w-full h-full lg:flex-row">
        <div className="flex-1 border-r">
          <CheckIn />
        </div>
        <div className="flex-1 border-r">
          <CheckOut />
        </div>
        <div className="flex-1 border-r">
          <AdultsDropdown />
        </div>
        <div className="flex-1 border-r">
          <KidsDropdown />
        </div>
        <div>
          <button className="flex-1 h-[55px] lg:h-[70px] text-xl text-center block font-semibold hover:text-black hover:bg-[#f3d4ad] text-white bg-[#a37b49] w-full lg:min-w-[220px]  lg:mt-0  lg:max-w-[250px] mx-auto ">
            Check Now
          </button>
        </div>
      </div>
    </form>
  );
}
