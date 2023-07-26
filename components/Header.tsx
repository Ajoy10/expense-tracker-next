"use client";

import { useState } from "react";

import {
  IconMenu2,
  IconX,
  IconHome,
  IconBrandGoogle,
  IconLogout,
} from "@tabler/icons-react";

import Link from "next/link";
import Image from "next/image";

import { useSession, signIn, signOut } from "next-auth/react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const session = useSession();

  return (
    <nav className="w-full flex justify-end p-5">
      <button type="button" onClick={() => setMenuOpen((prev) => !prev)}>
        {!menuOpen ? <IconMenu2 /> : <IconX />}
      </button>

      {/* Menu */}

      <div
        id="wrapper"
        className={
          (menuOpen ? " translate-x-0 " : " -translate-x-[100vw] ") +
          "w-full h-full absolute left-0 top-0  transition-[transform] z-[100] flex"
        }
      >
        <ul className="bg-woodsmoke-950 w-[70%] h-screen  px-6 py-12 list-none ">
          <div className="py-12">
            {session.status == "authenticated" ? (
              // logged in
              <div className="flex flex-col gap-3">
                <div
                  id="user"
                  className="flex flex-col items-center gap-1 justify-center"
                >
                  <div className=" rounded-full overflow-hidden w-max">
                    <Image
                      src={session.data.user?.image || ""}
                      width={40}
                      height={40}
                      alt={session.data.user?.name || "Profile picture"}
                    />
                  </div>
                  {session.data.user?.name}
                </div>

                <MenuButton
                  className=" bg-teal-600 border-woodsmoke-200 w-3/4 flex justify-center hover:ring-teal-400 hover:ring-opacity-100 hover:text-teal-500 "
                  liClassName="flex items-center justify-center"
                  onClick={() => {
                    signOut();
                  }}
                >
                  <IconLogout className="opacity-60" size={20} />
                  Sign out
                </MenuButton>
              </div>
            ) : (
              <MenuButton
                className=" bg-teal-600 border-woodsmoke-200 w-3/4 flex justify-center hover:ring-teal-400 hover:ring-opacity-100 hover:text-teal-500 "
                liClassName="flex items-center justify-center"
                onClick={() => {
                  signIn("google");
                }}
              >
                <IconBrandGoogle className="opacity-60" size={20} />
                Sign in
              </MenuButton>
            )}
          </div>

          <MenuButton
            href="/"
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            <IconHome className="opacity-60" size={20} />
            Home
          </MenuButton>
        </ul>

        <div
          id="filler"
          className={
            (menuOpen ? " translate-x-0 " : " -translate-x-[100vw] ") +
            "bg-woodsmoke-900 bg-opacity-10 left-0 top-0 h-screen  flex-1"
          }
          onClick={() => setMenuOpen((prev) => !prev)}
        ></div>
      </div>
    </nav>
  );
};

type MenuButtonProps = {
  className?: string;
  liClassName?: string;
  children?: React.ReactNode;
  href?: string;
  onClick?: () => void;
};

const MenuButton = (props: MenuButtonProps) => {
  const commonClasses =
    " w-full flex gap-2 items-center rounded p-2 hover:ring-1 hover:ring-white hover:ring-opacity-10 hover:bg-azure-400 hover:bg-opacity-5 " +
    props.className;

  if (props.href) {
    return (
      <li className={props.liClassName}>
        <Link
          href={props.href}
          className={commonClasses}
          onClick={props.onClick}
        >
          {props.children}
        </Link>
      </li>
    );
  } else {
    return (
      <li className={props.liClassName}>
        <button className={commonClasses} onClick={props.onClick}>
          {props.children}
        </button>
      </li>
    );
  }
};
