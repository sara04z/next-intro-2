import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <ul id="menu">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
      <main>{children}</main>
      <div id="footer">
        <ul>
          <li>&copy; {new Date().getFullYear()}</li>
        </ul>
      </div>
    </div>
  );
}
