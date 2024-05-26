import React, { useEffect, useState } from "react";
import ConstructNetLogo from "./ConstructNetLogo";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import Image from "next/image";
import { useCookies } from "react-cookie";
import axios from "axios";
import { GET_USER_INFO, HOST } from "../utils/constants";
import ContextMenu from "./ContextMenu";
import { useStateProvider } from "../context/StateContext";
import { reducerCases } from "../context/constants";

function Navbar() {
  const [cookies] = useCookies();
  const router = useRouter();
  const [navFixed, setNavFixed] = useState(false);
  const [searchData, setSearchData] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [{ showLoginModal, showSignupModal, isSeller, userInfo }, dispatch] =
    useStateProvider();

  const handleLogin = () => {
    if (showSignupModal) {
      dispatch({
        type: reducerCases.TOGGLE_SIGNUP_MODAL,
        showSignupModal: false,
      });
    }
    dispatch({
      type: reducerCases.TOGGLE_LOGIN_MODAL,
      showLoginModal: true,
    });
  };

  const handleSignup = () => {
    if (showLoginModal) {
      dispatch({
        type: reducerCases.TOGGLE_LOGIN_MODAL,
        showLoginModal: false,
      });
    }
    dispatch({
      type: reducerCases.TOGGLE_SIGNUP_MODAL,
      showSignupModal: true,
    });
  };

  const links = [
    { linkName: "Business", handler: "#", type: "link" },
    { linkName: "Explore", handler: "#", type: "link" },
    { linkName: "English", handler: "#", type: "link" },
    { linkName: "Become a Seller", handler: "#", type: "link" },
    { linkName: "Sign in", handler: handleLogin, type: "button" },
    { linkName: "Join", handler: handleSignup, type: "button2" },
  ];

  useEffect(() => {
    if (router.pathname === "/") {
      const positionNavbar = () => {
        window.pageYOffset > 0 ? setNavFixed(true) : setNavFixed(false);
      };
      window.addEventListener("scroll", positionNavbar);
      return () => window.removeEventListener("scroll", positionNavbar);
    } else {
      setNavFixed(true);
    }
  }, [router.pathname]);

  const handleOrdersNavigate = () => {
    if (isSeller) router.push("/seller/orders");
    router.push("/buyer/orders");
  };

  const handleModeSwitch = () => {
    if (isSeller) {
      dispatch({ type: reducerCases.SWITCH_MODE });
      router.push("/buyer/orders");
    } else {
      dispatch({ type: reducerCases.SWITCH_MODE });
      router.push("/seller");
    }
  };

  useEffect(() => {
    if (cookies.jwt && !userInfo) {
      const getUserInfo = async () => {
        try {
          const {
            data: { user },
          } = await axios.post(
            GET_USER_INFO,
            {},
            {
              withCredentials: true,
              headers: {
                Authorization: `Bearer ${cookies.jwt}`,
              },
            }
          );

          let projectedUserInfo = { ...user };
          if (user.image) {
            projectedUserInfo = {
              ...projectedUserInfo,
              imageName: HOST + "/" + user.image,
            };
          }
          delete projectedUserInfo.image;
          dispatch({
            type: reducerCases.SET_USER,
            userInfo: projectedUserInfo,
          });
          setIsLoaded(true);
          console.log({ user });
          if (user.isProfileSet === false) {
            router.push("/profile");
          }
        } catch (err) {
          console.log(err);
        }
      };

      getUserInfo();
    } else {
      setIsLoaded(true);
    }
  }, [cookies, userInfo, dispatch]);

  const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);

  useEffect(() => {
    const clickListener = (e) => {
      e.stopPropagation();
      if (isContextMenuVisible) setIsContextMenuVisible(false);
    };
    if (isContextMenuVisible) {
      window.addEventListener("click", clickListener);
    }
    return () => {
      window.removeEventListener("click", clickListener);
    };
  }, [isContextMenuVisible]);

  const ContextMenuData = [
    {
      name: "Profile",
      callback: (e) => {
        e.stopPropagation();
        setIsContextMenuVisible(false);
        router.push("/profile");
      },
    },
    {
      name: "Logout",
      callback: (e) => {
        e.stopPropagation();
        setIsContextMenuVisible(false);
        router.push("/logout");
      },
    },
  ];

  return (
    <>
      {isLoaded && (
        <nav
          className={`w-full px-28 md:px-28 flex justify-between items-center py-4 md:py-8 top-0 z-30 transition-all duration-300 ${
            navFixed || userInfo
              ? "fixed bg-white/20 shadow-lg backdrop-blur-3xl"
              : "absolute bg-transparent border-transparent"
          }`}
        >
          <div>
            <Link href="/">
              <ConstructNetLogo
                fillColor={!navFixed && !userInfo ? "#ffffff" : "#404145"}
              />
            </Link>
          </div>
          <div
            className={`flex ${
              navFixed || userInfo ? "opacity-100" : "opacity-0"
            }`}
          >
            <input
              type="text"
              placeholder="What service are you looking for today?"
              className="w-full md:w-[20rem] sm:w-[10rem] py-2.5 px-4 border rounded-full"
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
            />
            <button
              className="ml-1.5 text-white w-11 flex justify-center items-center rounded-full transition-transform duration-500 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => {
                setSearchData("");
                router.push(`/search?q=${searchData}`);
              }}
            >
              <IoSearchOutline className="fill-white text-white h-6 w-6" />
            </button>
          </div>
          {!userInfo ? (
            <ul className="hidden md:flex gap-8 items-center">
              {links.map(({ linkName, handler, type }) => (
                <li
                  key={linkName}
                  className={`${
                    navFixed
                      ? "text-white hover:text-orange-500  transition-all duration-500 transform hover:-translate-y-1 cursor-pointer"
                      : "text-white hover:text-orange-500 tranition-all duration-500 transform hover:-translate-y-1 cursor-pointer"
                  } font-medium`}
                >
                  {type === "link" && <Link href={handler}>{linkName}</Link>}
                  {type === "button" && (
                    <button onClick={handler}>{linkName}</button>
                  )}
                  {type === "button2" && (
                    <button
                      onClick={handler}
                      className={`border text-md font-semibold py-1 px-3 rounded-sm ${
                        navFixed
                          ? "border-orange-500 text-orange-500"
                          : "border-white text-white"
                      } hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-500`}
                    >
                      {linkName}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <ul className="hidden md:flex gap-10 items-center">
              {isSeller && (
                <li
                  className="cursor-pointer text-orange-500 font-medium"
                  onClick={() => router.push("/seller/gigs/create")}
                >
                  Create Gig
                </li>
              )}
              <li
                className="font-medium text-white hover:text-orange-500 tranition-all duration-500 transform hover:-translate-y-1 cursor-pointer"
                onClick={handleOrdersNavigate}
              >
                Orders
              </li>

              {isSeller ? (
                <li
                  className="font-medium text-white hover:text-orange-500 tranition-all duration-500 transform hover:-translate-y-1 cursor-pointer"
                  onClick={handleModeSwitch}
                >
                  Switch To Buyer
                </li>
              ) : (
                <li
                  className="font-medium text-white hover:text-orange-500 tranition-all duration-500 transform hover:-translate-y-1 cursor-pointer"
                  onClick={handleModeSwitch}
                >
                  Switch To Seller
                </li>
              )}
              <li
                className="cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsContextMenuVisible(true);
                }}
                title="Profile"
              >
                {userInfo?.imageName ? (
                  <Image
                    src={userInfo.imageName}
                    alt="Profile"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                ) : (
                  <div className="bg-blue-100 h-10 w-10 flex items-center justify-center rounded-full relative">
                    <span className="text-xl text-black">
                      {userInfo &&
                        userInfo?.email &&
                        userInfo?.email.split("")[0].toUpperCase()}
                    </span>
                  </div>
                )}
              </li>
            </ul>
          )}
          {isContextMenuVisible && <ContextMenu data={ContextMenuData} />}
        </nav>
      )}
    </>
  );
}

export default Navbar;
