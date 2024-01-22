import HeaderComponent from "@/app/components/header/header";

const Contact = () => {
  return (
    <>
      <HeaderComponent />
      <div className=" flex gap-8 pt-[6rem]  flex-col text-center justify-center items-center">
        <section className={"text-primary"}>
          <h1 className="Header font-bold desktop:text-tlg mobile:text-tmd">
            Endereço
          </h1>
          <p className="article text-xxl">Vila Mariana, São Paulo</p>
        </section>

        <section className={"text-primary"}>
          <h1 className="Header font-bold desktop:text-tlg mobile:text-tmd">
            E-mail
          </h1>
          <p className="article text-xxl">joaovpastoriza@gmail.com</p>
        </section>

        <section className={"text-primary"}>
          <h1 className="Header font-bold desktop:text-tlg mobile:text-tmd">
            Telefone
          </h1>
          <p className="article text-xxl">(15) 99813-8404</p>
        </section>
      </div>
    </>
  );
};

export default Contact;
