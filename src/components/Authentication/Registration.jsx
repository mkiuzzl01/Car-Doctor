import { Link, useLocation, useNavigate } from "react-router-dom";
import login_image from "../../assets/images/login/login.svg";
import useAuth from "../../utility/useAuth";

const Registration = () => {
  const { createUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegistration = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    const confirmPassword = from.confirm_password.value;
    console.log(name, email, password, confirmPassword);

    if (password === confirmPassword) {
        createUser(email, password)
        .then((result) => {
          console.log(result);
        })
        navigate(location?.state? location.state : '/')
        .catch((error) => {
          console.error(error.message);
        });
    }else{
      alert("Password not match confirm password");
    }
  };
  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left lg:w-1/2">
            <img src={login_image} alt="" />
          </div>
          <div className="card shrink-0 lg:w-1/2 border-2 bg-base-100">
            <form onSubmit={handleRegistration} className="card-body">
              <h1 className="text-3xl font-bold text-center">Sign Up</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
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
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  name="confirm_password"
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
                  value="Sign Up"
                />
                <p className="text-center">
                  If you have an account?{" "}
                  <Link to="/Login" className="text-orange-600">
                    Sign in
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

export default Registration;
