import { useQuery } from "@tanstack/react-query";

import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";

const Order = () => {
  const { user, loading } = useAuth();
  const token = localStorage.getItem("access_token");
  const { refetch, data: orders = [] } = useQuery({
    queryKey: ["orders", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `http://16.171.146.50:5000/payments?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      return res.json();
    },
  });

  // console.log(orders)

  // date format
  const formatDate = (createdAt) => {
    const createdAtDate = new Date(createdAt);
    return createdAtDate.toLocaleDateString(); // You can adjust options as needed
  };
  return (
    <div>
         <div className="page-header mb-0">
        <div className="container">
          <div className="row mx-auto text-center justify-center">
            <div className="col-12">
              <h2 className="font-extrabold text-6xl text-green">TRACK YOUR ORDERS </h2>
            </div>
          </div>
        </div>
      </div>
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      {/* table content */}
      <div>
        {
          <div>
            <div>
              <div className="overflow-x-auto">
                <table className="table text-center">
                  {/* head */}
                  <thead className="bg-green text-white rounded-sm">
                    <tr>
                      <th>#</th>
                      <th>Order Date</th>
                      <th>transitionId</th>
                      <th>Price</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{formatDate(item.createdAt)}</td>
                        <td className="font-medium">{item.transitionId}</td>
                        <td>₹{item.price}</td>
                        <td>{item.status}</td>
                        <td>
                        <Link to="https://wa.me/+919697798888" target="_blank" rel="noopener noreferrer">
                          <button className="btn btn-sm border-none text-orange-400 bg-transparent">
                            Contact
                          </button>
                         </Link>
                         
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  {/* foot */}
                </table>
              </div>
            </div>
            <hr />
          </div>
        }
      </div>
    </div>
    </div>
  );
};

export default Order;
