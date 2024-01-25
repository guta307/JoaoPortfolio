import Link from "next/link";

type headerProps = {
  currentPage?: string;
};

const HeaderComponent = ({ currentPage }: headerProps) => {
  return (
    <nav className="flex z-50 bg-black justify-between items-center align-middle fixed w-screen min-w-[300px] desktop:h-[80px] mobile:h-[50px] tablet:h-[50px]">
      <h1 className="desktop:pl-8 tablet:pl-8 mobile:pl-4 desktop:text-tmd tablet:text-xxl mobile:text-[10px] logo text-primary">
        João Pastoriza
      </h1>

      <ul className="flex gap-4 Header text-xl text-primary desktop:pr-8 tablet:pr-8 mobile:pr-4">
        <Link href="/pages/home">
          <li
            className={`cursor-pointer ${
              currentPage == "home" && " text-white"
            }`}
          >
            Home
          </li>
        </Link>
        <Link href="/pages/profile">
          {" "}
          <li
            className={`cursor-pointer  ${
              currentPage === "profile" && " text-white"
            }`}
          >
            Sobre
          </li>
        </Link>
        <Link href="/pages/contact">
          {" "}
          <li
            className={`cursor-pointer  ${
              currentPage === "contact" && " text-white"
            }`}
          >
            Contato
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default HeaderComponent;
