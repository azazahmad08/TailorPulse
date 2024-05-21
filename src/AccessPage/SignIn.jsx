// Icons
import { FcGoogle } from "react-icons/fc";
import { FaSquareGithub } from "react-icons/fa6";
// Packages
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const { signInUser, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);
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
      .catch((err) => Swal.fire({
        title: 'Error',
        text: `Wrong Password${err.message}`,
        icon: 'error',
        confirmButtonText: 'OK'
    }));

    // update last logged at in the database
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  shadow-orange-500">
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
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
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-blue-400">Login</button>
              </div>
              <div>
                <Link to={"/signup"}>
                  <h2 className="text-xl text-center text-black">
                    Need an Account?{" "}
                    <span className="text-blue-600 hover:text-yellow-400">
                      Register Here
                    </span>
                  </h2>
                </Link>
              </div>
            </form>
            <div className="flex flex-row gap-4 m-auto mb-2">
              <div className="flex items-center gap-4 justify-around bg-black rounded-2xl w-40  h-16  ">
                <FcGoogle className="w-12 h-20 ml-3" />
                <button onClick={handleGoogleSignIn} className="text-white uppercase font-semibold  ">
                  Login with Google
                </button>
              </div>
              <div className="flex items-center gap-4 justify-around bg-black rounded-2xl w-40  h-16  ">
              <FaSquareGithub className="w-12 h-20 ml-3 shadow-sm b"  />
                <button onClick={handleGithubSignIn} className="text-white uppercase font-semibold ">
                  Login with Github
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
