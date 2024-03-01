import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

const Navbar = () => {
  const { userId } = auth();
  return (
    <div>
      <nav className="bg-white border-gray-200 ">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center max-sm:text-sm text-xl whitespace-nowrap text-primary font-normal p-regular-24 ">
              ROMMIECONNECTS
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-2">
            {!userId && (
              <Link href="/sign-in">
                <button
                  type="button"
                  className="text-primary capitalize focus:outline-none  font-medium rounded-lg px-4 py-2 text-center  p-medium-14 "
                >
                  Log In
                </button>
                <Button className="cursor-pointer inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-white bg-primary max-sm:text-xs">
                  Join Now
                </Button>
              </Link>
            )}
            {userId && (
              <span>
                <UserButton afterSignOutUrl="/" />
              </span>
            )}
          </div>

          <div
            className="items-center justify-between hidden w-full lg:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 md:p-0 text-black  rounded md:bg-transparent hover:text-primary p-bold-20"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded  hover:text-primary p-bold-20    "
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded  hover:text-primary p-bold-20"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded  hover:text-primary p-bold-20"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded  hover:text-primary p-bold-20"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded  hover:text-primary p-bold-20"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded  hover:text-primary p-bold-20"
                >
                  Footer
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <header className="bg-white">
        <nav className="flex justify-between items-center w-[92%]  mx-auto">
          <div>
            <img
              className="w-16 cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png"
              alt="..."
            />
          </div>
          <div className="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li>
                <a className="hover:text-gray-500" href="#">
                  Products
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  Solution
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  Resource
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
.;                  Developers
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
              Sign in
            </button>
            icon
          </div>
        </nav>
      </header> */}
    </div>
  );
};

export default Navbar;
