import { Link } from "react-router-dom";

const Service_Card = ({ service }) => {
  const { title, img, price,_id } = service;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="p-4">
          <img
            src={img}
            alt={title}
            className="rounded-lg"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-orange-400 font-bold">{price}</p>
          <div className="card-actions justify-end">
            <Link to={`/CheckOut/${_id}`}><button className=" text-orange-300 font-bold"><span>Book Now</span></button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service_Card;
