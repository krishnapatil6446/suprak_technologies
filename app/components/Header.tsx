import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 shadow">
      <nav className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/products">Products</Link>
        <Link href="/solutions">Solutions</Link>
        <Link href="/clients">Our Clients</Link>
        <Link href="/careers">Career</Link>
        <Link href="/contact">Contact Us</Link>
        <Link href="/blogs">Blogs</Link>
      </nav>
    </header>
  );
}
