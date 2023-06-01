import "./globals.css";

export const metadata = {
  title: "Preview Card Component",
  description: "Frontend Mentor challenge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
