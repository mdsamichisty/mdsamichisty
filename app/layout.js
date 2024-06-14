import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Moonex Labs",
  description: "Project 1",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <script src="https://kit.fontawesome.com/e0fe1f7172.js" crossorigin="anonymous"></script>
      </body>
    </html>
  );
}
