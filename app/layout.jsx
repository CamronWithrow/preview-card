import "./globals.css";
import { Big_Shoulders_Display, Lexend_Deca } from "next/font/google";

const bigShoulders = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-heading",
});

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-body",
});

export const metadata = {
  title: "Preview Card Component",
  description: "Frontend Mentor challenge",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bigShoulders.variable} ${lexendDeca.variable}`}
    >
      <body className="flex h-full flex-col items-center justify-center bg-very-light-gray py-20 font-body text-transparent-white md:h-screen md:py-0">
        {children}
      </body>
    </html>
  );
}
