"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function lineAccount() {
  const [lineAccount, setLineAccount] = useState([]);

  const fetchLineAccount = async () => {
    try {
      const response = await axios.get(`/api/lineAccount`);
      //const response = await axios.get(``);
      setLineAccount(response.data);
      // console.log(lineAccount)
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchLineAccount();
  }, []);
  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Display Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Alias Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Image
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {lineAccount.map((lineAccount: any) => (
            <tr key={lineAccount.LineRowId}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  {lineAccount.LineAccountName}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  {lineAccount.LineAccountAlias}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <div className="text-sm font-medium text-gray-900 ">
                      <img width="100px" src={lineAccount.LineAccountImg}></img>
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <Link
                  className="text-indigo-600 hover:text-indigo-900 mr-4"
                  href={``}
                >
                  Edit
                </Link>
                <button className="text-red-600 hover:text-red-900">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
