import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";

const Navbar = ({ toggleTheme, theme }) => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => console.log("user logged out"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-white shadow-md flex flex-row w-full">
      <div className="flex flex-row items-start justify-start ml-5  gap-4 mb-3 mt-3 w-1/2">
        
        <div>
          <label className="input input-bordered flex items-center bg-gray-50 gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
      </div>

      <div className="flex justify-end items-end w-1/2 items-center gap-5 relative">
        <label className="swap swap-rotate relative">
          <input
            type="checkbox"
            className="theme-controller"
            value={theme}
            onChange={toggleTheme}
          />
          {/* Sun icon SVG */}
          <svg
            className="swap-off fill-current w-10 h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 2c0-.552-.448-1-1-1s-1 .448-1 1c0 .551.448 1 1 1s1-.449 1-1zm0 20c-5.522 0-10-4.477-10-10s4.478-10 10-10 10 4.477 10 10-4.478 10-10 10zm0-17c-4.963 0-9 4.036-9 9s4.037 9 9 9 9-4.036 9-9-4.037-9-9-9z" />
          </svg>
          {/* Moon icon SVG */}
          <svg
            className="swap-on fill-current w-10 h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M9.217 2.949c-.276-.187-.642-.141-.875.118-.229.256-.256.619-.062.896.117.145.273.236.447.265.276.034.534-.143.624-.411.183-.536.854-.797 1.399-.614.283.092.488.342.488.64 0 .276-.169.524-.426.621-.258.095-.534-.04-.651-.276-.109-.206-.045-.471.145-.623.305-.286.364-.691.145-1.024zm4.035 1.82c-.276-.187-.642-.14-.875.119-.23.256-.256.619-.063.896.117.146.273.236.446.265.276.035.534-.143.625-.41.183-.536.853-.798 1.399-.614.283.092.488.343.488.64 0 .276-.169.524-.426.621-.258.095-.534-.041-.651-.276-.11-.206-.045-.471.145-.623.306-.286.364-.691.146-1.024zm7.084 3.91c-.16-.09-.364-.056-.502.075-.147.136-.176.346-.075.504.44.688.302 1.625-.354 2.194-.687.57-1.614.793-2.504.543-.192-.063-.41.009-.542.163-.139.159-.158.404-.043.589.116.175.33.254.531.194.93-.305 1.726-.976 2.135-1.898.191-.44.016-.962-.388-1.166zM4.674 9.54c-.16-.09-.364-.056-.503.075-.146.136-.176.346-.075.504.44.688.302 1.625-.354 2.194-.688.57-1.615.793-2.505.543-.192-.062-.41.009-.542.162-.14.16-.158.405-.044.589.117.176.331.255.531.194.93-.306 1.726-.976 2.135-1.899.19-.439.015-.961-.387-1.165zM12 21c-.117 0-.235-.021-.35-.063-.39-.152-.644-.524-.644-.936 0-.553.448-1 1-1 .117 0 .234.021.349.063.39.152.645.524.645.936 0 .553-.447 1-1 1z" />
          </svg>
        </label>
        {user ? (
          <>
            <div className="flex flex-row justify-end mr-2 mt-1 mb-2">
              <div
                className="relative tooltip tooltip-close tooltip-bottom mr-2  "
                data-tip={user.displayName}
              >
                <img
                  src={user.photoURL}
                  alt="User Profile"
                  className="rounded-full  w-10 h-10 cursor-pointer border-2 border-orange-400 justify-center items-center mt-1"
                />
              </div>
              <div className="relative tooltip tooltip-close tooltip-bottom ">
                <button
                  onClick={handleLogOut}
                  className="btn bg-orange-400 btn-md hover:border-2 hover:bg-gray-800 hover:text-white"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </>
        ) : (
          <Link to="/signin" className="btn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
