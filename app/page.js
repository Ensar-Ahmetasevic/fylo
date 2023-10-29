"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function FyloHome() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Initialize darkMode based on the value stored in local storage, or default to false (light mode).
    const storedDarkMode = localStorage.getItem("darkMode");
    setDarkMode(storedDarkMode === "true");
  }, []);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    // Save the mode to local storage
    localStorage.setItem("darkMode", newDarkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      {/* Header */}
      <div className="max-w-8xl mx-auto mt-10 flex h-40 flex-col justify-center px-6 text-center md:mt-10 md:h-20 md:flex-row md:justify-between ">
        {/* Dynamic Logo */}
        <Link
          className={`mx-auto h-20 w-48 bg-no-repeat ${
            darkMode ? "bg-logo-dark-mode" : "bg-logo-light-mode"
          } md:mx-0`}
          href="#"
        ></Link>

        {/* Menu */}

        <div className="mx-auto flex items-center space-x-6 md:mx-0">
          <Link className="hover:text-accentCyan" href="#features">
            Features
          </Link>
          <Link className="hover:text-accentCyan" href="#testimonials">
            Testimonials
          </Link>

          <button
            id="theme-toggle"
            className="rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-yellow-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            onClick={toggleDarkMode}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>

      {/* Hero Section */}

      <section
        id="hero"
        className="bg-curvy-light-mode bg-contain bg-bottom bg-no-repeat dark:bg-curvy-dark-mode"
      >
        {/* Hero Container */}
        <div className="container mx-auto px-6 pb-52 text-center md:pt-20">
          <img className="mx-auto" src="/illustration-intro.png" alt="" />
          <h1 className="mx-auto mb-10 mt-14 max-w-2xl text-3xl font-bold leading-normal md:text-4xl">
            All your files in one secure location, assessible anywhere.
          </h1>
          <p className="mx-auto mb-10 max-w-sm text-sm md:max-w-xl md:text-lg">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <button className="w-48  rounded-full bg-accentCyan p-3 duration-500 ease-in-out hover:scale-95 hover:bg-cyan-500">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 pt-12 dark:bg-darkBlue1">
        {/* Features Container*/}
        <div className="container mx-auto flex flex-col px-6 pb-32">
          {/* First Row  */}
          <div className="flex flex-col justify-around space-y-24 text-center md:flex-row md:space-y-0">
            {/* Item 1 */}
            <div className="flex flex-col items-center space-y-2">
              <div className="mb-6 flex h-24 items-center justify-center">
                <img src="/icon-access-anywhere.svg" alt="" />
              </div>
              <h3 className="text-xl font-bold">
                Access your file from anywhere
              </h3>

              <p className="max-w-xs text-sm">
                The ability to use a smartphone, tablet, or computer to access
                your account means your files follow you everywhere.
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center space-y-2">
              <div className="mb-6 flex h-24 items-center justify-center">
                <img src="/icon-security.svg" alt="" />
              </div>
              <h3 className="text-xl font-bold">Security you can trust</h3>

              <p className="max-w-xs text-sm">
                2-factor authentication and user-controlled encryption are just
                a couple of the security features we allow to help secure your
                files.
              </p>
            </div>
          </div>

          {/* Second Row  */}
          <div className="mt-28 flex flex-col justify-around space-y-24 text-center md:flex-row md:space-y-0">
            {/* Item 3 */}
            <div className="flex flex-col items-center space-y-2">
              <div className="mb-6 flex h-24 items-center justify-center">
                <img src="/icon-collaboration.svg" alt="" />
              </div>
              <h3 className="text-xl font-bold">
                Access your file from anywhere
              </h3>

              <p className="max-w-xs text-sm">
                The ability to use a smartphone, tablet, or computer to access
                your account means your files follow you everywhere.
              </p>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col items-center space-y-2">
              <div className="mb-6 flex h-24 items-center justify-center">
                <img src="/icon-any-file.svg" alt="" />
              </div>
              <h3 className="text-xl font-bold">Security you can trust</h3>

              <p className="max-w-xs text-sm">
                2-factor authentication and user-controlled encryption are just
                a couple of the security features we allow to help secure your
                files.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Productive Section */}
      <section id="productive" className="bg-white dark:bg-darkBlue">
        <div className="container mx-auto flex flex-col items-center space-y-5 px-8 pb-32 pt-24 md:flex-row md:space-x-16">
          {/* Image */}
          <div className="md:w-1/2">
            <img src="illustration-stay-productive.png" alt="" />
          </div>

          {/* Content */}
          <div className="flex flex-col items-start space-y-5 md:w-1/2">
            <h4 className="max-w-md text-xl font-bold md:text-4xl">
              Stay productive, wherever you are
            </h4>
            <p className="text-md md:text-lg">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>

            <p className="text-md md:text-lg">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
            {/* Link */}

            <Link
              href="#"
              className="mt-4 border-b border-accentCyan text-accentCyan"
            >
              See how Flyo works
              <img className="inline pl-2" src="/icon-arrow.svg" alt="" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className=" bg-gray-50 dark:bg-darkBlue">
        {/* Testimonials Container */}
        <div className="container mx-auto px-6 pb-80 pt-12 md:px-0 md:pb-96">
          {/* Boxes Container */}
          <div className="w- relative mt-10 flex flex-col justify-evenly space-y-4 border-white md:flex-row md:space-x-5">
            {/* Quotes Image */}
            <img
              src="/bg-quotes.png"
              alt=""
              className="absolute -top-4 left-1 w-10 md:-top-10 md:w-16"
            />

            {/* Box 1 */}
            <div className="flex flex-col space-y-6 rounded-lg bg-gray-100 p-10 dark:bg-darkBlue3 md:w-1/3">
              {/* Comment */}
              <p className="text-sm leading-5 md:text-base">
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>
              {/* Customer Info */}
              <div className="flex space-x-4">
                {/* image */}

                <img
                  className="h-10 w-10 rounded-full"
                  src="/profile-1.jpg"
                  alt=""
                />

                {/* Name and title */}
                <div className="flex flex-col">
                  <h5 className="text-sm font-semibold">Satish Patel</h5>
                  <p className="text-xs font-extralight">
                    Founder & CEO. Huddle
                  </p>
                </div>
              </div>
            </div>

            {/* Box 2 */}

            <div className="flex flex-col space-y-6 rounded-lg bg-gray-100 p-10 dark:bg-darkBlue3 md:w-1/3">
              {/* Comment */}
              <p className="text-sm leading-5 md:text-base">
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>
              {/* Customer Info */}
              <div className="flex space-x-4">
                {/* image */}
                <img
                  className="h-10 w-10 rounded-full"
                  src="/profile-2.jpg"
                  alt=""
                />

                {/* Name and title */}
                <div className="flex flex-col">
                  <h5 className="text-sm font-semibold">Bruce McKenzie</h5>
                  <p className="text-xs font-extralight">
                    Founder & CEO. Huddle 2
                  </p>
                </div>
              </div>
            </div>

            {/* Box 3 */}

            <div className="flex flex-col space-y-6 rounded-lg bg-gray-100 p-10 dark:bg-darkBlue3 md:w-1/3">
              {/* Comment */}
              <p className="text-sm leading-5 md:text-base">
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>
              {/* Customer Info */}
              <div className="flex space-x-4">
                {/* image */}
                <img
                  className="h-10 w-10 rounded-full"
                  src="/profile-3.jpg"
                  alt=""
                />

                {/* Name and title */}
                <div className="flex flex-col">
                  <h5 className="text-sm font-semibold">Eva Boyd</h5>
                  <p className="text-xs font-extralight">
                    Founder & CEO. Huddle 3
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  Early Access Section  */}
      <section
        id="early-access"
        className="relative px-6 dark:bg-darkBlue2 md:px-0"
      >
        <div className="relative -top-40 mx-auto flex max-w-4xl flex-col space-y-6 rounded-lg bg-gray-200 p-10 px-6 text-center dark:bg-darkBlue1 md:px-16">
          <h2 className=" text-2xl font-bold">Get early access today</h2>
          <p className="text-sm">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <div className="w-full md:flex-1">
              <input
                className="w-full rounded-full px-10 py-3 dark:text-black"
                type="email"
                name="email"
                id="email"
                placeholder="email@example.com"
              />
            </div>
            <button className="w-full rounded-full bg-accentCyan p-3 text-white duration-500 ease-in-out hover:scale-95 hover:bg-cyan-500 md:w-56">
              Get Started For Free
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-darkBlue2 py-8 text-white">
        <div className="container mx-auto px-5">
          {/* Flex Container For All Items */}
          <div className="flex flex-col items-center justify-around space-y-16 md:flex-row md:space-y-0">
            {/* Email & Phone */}
            <div className="flex flex-col justify-start space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-6">
                  <img src="/icon-phone.svg" alt="" className="scale-10" />
                </div>
                <p>+1-543-123-4567</p>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-6">
                  <img src="/icon-email.svg" alt="" className="scale-10" />
                </div>
                <p>example@fylo.com</p>
              </div>
            </div>

            {/* Menus */}
            <div className="flex space-x-10">
              <div className="flex flex-col space-y-2">
                <Link href="#">About</Link>
                <Link href="#">Jobs</Link>
                <Link href="#">Press</Link>
                <Link href="#">Blog</Link>
              </div>

              <div className="flex flex-col space-y-2">
                <Link href="#">Contact Us</Link>
                <Link href="#">Terms</Link>
                <Link href="#">Privacy</Link>
              </div>
            </div>

            {/* Socila */}
            <div className="flex space-x-3 ">
              <div>
                <Link href="#">
                  <img
                    className="rounded-full  bg-darkBlue p-2 hover:bg-yellow-500"
                    src="/facebook.svg"
                    alt=""
                  />
                </Link>
              </div>
              <div>
                <Link href="#">
                  <img
                    className="rounded-full bg-darkBlue p-2 hover:bg-yellow-500"
                    src="/twitter.svg"
                    alt=""
                  />
                </Link>
              </div>{" "}
              <div>
                <Link href="#">
                  <img
                    className="rounded-full bg-darkBlue p-2 hover:bg-yellow-500"
                    src="/instagram.svg"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
