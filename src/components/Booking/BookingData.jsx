const BookingData = ({ book, idx, handleDelete,handleBookingConfirm}) => {
  const {
    _id,
    image,
    customerName,
    customerEmail,
    serviceName,
    serviceId,
    date,
    status
  } = book;
  return (
    <tr key={_id}>
      <th>
        <button onClick={()=>handleDelete(_id)} className="btn btn-sm btn-circle btn-outline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>{idx + 1}</td>
      <td>
        <div className="avatar">
          <div className="mask w-12 h-12">
            <img src={image} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>{customerName}</td>
      <td>{customerEmail}</td>
      <td>{serviceName}</td>
      <td>{serviceId}</td>
      <td>{date}</td>
      <th>
        {status === 'confirm' ? <span className="text-blue-400 font-bold">Confirmed</span> 
        :<button onClick={()=>handleBookingConfirm(_id)} className="btn btn-sm">Please Confirm</button>
        }
      </th>
    </tr>
  );
};

export default BookingData;
