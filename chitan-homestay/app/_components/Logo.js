import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      {/*<Image
        src="/logo.png"
        height="60"
        width="60"
        alt="Chitan Homestay logo"
      />*/}
      <Image
        src={logo}
        height="60"
        quality={100}
        width="60"
        alt="Chitan Homestay logo"
      />
      <span className="text-xl font-semibold text-primary-100">
        Chitan Homestay
      </span>
    </Link>
  );
}

export default Logo;
