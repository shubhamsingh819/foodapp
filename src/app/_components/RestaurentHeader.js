"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const RestaurentHeader = () => {
  const [details, setDetails] = useState();
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    let data = localStorage.getItem("restuarentUser");
    if (!data && pathName == "/restaurant/dashboard") {
      router.push("restaurant");
    } else if (data && pathName == "/restaurant") {
      router.push("/restaurant/dashboard");
    } else {
      setDetails(JSON.parse(data));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("restuarentUser");
    router.push("restaurant");
  };
  return (
    <div className="header-wrapper">
      <div className="logo">
        <Image style={{ width: 100 }} alt="image" />
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        {details && details.name ? (
          <>
            <li>
              <button href="/" onClick={logout}>
                Logout
              </button>
            </li>
            <li>
              <Link href="/">Profile</Link>
            </li>
          </>
        ) : (
          <li>
            <Link href="/">Login/Signup</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default RestaurentHeader;
