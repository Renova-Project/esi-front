import { useMessages } from "next-intl";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";


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
