import Link from "next/link";

const HeaderComponent = () => {
  return (
    <header className=" flex z-50 justify-between items-center fixed w-full pt-1 pb-1">
      {/* Máscara para escurecer o header */}
      <div
        className="absolute w-screen h-full bg-black
       opacity-100 -z-10"
      ></div>
      <div>Logo</div>

      <ul className="flex gap-4 Header text-xl text-primary desktop:pr-8 tablet:pr-8 mobile:pr-4">
        <Link href="/pages/home">
          <li className=" cursor-pointer">Home</li>
        </Link>
        <Link href="/pages/profile">
          {" "}
          <li className=" cursor-pointer">Sobre</li>
        </Link>
        <Link href="/pages/contact">
          {" "}
          <li className=" cursor-pointer">Contato</li>
        </Link>
      </ul>
    </header>
  );
};

export default HeaderComponent;
