import "./globals.css";
import StyledComponentsRegistry from "./lib/registry";
import { Varela_Round } from "next/font/google";

export const metadata = {
  title: "Illustration by Michael Cuccia",
  description: "Generated by create next app",
};

const varelaRound = Varela_Round({ subsets: ["latin"], weight: "400" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={varelaRound.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
