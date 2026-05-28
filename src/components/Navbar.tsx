import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <Link href="/" className="nav-logo">
        <Image
          src="/logo.png"
          alt="Zoowibo"
          width={40}
          height={40}
          className="nav-logo-img"
          priority
        />
        <span className="nav-logo-text">ZOOWIBO</span>
      </Link>

      <span className="nav-badge">Coming Soon</span>
    </header>
  );
}