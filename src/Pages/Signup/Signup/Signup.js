import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/login/login.svg';
import { FcGoogle } from 'react-icons/fc';
import { ImFacebook } from 'react-icons/im';
import { AuthContext } from '../../../Context/AuthProvider';
const Signup = () => {

    const {createUserWithEmail,updateUserProfile,verifyUser} = useContext(AuthContext);


    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;

        const name =  form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUserWithEmail(email,password)
        .then(userCredential => {
            const user = userCredential.user;
            form.reset();
            handleUpdateProfile(name);
            handleUserVerify();
            
            console.log(user);
        } )
        .catch(err => console.error(err.message))
    }

    const handleUserVerify = () =>{
        verifyUser()
    }

    const handleUpdateProfile = (name) =>{
        updateUserProfile({displayName: name})
        .then(() => {console.log("PROFILE UPDATED!!")})
        .then(error => {console.error(error.message)})
    } 

    return (
        <div>
            {/* min-h-screen */}
            <div className="hero ">
                <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img className='w-3/4' src={logo} alt="" />
                    </div>
                    <form onSubmit={handleSignIn} className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name='name' className="input input-bordered" />
                            </div>
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
                                <p className='text-center py-2'>Already have an account? <Link className='text-orange-600 font-bold' to={'/login'}> Login</Link></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;