import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { sendEmailVerification } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const { createUser } = useContext(AuthContext);
    // const location = useLocation();
    // const navigate = useNavigate();
    const emailVerify = () => toast("Please Check Your Email");
    // const emailNotVerify = () => toast("Please Check Your Email");
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        setError('');
        setSuccess('');
        if (password.length < 6) {
            setError('Password Must Have Six Character');
            return;
        }
        else if (!/^(?=.*[A-Z]).+$/.test(password)) {
            setError('Password Must have a capital letter');
            return;
        }
        else if (!/[$&+,:;=?@#|'<>.^*()%!-]/.test(password)) {
            setError('Password Must have a special character');
            return;
        }
        // console.log(email, password);
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                setSuccess('You Have Successfully Register Your Account');
                sendEmailVerification(result.user)
                    .then(() => {
                        setSuccess(emailVerify());
                    })
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <div className="container mx-auto pt-20 pb-20">
            <div className="w-full p-4 md:w-1/2 lg:w-1/3 mx-auto">
                <h1 className="text-5xl font-semibold text-center">Register Now</h1>
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <p className="text-center">Already Have An Account! <Link to="/login" className="text-lg font-bold text-blue-500">Login</Link></p>
                </form>
                {
                    error && <p className="text-center text-red-500">{error}</p>
                }
                {
                    success && <p className="text-center text-green-500">{success}</p>
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;