import React, { useContext } from 'react';
import { FaGoogle,} from "react-icons/fa";
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
// import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';


const Login = () => {
    const { login,providerLogin,loading } = useContext(AuthContext);
    // const location = useLocation();
    // const navigate = useNavigate();

    // const from = location.state?.from?.pathname || '/';


    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
      
    if(loading) {
        <button type="button" class="bg-indigo-500 ..." disabled>
  <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
  </svg>
  Processing...
</button>
    }
    

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;


                const currentUser = {
                    email: user.email
                }

                console.log(currentUser);

                // get jwt token
                // fetch('https://photography-client-server-naiman00r.vercel.app/jwt', {
                //     method: 'POST',
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(currentUser)
                // })
                    // .then(res => res.json())
                    // .then(data => {
                    //     console.log(data);
                       
                    //     localStorage.setItem('genius-token', data.token);
                    //     navigate(from, { replace: true });
                    // });
                
            })
            .catch(error => console.log(error));
    }
    return (
        
            
            <div className="hero min-h-screen bg-base-200 container mx-auto flex flex-col justify-center md:flex-row my-12 md:my-36">
            
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body pb-0">
                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='text-center'>OR login with</p>
                                
                                <button className="btn btn-outline m-2 " onClick={handleGoogleSignIn}  variant="outline-dark"> <FaGoogle></FaGoogle></button>
                            </div>
                            
                        </form>
                        <p className='text-center'>Need an account?<Link className='text-orange-600 font-bold ' to="/signup">Sign Up</Link> </p>
              </div>
            </div>
            <div class=" flex flex-col lg:w-3/5  w-full lg:-mt-12">
        <div class="container">
          <div class="relative flex flex-col min-w-0 break-words w-full">
            <div class="flex-auto p-5 lg:p-10">
              <img src='https://static.vecteezy.com/system/resources/previews/005/879/539/original/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg' alt=''></img>
            </div>
          </div>
        </div>
      </div>
          </div>
          
          
    
          
        
    );
};

export default Login;