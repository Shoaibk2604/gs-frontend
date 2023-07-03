import React, { useContext } from "react";
import { UserContext } from "../App";

const Table = () => {
  const context = useContext(UserContext);
  return (
    <>
      <table className="border-2">
        <thead className="border-2">
          <tr>
            <th className="border-2 p-3">ID</th>
            <th className="border-2 p-3">Name</th>
            <th className="border-2 p-3">Email</th>
            <th className="border-2 p-3">DOJ</th>
            <th className="border-2 p-3">Address</th>
            <th className="border-2 p-3">Phone</th>
            <th className="border-2 p-3">National ID</th>
            <th className="border-2 p-3">Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr
            onClick={() => context.setActive(!context.active)}
            className="cursor-pointer"
          >
            <td className="border-2 p-3">1</td>
            <td className="border-2 p-3">Anonymous</td>
            <td className="border-2 p-3">XYZ@gmail.com</td>
            <td className="border-2 p-3">Oct-5-20</td>
            <td className="border-2 p-3">20,Udaipur</td>
            <td className="border-2 p-3">9876543210</td>
            <td className="border-2 p-3">POUX-XNXX-JXJK-5555</td>
            <td className="border-2 p-3">
              {context.active ? (
                <button className="btn btn-primary-submit">Active</button>
              ) : (
                <button className="btn btn-primary">Edit</button>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
