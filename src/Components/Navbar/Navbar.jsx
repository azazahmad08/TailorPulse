import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => console.log("user logged out"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-white shadow-md flex flex-row  ">
      {/* Order div at the beginning */}
      <div className="flex flex-row items-start justify-start  gap-4 mb-3 mt-3 w-1/2">
        <div className="items-center">
          <img src="menu.png" alt="Menu Icon" className="w-5 h-5 ml-5 justify-start" />
        </div>
        <div>
          <h2 className="items-center m-auto">New Order</h2>
        </div>
      </div>

      
     
        <div className="w-1/2 justify-end items-end ">
          {user ? (
            <>
              <div
                className="relative tooltip tooltip-close tooltip-bottom mr-2 "
                data-tip={user.displayName}
              >
                <img
                  src={user.photoURL}
                  alt="User Profile"
                  className="rounded-full w-10 h-10 cursor-pointer border-2 border-orange-400"
                />
              </div>
              <div className="relative tooltip tooltip-close tooltip-bottom">
                <button
                  onClick={handleLogOut}
                  className="btn btn-md hover:border-2"
                >
                  Sign Out
                </button>
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
