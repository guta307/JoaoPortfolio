import Footer from "@/app/components/footer/footer";
import HeaderComponent from "@/app/components/header/header";

const Contact = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <HeaderComponent currentPage="contact" />
      <div className="  flex gap-8 pt-[6rem]  flex-col text-center  items-center">
        <section className={"text-primary"}>
          <h1 className="Header font-bold desktop:text-tlg mobile:text-tmd">
            Endereço
          </h1>
          <p className="article text-xxl mobile:text-lg">
            Vila Mariana, São Paulo
          </p>
        </section>

        <section className={"text-primary"}>
          <h1 className="Header font-bold desktop:text-tlg mobile:text-tmd">
            E-mail
          </h1>
          <p className="article desktop:text-xxl mobile:text-lg">
            joaovpastoriza@gmail.com
          </p>
        </section>

        <section className={"text-primary"}>
          <h1 className="Header font-bold desktop:text-tlg mobile:text-tmd">
            Telefone
          </h1>
          <p className="article text-xxl desktop:text-xxl mobile:text-lg">
            (15) 99813-8404
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
