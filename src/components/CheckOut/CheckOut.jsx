import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();

  return (
    <div className="p-4">
      <div className="card w-full border-2 bg-base-300">
        <form className="card-body">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
          </div>
          <div>
            <textarea
              className="input-bordered w-full textarea"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Write Your text"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#FF3811] text-white">
              Order Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
