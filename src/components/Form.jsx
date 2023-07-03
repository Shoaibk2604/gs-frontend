import React, { useContext } from "react";
import { UserContext } from "../App";

const Form = () => {
  const context = useContext(UserContext);

  return (
    <>
      <div>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 " >
          <label 
            htmlFor="id"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ID :-
            <input disabled={!context.active}  
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:outline-none"
            />
          </label>
          <label
            htmlFor="Name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name :-{" "}
            <input disabled={!context.active}  
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            E-mail :-{" "}
            <input disabled={!context.active}  
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              id="email"
            />
          </label>
          <label
            htmlFor="doj"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            D.O.J. :-
            <input disabled={!context.active}  
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="doj"
              id="doj"
            />
          </label>
          <label
            htmlFor="address"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Address:-{" "}
            <input disabled={!context.active}  
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="address"
              id="address"
            />
          </label>
          <label
            htmlFor="phone"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Phone :-{" "}
            <input disabled={!context.active}  
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="phone"
              id="phone"
            />
          </label>
          <label
            htmlFor="NationalId"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            National-Id :-{" "}
            <input disabled={!context.active}  
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="NationalId"
              id="NationalId"
            />
          </label>
          <div className="grid grid-cols-2 gap-36">
            <button disabled={!context.active} className={context.active?"btn btn-primary-submit ":"btn btn-primary-disabled "}  >Submit</button>
            <button disabled={!context.active} className={context.active?"btn btn-primary-dlt ":"btn btn-primary-disabled "}  >Remove</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
