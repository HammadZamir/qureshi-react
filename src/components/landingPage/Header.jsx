import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { useAuth } from "../../context/AuthContext";




function Header() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
  
    const { userVerified, logoutUser } = useAuth();
  
    const handleNavigation = (path) => {
    //   router.push(path);
      navigate(path)
      if (window.innerWidth < 768) {
        setMenuOpen(false);
      }
    };
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
    return (
      <div className="p-5 w-full bg-[#FFFFFF] flex flex-row justify-between items-center px-6 lg:px-10 relative">
        <div
          onClick={() => router.push("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img src={logo} alt="logo" width={70} height={50} />
          <div className="flex flex-col gap-1">
            <h1 className="text-[#82D026] text-2xl md:text-xl lg:text-2xl font-semibold">
              Shajra e
            </h1>
            <h3 className="text-[#000000] text-xl md:text-lg lg:text-xl text-center font-semibold">
              Nasb
            </h3>
          </div>
        </div>
  
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col items-center absolute top-full left-0 w-full bg-white transition-transform duration-300 ease-in-out md:static md:flex-row md:gap-5 lg:gap-20 md:w-auto md:bg-transparent md:flex z-10`}
        >
          <div className="flex flex-col md:flex-row gap-4 lg:gap-10 mt-4 md:mt-0 ">
            <div
              onClick={() => handleNavigation("/Explore")}
              className="text-[#000000] text-xl md:text-lg lg:text-xl font-semibold cursor-pointer"
            >
              Explore
            </div>
            <div
              onClick={() => handleNavigation("/react-flow")}
              className="text-[#000000] text-xl md:text-lg lg:text-xl font-semibold cursor-pointer"
            >
              Expand
            </div>
  
            <div
              onClick={() => handleNavigation("/AboutUs")}
              className="text-[#000000] text-xl md:text-lg lg:text-xl font-semibold cursor-pointer"
            >
              About Us
            </div>
  
            {userVerified ? (
              <div
                onClick={() => handleNavigation("/Profile")}
                className="md:hidden text-[#000000] text-xl md:text-lg lg:text-xl font-semibold cursor-pointer"
              >
                Profile
              </div>
            ) : (
              <div
                onClick={() => handleNavigation("/signin")}
                className="md:hidden text-[#000000] text-xl md:text-lg lg:text-xl font-semibold cursor-pointer"
              >
                Login
              </div>
            )}
          </div>
        </div>
  
        {userVerified ? (
          <div className="cursor-pointer hidden md:block">
            <Avatar
              className="cursor-pointer hidden md:block"
              onClick={() => router.push("/Profile")}
              style={{ backgroundColor: "#87d068" }}
              icon={<UserOutlined />}
            />
          </div>
        ) : (
          <div
            onClick={() => handleNavigation("/signin")}
            className=" md:flex hidden"
          >
            <div className="relative flex justify-center w-40 lg:w-48 rounded-full border border-[#82D026] bg-[#82D026] p-0.5 cursor-pointer">
              <div className="text-center text-white text-sm lg:text-base rounded-full px-4 py-2 transition-colors duration-300">
                Login
              </div>
            </div>
          </div>
        )}
        <div className="md:hidden flex items-center">
          {menuOpen ? (
            <X
              className="text-black cursor-pointer"
              size={28}
              onClick={toggleMenu}
            />
          ) : (
            <Menu
              className="text-black cursor-pointer"
              size={28}
              onClick={toggleMenu}
            />
          )}
        </div>
      </div>
    );
  }
  
  export default Header;
