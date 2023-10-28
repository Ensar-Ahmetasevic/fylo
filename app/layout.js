import "./globals.css";
import { Raleway, Open_Sans } from "next/font/google";

const raleway = Raleway({
  weight: ["400", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  // Configure our code to be used with Tailwind CSS
  variable: "--font-raleway",
});

const openSans = Open_Sans({
  weight: ["400", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  // Configure our code to be used with Tailwind CSS
  variable: "--font-opensans",
});

export const metadata = {
  title: "Fylo",
  description: "All your files in one secure location, assessible anywhere.",
};

export default function RootLayout({ children }) {
  return (
    // 👇 Attach CSS variables to HTML
    <html
      className={`${raleway.variable} ${openSans.variable} dark scroll-smooth font-sans`}
      lang="en"
    >
      <body className="font-opensans dark:bg-darkBlue  dark:text-white">
        {children}
      </body>
    </html>
  );
}
