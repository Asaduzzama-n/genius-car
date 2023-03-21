import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/login/login.svg';
import { FcGoogle } from 'react-icons/fc';
import { ImFacebook } from 'react-icons/im';
import { AuthContext } from '../../../Context/AuthProvider';
import { toast } from 'react-hot-toast';
const Login = () => {

    const [error, setError] = useState(null);
    const { userLoginWithEmail, setLoading } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    
    const handleLoginForm = (event) => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;


        userLoginWithEmail(email, password)
            .then(userCredential => {
                const user = userCredential.user;

                const currentUser = { email: user.email }


                if (user.emailVerified) {

                    fetch('http://localhost:5000/jwt', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(currentUser)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            //not the safest way
                            localStorage.setItem("Token", data.token);
                            navigate(from, { replace: true });

                        })
                } else {
                    toast.error("YOUR EMAIL IS NOT VERIFIED! PLEASE VERIFY YOUR EMAIL...");
                }
            })
            .catch(error => {
                setError(error.message);
                console.error(error.message)
            })
            .finally(() => { setLoading(false) })


    }

    return (
        <div>
            {/* min-h-screen */}
            <div className="hero ">
                <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img className='w-3/4' src={logo} alt="" />
                    </div>
                    <form onSubmit={handleLoginForm} className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-5xl text-center font-bold">Login</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" />
                                <label className="label">
                                    <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                                <label className="label">
                                    <p className='text-center text-red-400 text-sm'>{error}</p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="h-12 rounded-md text-white text-xl bg-orange-600 outline-none">Login</button>
                            </div>
                            <div className="mt-6">
                                <p className='text-center text-md'>Or sign Up with</p>
                                <div className="text-center py-4">
                                    <button type='submit' className='bg-base-300 rounded-full p-2 mx-3'><ImFacebook color='blue' size='30'></ImFacebook></button>
                                    <button type='submit' className='bg-base-300 rounded-full p-2 mx-3'><FcGoogle size='30'></FcGoogle></button>
                                </div>
                                <p className='text-center py-2'>Don't have an account? <Link className='text-orange-600 font-bold' to={'/signup'}> Signup</Link></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;