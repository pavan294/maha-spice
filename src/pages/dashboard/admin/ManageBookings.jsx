import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { GiConfirmed } from "react-icons/gi";
import Swal from "sweetalert2";

const ManageBookings = () => {
  const { user, loading } = useAuth();
  const token = localStorage.getItem("access_token");
  const axiosSecure = useAxiosSecure();
  
  // Fetching orders
  const { refetch, data: orders = [] } = useQuery({
    queryKey: ["orders", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        'http://16.171.146.50:5000/payments/all',
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      return res.json();
    },
  });

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = orders.slice(indexOfFirstItem, indexOfLastItem);
  
  // Confirm order
  const confirmOrder = async (item) => {
    await axiosSecure.patch(`/payments/${item._id}`)
      .then(res => {
        console.log(res.data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Order Confirmed Now!",
          showConfirmButton: false,
          timer: 1500
        });
        refetch();
      });
  }

  return (
    <div className="w-full md:w-[870px] mx-auto px-4 ">
      <h2 className="text-2xl font-semibold my-4">
        Manage All <span className="text-green">Bookings!</span>
      </h2>
      
      <div className="overflow-x-auto lg:overflow-x-visible">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Transition Id</th>
              <th>Price</th>
              {/* <th>Menu Items</th>  */}
              <th>No of Items</th> 
              <th>Items Name</th>
              {/* <th>Cart Items</th>  */}
              <th>Status</th>
              <th>Confirm Order</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.email}</td>
                <td>{item.transitionId}</td>
                <td>₹{item.price}</td>

                {/* <td>
                  {item.menuItems.map((itemName, index) => (
                    <div key={index}>{itemName}</div>
                  ))}
                </td> */}
                <td>{item.quantity}</td>
                <td className="min-w-[200px] font-bold ">
  {item.itemsName.map((itemName, index) => `${index + 1}. ${itemName}`).join(', ')}
</td>

                {/* <td>{item.cartItems}</td> */}
                <td>{item.status}</td>
                <td className="text-center text-Green font-bold">
                  {item.status === "confirmed" ? "Done" :  
                    <button
                      className="btn bg-green text-white btn-xs text-center"
                      onClick={() => confirmOrder(item)}
                    >
                      <GiConfirmed />
                    </button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="flex justify-center my-4">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="btn btn-sm mr-2 btn-warning"
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={indexOfLastItem >= orders.length}
          className="btn btn-sm bg-green text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ManageBookings;
