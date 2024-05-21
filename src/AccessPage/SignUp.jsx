import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const handleSignUp = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const url = form.url.value;
        const password = form.password.value;

        if (password.length < 6) {
            Swal.fire({
                title: 'Error',
                text: 'Password must be at least 6 characters long.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }
        if (!/[A-Z]/.test(password)) {
            Swal.fire({
                title: 'Error',
                text: 'Password must contain at least one uppercase letter.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }
        if (!/[a-z]/.test(password)) {
            Swal.fire({
                title: 'Error',
                text: 'Password must contain at least one lowercase letter.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }

        try {
            // Create user with email, password, name, and photo URL
            await createUser(email, password, name, url);

            // Show success message
            Swal.fire({
                title: 'Successfully Created Account',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Ok'
            });
        } catch (error) {
            // Handle any errors from createUser
            console.error('Error creating user:', error.message);
            Swal.fire({
                title: 'Error',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    return (
        <div className="hero w-full min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign up now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="url" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                        <div>
                            <Link to={'/signin'}>
                                <h2 className="text-center hover:underline ">
                                    Have an Account? <span className="text-blue-600 font-bold ">Login Here</span>
                                </h2>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
