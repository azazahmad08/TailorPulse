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
    <div className="bg-white shadow-md flex flex-row w-full ">
      
      <div className="flex flex-row items-start justify-start  gap-4 mb-3 mt-3 w-1/2">
        <div className="items-center">
          <img src="menu.png" alt="Menu Icon" className="w-5 h-5 ml-5 justify-start" />
        </div>
        <div>
          <h2 className="items-center m-auto">New Order</h2>
        </div>
      </div>

      
     
        <div className=" justify-end  items-end w-1/2">
          {user ? (
            <>
              <div className="flex flex-row justify-end mr-2 mt-1 mb-2"><div
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
              </div></div>
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
