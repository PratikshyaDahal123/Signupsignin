import { Search, User, Heart, ShoppingBag } from "lucide-react";

const Navbar = ({ onSignInClick }) => (
  <div className="flex items-center justify-between px-6 py-4 border-b">
    <div className="text-sm font-semibold">TRADE PROGRAM</div>
    <div className="text-4xl font-serif">Decorish</div>

    <div className="flex items-center gap-6 text-gray-600">
      <div className="flex items-center border-b pb-1">
        <input
          type="text"
          placeholder="Search Decorish"
          className="outline-none text-sm"
        />
        <Search size={18} className="ml-2" />
      </div>
      <User onClick={onSignInClick} className="cursor-pointer" />
      <Heart />
      <ShoppingBag />
    </div>
  </div>
);

export default Navbar;
