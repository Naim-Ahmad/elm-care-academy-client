"use client"

import { toggleShowHideNav } from "@/redux/features/toggleSlice";
import { IconButton } from "@material-tailwind/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function MenuIcon() {

  const { isShowNav:openNav } = useSelector(state => state.toggleSlice)
  const dispatch = useDispatch()
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && dispatch(toggleShowHideNav(false)),
    );
  }, [dispatch]);

  return (
    <IconButton
    variant="text"
    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
    ripple={false}
    onClick={() => dispatch(toggleShowHideNav(!openNav))}
  >
    {openNav ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className="h-6 w-6"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    )}
  </IconButton>
  )
}