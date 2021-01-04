import Link from "next/link";

import { tw } from "twind";

function Header() {
  return (
    <header className={tw`w-full bg-gray-200 dark:bg-gray-custom`}>
      <div
        className={tw`flex flex-wrap justify-between items-center p-4 mx-auto max-w-4xl  standalone:fixed standalone:mt-6 md:flex-no-wrap md:p-8 `}
      >
        <div className={tw`flex items-center space-x-8`}>
          <div className={tw`p-2 mr-3 w-10 bg-white rounded`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path
                fill="#fff"
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
          </div>

          <Link href="/">
            <a className={tw`text-xl font-light text-gray-700`}>Home Page</a>
          </Link>
          <Link href="/about">
            <a className={tw`text-xl font-light text-gray-700`}>About Page</a>
          </Link>
          <Link href="/test">
            <a className={tw`text-xl font-light text-gray-700`}>Test Page</a>
          </Link>
          <Link href="/kakteen">
            <a className={tw`text-xl font-light text-gray-700`}>kakteen</a>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
