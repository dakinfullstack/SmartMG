"use client";
import { useState } from "react";
import { BsArrowLeftShort, BsChevronDown } from "react-icons/bs";
import { MdWheelchairPickup } from "react-icons/md";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { FaPencilAlt } from "react-icons/fa";
import { BsBuildingFillGear } from "react-icons/bs";
import { FaUserGear } from "react-icons/fa6";

import Link from "next/link";

export default function Drawer() {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  interface MenuItem {
    id: string;
    icon?: React.ReactNode;
    label: string;
    href: string;
    spacing: boolean;
    submenu: boolean;
  }
  const menuItems: MenuItem[] = [
    {
      id: "1",
      label: " Home",
      icon: <AiFillHome />,
      href: "/dashboard",
      spacing: false,
      submenu: false,
    },
    {
      id: "2",
      label: " Request Manual",
      icon: <FaPencilAlt />,
      href: "/requestmanual",
      spacing: false,
      submenu: false,
    },
    {
      id: "3",
      label: " Setting",
      icon: <IoMdSettings />,
      href: "",
      spacing: false,
      submenu: true,
    },
  ];
  const submenuSettingItems: MenuItem[] = [
    {
      id: "1",
      label: " UserLine",
      icon: <FaUserGear />,
      href: "/settinguserline",
      spacing: true,
      submenu: true,
    },
    {
      id: "2",
      label: " Location",
      icon: <BsBuildingFillGear />,
      href: "/settinglocation",
      spacing: true,
      submenu: true,
    },
  ];

  return (
    <div>
      <div className="flex">
        <div
          className={`bg-[#41C2EC] h-screen p-5 pt-8 ${
            open ? "w-[220px]" : "w-20"
          } duration-300 relative`}
        >
          <div className="inline-flex">
            <MdWheelchairPickup
              className={`bg-base-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${
                open && "rotate-[360deg]"
              }`}
            />
            <BsArrowLeftShort
              className={`bg-7u-300 text-black-200 text-3xl rounded-full absolute -right-3 top-9 border  bg-base-200  cursor-pointer ${
                !open && "rotate-180"
              }`}
              onClick={() => setOpen(!open)}
            />
            <h1
              className={`text-[#f1f5f9] origin-left font-medium text-2xl duration-300 ${
                !open && "scale-0"
              } `}
            >
              Smart MG
            </h1>
          </div>
          <ul>
            {menuItems.map((menuitem) => (
              <li
                key={menuitem.id}
                className="text-base-200 text-sm flex item-center gap-x-4 cursor-point p-2 hover:bg-[#f1f5f9] hover:text-[#41C2EC] rounded-md mt-2"
              >
                <Link href={menuitem.href}>
                  <span className="text-2xl block float-left">
                    {menuitem.icon ? menuitem.icon : <AiFillHome />}
                  </span>
                  <span
                    className={`text-base font-medium flex-1  duration-200 ${
                      !open && "hidden"
                    }`}
                  >
                    {menuitem.label}
                    {/* {menuitem.id && 3} */}

                    {menuitem.submenu && open && (
                      <BsChevronDown
                        className={`${submenuOpen && "rotate-180"}`}
                        onClick={() => setSubmenuOpen(!submenuOpen)}
                      />
                    )}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {submenuOpen && open ? (
            open
          ) : (
            <ul>
              {submenuSettingItems.map((submenuitem) => (
                <li
                  key={submenuitem.id}
                  className="text-base-200 text-sm flex gap-x-1 cursor-point p-2 px-5 hover:bg-blue-300 rounded-md"
                >
                  <Link href={submenuitem.href}>
                    <span className="text-2xl block float-left">
                      {submenuitem.icon ? submenuitem.icon : <AiFillHome />}
                    </span>
                    <span
                      className={`text-base font-medium flex-1  duration-200 ${
                        !open && "hidden"
                      }`}
                    >
                      {submenuitem.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
