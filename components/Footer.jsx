import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-darkblue">
      <div className="container">
        <div>
          <Image src="/esi-logo.svg" alt="logo" width={60} height={15} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
