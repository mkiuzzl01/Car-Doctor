import { Link, useLocation, useNavigate } from "react-router-dom";
import login_image from "../../assets/images/login/login.svg";
import useAuth from "../../utility/useAuth";
// import axios from "axios";

const Login = () => {
  const { loginUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const password = form.password.value;
    const email = form.email.value;

    loginUser(email,password)
    .then(()=>
    {
      // const user = {email};
      // axios.post('http://localhost:5000/jwt',user,{withCredentials:true})
      // .then(res=>{
      //   console.log(res.data);
      //   if(res.data.success){
      //   }
      // })
      navigate(location?.state? location.state : '/')
    }
    )
    .catch(error=>{
      console.error(error.message);
    })
    
  };
  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left lg:w-1/2 lg:me-12">
            <img src={login_image} alt="" />
          </div>
          <div className="card shrink-0 lg:w-1/2 border-2 bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <h1 className="text-3xl font-bold text-center">Sign In</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6 space-y-4">
                <input
                  type="submit"
                  className="btn bg-orange-500 text-white"
                  value="Sign In"
                />
                <p className="text-center">
                  If you have not account?{" "}
                  <Link to="/Registration" className="text-orange-600">
                    Registration
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
