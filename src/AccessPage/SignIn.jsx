import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import {  useNavigate } from "react-router-dom";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate("/");
      })
      .catch((err) =>
        Swal.fire({
          title: "Error",
          text: `Wrong Password${err.message}`,
          icon: "error",
          confirmButtonText: "OK",
        })
      );

    // update last logged at in the database
  };

  return (
    <div className="flex justify-center items-center h-screen bg-main-bg ">
      <div className="card w-full max-w-sm shadow-2xl bg-white ">
        <form onSubmit={handleSignIn} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-orange-500 w-full text-white text-xl items-center uppercase hover:bg-black">Login</button>
          </div>
          {/* <div className="text-center mt-4">
            <Link to={"/signup"} className="text-sm text-gray-600">
              Need an Account?{" "}
              <span className="text-blue-600 hover:text-yellow-400">
                Register Here
              </span>
            </Link>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default SignIn;
