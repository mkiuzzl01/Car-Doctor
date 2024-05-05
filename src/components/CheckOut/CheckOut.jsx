import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData()

  const handleOrder = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const date = from.date.value;
    const email = from.email.value;
    const amount = from.amount.value;
    const massage = from.massage.value;

    const booking = {customerName:name,date:date,customerEmail:email,amount:amount,customerQuery:massage,serviceName:service.title,serviceId:service._id,image:service.img};
    console.log(booking);

    fetch('http://localhost:5000/Booking',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(booking),
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.insertedId){
        alert('Service is Booked')
        }
      })
  };

  return (
    <div className="p-4">
      <div className="card w-full border-2 bg-base-300">
        <h1 className="text-center text-2xl font-semibold py-4">Books Service : {service?.title}</h1>
        <form onSubmit={handleOrder} className="card-body">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                defaultValue={user?.displayName}
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                defaultValue={user?.email}
                name="email"
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due Amount</span>
              </label>
              <input
                name="amount"
                defaultValue={service.price}
                type="text"
                placeholder="Due Amount"
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
              name="massage"
              cols="30"
              rows="10"
              placeholder="Write Your text"
            ></textarea>
          </div>
          <div className="form-control mt-6">
              <input type="submit" className="btn bg-[#FF3811] text-white" value="Order Confirm" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
