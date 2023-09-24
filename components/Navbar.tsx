import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "@/constants";
import AuthProviders from "./AuthProviders";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import { SessionInterface } from "@/common.types";
import { authOptions, getCurrentUser } from "@/lib/session";
import ProfileMenu from "./ProfileMenu";

const Navbar = async () => {
  const session = await getCurrentUser();

  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image
            src={"logo.svg"}
            width={115}
            height={43}
            alt="Flexible"
          ></Image>
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link, index) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flexCenter gap-4">
        {session?.user ? (
          <>
            <ProfileMenu session={session} />

            <Link href={"/create-project"}>Share work</Link>

            {/* <button type="button" className="text-sm" onClick={signOut}>
              Sign Out
            </button> */}
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
