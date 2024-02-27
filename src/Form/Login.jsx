import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const { login } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        // console.log('Form submit', email, password);
        setError('');
        setSuccess('');
        login(email, password)
            .then(result => {
                console.log(result.user);
                if(result.user.emailVerified){
                    setSuccess('You Have Successfully Login Your Account');
                    navigate(location?.state ? location.state : '/');
                }
                else{
                    alert('Verify Your Email');
                    return;
                }
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }
    return (
        <div className="container mx-auto pt-20 pb-20">
            <div className="w-full p-4 md:w-1/2 lg:w-1/3 mx-auto">
                <h1 className="text-5xl font-semibold text-center">Login Your Account</h1>
                <form onSubmit={handleLogin} className="card-body">
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
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <p className="text-center">Do not Have An Account! <Link to="/register" className="text-lg font-bold text-blue-500">Register</Link></p>
                </form>
                {
                    error && <p className="text-center text-red-500">{error}</p>
                }
                {
                    success && <p className="text-center text-green-500">{success}</p>
                }
            </div>
        </div>
    );
};

export default Login;