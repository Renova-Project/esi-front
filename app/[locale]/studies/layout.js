import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import React from "react";

function layout({ children }) {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}

export default layout;
