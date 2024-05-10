"use client";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

type Props = {};

export default function dashboard({}: Props) {
  const [message, setMessage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenPending, setIsModalOpenPending] = useState(false);
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
  const handleButtonClick = async () => {
    const response = await axios.post(`/api/linenotify`);

    setMessage("Button was clicked!");
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModalPending = () => {
    setIsModalOpenPending(true);
  };

  const closeModalPending = () => {
    setIsModalOpenPending(false);
  };

  return (
    <div className="flex-1 p-6">
      <div className="grid grid-cols-6 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-bold mb-2">รายการใหม่</h3>
          <div className="grid grid-cols-2 gap-6">
            <p className="text-4xl font-bold">7</p>

            <button className="btn" onClick={openModal}>
              detail
            </button>
          </div>
          {isModalOpen && (
            <div className="modal modal-open">
              <div className="modal-box w-11/12 max-w-5xl">
                <div className="overflow-x-auto">
                  <table className="table table-xs">
                    <thead>
                      <tr>
                        <th></th>
                        <th>ผู้รับงาน</th>
                        <th>แผนกที่สั่ง</th>
                        <th>รายการบริการ</th>
                        <th>แผนกที่จัดส่ง</th>
                        <th>ชื่อปู้ป่วย</th>
                        <th>Date-Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Littel, Schaden and Vandervort</td>
                        <td>Canada</td>
                        <td>12/16/2020</td>
                        <td>Blue</td>
                      </tr>
                      <tr>
                        <th>2</th>
                        <td>Hart Hagerty</td>
                        <td>Desktop Support Technician</td>
                        <td>Zemlak, Daniel and Leannon</td>
                        <td>United States</td>
                        <td>12/5/2020</td>
                        <td>Purple</td>
                      </tr>
                      <tr>
                        <th>3</th>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>
                        <td>Carroll Group</td>
                        <td>China</td>
                        <td>8/15/2020</td>
                        <td>Red</td>
                      </tr>
                      <tr>
                        <th>4</th>
                        <td>Marjy Ferencz</td>
                        <td>Office Assistant I</td>
                        <td>Rowe-Schoen</td>
                        <td>Russia</td>
                        <td>3/25/2021</td>
                        <td>Crimson</td>
                      </tr>
                      <tr>
                        <th>5</th>
                        <td>Yancy Tear</td>
                        <td>Community Outreach Specialist</td>
                        <td>Wyman-Ledner</td>
                        <td>Brazil</td>
                        <td>5/22/2020</td>
                        <td>Indigo</td>
                      </tr>
                      <tr>
                        <th>6</th>
                        <td>Irma Vasilik</td>
                        <td>Editor</td>
                        <td>Wiza, Bins and Emard</td>
                        <td>Venezuela</td>
                        <td>12/8/2020</td>
                        <td>Purple</td>
                      </tr>
                      <tr>
                        <th>7</th>
                        <td>Meghann Durtnal</td>
                        <td>Staff Accountant IV</td>
                        <td>Schuster-Schimmel</td>
                        <td>Philippines</td>
                        <td>2/17/2021</td>
                        <td>Yellow</td>
                      </tr>
                      <tr>
                        <th>8</th>
                        <td>Sammy Seston</td>
                        <td>Accountant I</td>
                        <td>O'Hara, Welch and Keebler</td>
                        <td>Indonesia</td>
                        <td>5/23/2020</td>
                        <td>Crimson</td>
                      </tr>
                      <tr>
                        <th>9</th>
                        <td>Lesya Tinham</td>
                        <td>Safety Technician IV</td>
                        <td>Turner-Kuhlman</td>
                        <td>Philippines</td>
                        <td>2/21/2021</td>
                        <td>Maroon</td>
                      </tr>
                      <tr>
                        <th>10</th>
                        <td>Zaneta Tewkesbury</td>
                        <td>VP Marketing</td>
                        <td>Sauer LLC</td>
                        <td>Chad</td>
                        <td>6/23/2020</td>
                        <td>Green</td>
                      </tr>
                      <tr>
                        <th>11</th>
                        <td>Andy Tipple</td>
                        <td>Librarian</td>
                        <td>Hilpert Group</td>
                        <td>Poland</td>
                        <td>7/9/2020</td>
                        <td>Indigo</td>
                      </tr>
                      <tr>
                        <th>12</th>
                        <td>Sophi Biles</td>
                        <td>Recruiting Manager</td>
                        <td>Gutmann Inc</td>
                        <td>Indonesia</td>
                        <td>2/12/2021</td>
                        <td>Maroon</td>
                      </tr>
                      <tr>
                        <th>13</th>
                        <td>Florida Garces</td>
                        <td>Web Developer IV</td>
                        <td>Gaylord, Pacocha and Baumbach</td>
                        <td>Poland</td>
                        <td>5/31/2020</td>
                        <td>Purple</td>
                      </tr>
                      <tr>
                        <th>14</th>
                        <td>Maribeth Popping</td>
                        <td>Analyst Programmer</td>
                        <td>Deckow-Pouros</td>
                        <td>Portugal</td>
                        <td>4/27/2021</td>
                        <td>Aquamarine</td>
                      </tr>
                      <tr>
                        <th>15</th>
                        <td>Moritz Dryburgh</td>
                        <td>Dental Hygienist</td>
                        <td>Schiller, Cole and Hackett</td>
                        <td>Sri Lanka</td>
                        <td>8/8/2020</td>
                        <td>Crimson</td>
                      </tr>
                      <tr>
                        <th>16</th>
                        <td>Reid Semiras</td>
                        <td>Teacher</td>
                        <td>Sporer, Sipes and Rogahn</td>
                        <td>Poland</td>
                        <td>7/30/2020</td>
                        <td>Green</td>
                      </tr>
                      <tr>
                        <th>17</th>
                        <td>Alec Lethby</td>
                        <td>Teacher</td>
                        <td>Reichel, Glover and Hamill</td>
                        <td>China</td>
                        <td>2/28/2021</td>
                        <td>Khaki</td>
                      </tr>
                      <tr>
                        <th>18</th>
                        <td>Aland Wilber</td>
                        <td>Quality Control Specialist</td>
                        <td>Kshlerin, Rogahn and Swaniawski</td>
                        <td>Czech Republic</td>
                        <td>9/29/2020</td>
                        <td>Purple</td>
                      </tr>
                      <tr>
                        <th>19</th>
                        <td>Teddie Duerden</td>
                        <td>Staff Accountant III</td>
                        <td>Pouros, Ullrich and Windler</td>
                        <td>France</td>
                        <td>10/27/2020</td>
                        <td>Aquamarine</td>
                      </tr>
                      <tr>
                        <th>20</th>
                        <td>Lorelei Blackstone</td>
                        <td>Data Coordiator</td>
                        <td>Witting, Kutch and Greenfelder</td>
                        <td>Kazakhstan</td>
                        <td>6/3/2020</td>
                        <td>Red</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="modal-action">
                  <button className="btn" onClick={closeModal}>
                    close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-bold mb-2">กำลังดำเนินการ</h3>
          <div className="grid grid-cols-2 gap-6">
            <p className="text-4xl font-bold">14</p>
            <button className="btn" onClick={openModalPending}>
              detail
            </button>
          </div>
          {isModalOpenPending && (
            <div className="modal modal-open">
              <div className="modal-box w-11/12 max-w-5xl">
                <div className="overflow-x-auto">
                  <table className="table table-xs">
                    <thead>
                      <tr>
                        <th></th>
                        <th>ผู้รับงาน</th>
                        <th>แผนกที่สั่ง</th>
                        <th>รายการบริการ</th>
                        <th>แผนกที่จัดส่ง</th>
                        <th>ชื่อปู้ป่วย</th>
                        <th>Date-Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Littel, Schaden and Vandervort</td>
                        <td>Canada</td>
                        <td>12/16/2020</td>
                        <td>Blue</td>
                      </tr>
                      <tr>
                        <th>2</th>
                        <td>Hart Hagerty</td>
                        <td>Desktop Support Technician</td>
                        <td>Zemlak, Daniel and Leannon</td>
                        <td>United States</td>
                        <td>12/5/2020</td>
                        <td>Purple</td>
                      </tr>
                      <tr>
                        <th>3</th>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>
                        <td>Carroll Group</td>
                        <td>China</td>
                        <td>8/15/2020</td>
                        <td>Red</td>
                      </tr>
                      <tr>
                        <th>4</th>
                        <td>Marjy Ferencz</td>
                        <td>Office Assistant I</td>
                        <td>Rowe-Schoen</td>
                        <td>Russia</td>
                        <td>3/25/2021</td>
                        <td>Crimson</td>
                      </tr>
                      <tr>
                        <th>5</th>
                        <td>Yancy Tear</td>
                        <td>Community Outreach Specialist</td>
                        <td>Wyman-Ledner</td>
                        <td>Brazil</td>
                        <td>5/22/2020</td>
                        <td>Indigo</td>
                      </tr>
                      <tr>
                        <th>6</th>
                        <td>Irma Vasilik</td>
                        <td>Editor</td>
                        <td>Wiza, Bins and Emard</td>
                        <td>Venezuela</td>
                        <td>12/8/2020</td>
                        <td>Purple</td>
                      </tr>
                      <tr>
                        <th>7</th>
                        <td>Meghann Durtnal</td>
                        <td>Staff Accountant IV</td>
                        <td>Schuster-Schimmel</td>
                        <td>Philippines</td>
                        <td>2/17/2021</td>
                        <td>Yellow</td>
                      </tr>
                      <tr>
                        <th>8</th>
                        <td>Sammy Seston</td>
                        <td>Accountant I</td>
                        <td>O'Hara, Welch and Keebler</td>
                        <td>Indonesia</td>
                        <td>5/23/2020</td>
                        <td>Crimson</td>
                      </tr>
                      <tr>
                        <th>9</th>
                        <td>Lesya Tinham</td>
                        <td>Safety Technician IV</td>
                        <td>Turner-Kuhlman</td>
                        <td>Philippines</td>
                        <td>2/21/2021</td>
                        <td>Maroon</td>
                      </tr>
                      <tr>
                        <th>10</th>
                        <td>Zaneta Tewkesbury</td>
                        <td>VP Marketing</td>
                        <td>Sauer LLC</td>
                        <td>Chad</td>
                        <td>6/23/2020</td>
                        <td>Green</td>
                      </tr>
                      <tr>
                        <th>11</th>
                        <td>Andy Tipple</td>
                        <td>Librarian</td>
                        <td>Hilpert Group</td>
                        <td>Poland</td>
                        <td>7/9/2020</td>
                        <td>Indigo</td>
                      </tr>
                      <tr>
                        <th>12</th>
                        <td>Sophi Biles</td>
                        <td>Recruiting Manager</td>
                        <td>Gutmann Inc</td>
                        <td>Indonesia</td>
                        <td>2/12/2021</td>
                        <td>Maroon</td>
                      </tr>
                      <tr>
                        <th>13</th>
                        <td>Florida Garces</td>
                        <td>Web Developer IV</td>
                        <td>Gaylord, Pacocha and Baumbach</td>
                        <td>Poland</td>
                        <td>5/31/2020</td>
                        <td>Purple</td>
                      </tr>
                      <tr>
                        <th>14</th>
                        <td>Maribeth Popping</td>
                        <td>Analyst Programmer</td>
                        <td>Deckow-Pouros</td>
                        <td>Portugal</td>
                        <td>4/27/2021</td>
                        <td>Aquamarine</td>
                      </tr>
                      <tr>
                        <th>15</th>
                        <td>Moritz Dryburgh</td>
                        <td>Dental Hygienist</td>
                        <td>Schiller, Cole and Hackett</td>
                        <td>Sri Lanka</td>
                        <td>8/8/2020</td>
                        <td>Crimson</td>
                      </tr>
                      <tr>
                        <th>16</th>
                        <td>Reid Semiras</td>
                        <td>Teacher</td>
                        <td>Sporer, Sipes and Rogahn</td>
                        <td>Poland</td>
                        <td>7/30/2020</td>
                        <td>Green</td>
                      </tr>
                      <tr>
                        <th>17</th>
                        <td>Alec Lethby</td>
                        <td>Teacher</td>
                        <td>Reichel, Glover and Hamill</td>
                        <td>China</td>
                        <td>2/28/2021</td>
                        <td>Khaki</td>
                      </tr>
                      <tr>
                        <th>18</th>
                        <td>Aland Wilber</td>
                        <td>Quality Control Specialist</td>
                        <td>Kshlerin, Rogahn and Swaniawski</td>
                        <td>Czech Republic</td>
                        <td>9/29/2020</td>
                        <td>Purple</td>
                      </tr>
                      <tr>
                        <th>19</th>
                        <td>Teddie Duerden</td>
                        <td>Staff Accountant III</td>
                        <td>Pouros, Ullrich and Windler</td>
                        <td>France</td>
                        <td>10/27/2020</td>
                        <td>Aquamarine</td>
                      </tr>
                      <tr>
                        <th>20</th>
                        <td>Lorelei Blackstone</td>
                        <td>Data Coordiator</td>
                        <td>Witting, Kutch and Greenfelder</td>
                        <td>Kazakhstan</td>
                        <td>6/3/2020</td>
                        <td>Red</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="modal-action">
                  <button className="btn" onClick={closeModalPending}>
                    close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-bold mb-2">สำเร็จ</h3>
          <p className="text-4xl font-bold">300</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-bold mb-2">รายการทั้งหมด/วัน</h3>
          <p className="text-4xl font-bold">321 </p>
        </div>
        <div></div>
        <div>
          <button
            className="btn  bg-[#41C2EC] text-[#f1f5f9] hover:bg-[#f1f5f9] hover:text-[#41C2EC] text-2xl font-bold"
            onClick={handleButtonClick}
          >
            Request MG
          </button>
        </div>
      </div>

      <div className="grid grid-cols-[70%_30%] h-screen md:h-[75vh]  justify-center gap-6 mt-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">งานที่ยังไม่ได้มอบหมาย</h2>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>หมายเลขงาน</th>

                  <th>แผนกที่สั่ง</th>
                  <th>รายการบริการ</th>
                  <th>แผนกที่จัดส่ง</th>
                  <th>ชื่อปู้ป่วย</th>
                  <th>Date-Time</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>
                    <p>1</p>
                  </td>

                  <td>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-bold">หอผู้ป่วยชั้น10</div>
                      </div>
                    </div>
                  </td>
                  <td>stat,ขอเฉพาะMG</td>
                  <td>หอผู้ป่วยชั้น19</td>
                  <td>คุณสมชาย</td>
                  <td>19/04/2024 08:01</td>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                </tr>
                {/* row 1 */}
                <tr>
                  <td>
                    <p>2</p>
                  </td>

                  <td>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-bold">หอผู้ป่วยชั้น19</div>
                      </div>
                    </div>
                  </td>
                  <td>stat,ขอเฉพาะMG</td>
                  <td>หอผู้ป่วยชั้น19</td>
                  <td>คุณสมชาย</td>
                  <td>19/04/2024 08:01</td>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                </tr>
                {/* row 1 */}
                <tr>
                  <td>
                    <p>3</p>
                  </td>

                  <td>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-bold">หอผู้ป่วยชั้น19</div>
                      </div>
                    </div>
                  </td>
                  <td>stat,ขอเฉพาะMG</td>
                  <td>หอผู้ป่วยชั้น19</td>
                  <td>คุณสมชาย</td>
                  <td>19/04/2024 08:01</td>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                </tr>
                {/* row 1 */}
                <tr>
                  <td>
                    <p>4</p>
                  </td>

                  <td>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-bold">หอผู้ป่วยชั้น19</div>
                      </div>
                    </div>
                  </td>
                  <td>stat,ขอเฉพาะMG</td>
                  <td>หอผู้ป่วยชั้น19</td>
                  <td>คุณสมชาย</td>
                  <td>19/04/2024 08:01</td>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                </tr>
                {/* row 1 */}
                <tr>
                  <td>
                    <p>5</p>
                  </td>

                  <td>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-bold">หอผู้ป่วยชั้น19</div>
                      </div>
                    </div>
                  </td>
                  <td>stat,ขอเฉพาะMG</td>
                  <td>หอผู้ป่วยชั้น19</td>
                  <td>คุณสมชาย</td>
                  <td>19/04/2024 08:01</td>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                </tr>
                {/* row 1 */}
                <tr>
                  <td>
                    <p>6</p>
                  </td>

                  <td>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-bold">หอผู้ป่วยชั้น19</div>
                      </div>
                    </div>
                  </td>
                  <td>stat,ขอเฉพาะMG</td>
                  <td>หอผู้ป่วยชั้น19</td>
                  <td>คุณสมชาย</td>
                  <td>19/04/2024 08:01</td>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                </tr>
                {/* row 1 */}
                <tr>
                  <td>
                    <p>7</p>
                  </td>

                  <td>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-bold">หอผู้ป่วยชั้น19</div>
                      </div>
                    </div>
                  </td>
                  <td>stat,ขอเฉพาะMG</td>
                  <td>หอผู้ป่วยชั้น19</td>
                  <td>คุณสมชาย</td>
                  <td>19/04/2024 08:01</td>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">เจ้าหน้าที่</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th></th>
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
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {lineAccount.map((lineAccount: any) => (
                <tr key={lineAccount.LineRowId}>
                  <td>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </td>
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
                          <img
                            width="100px"
                            src={lineAccount.LineAccountImg}
                          ></img>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
