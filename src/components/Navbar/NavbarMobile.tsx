import { Link } from "react-router-dom";

const NavbarMobile = ({ open }: any) => {
  return (
    <div>
      {open && (
        <div className="text-center ease-in text-white bg-secondary font-semibold font-mont flex flex-col gap-8 py-8 absolute w-[100vw]">
          <div>
            <ul
              className={`lg:hidden flex flex-col text-2xl justify-evenly gap-8 z-[-1]`}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/bookings">Bookings</Link>
              </li>
              <li>
                <Link to="/rentals">Your Rentals</Link>
              </li>
            </ul>
          </div>
          {/* Account and Logout Info */}
          <div className="lg:hidden flex flex-col text-2xl">
            <img />
            <h6>pistachiocookies</h6>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarMobile;
