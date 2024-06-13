import { DM_Sans } from "next/font/google";
import "../../globals.css";
import { useMessages } from "next-intl";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = DM_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const messages = useMessages();

  return (
    <div>
      <Nav />
      <div className="overflow-hidden">{children}</div>
      <Footer />
    </div>
  );
}
