import Footer from "@/app/components/footer/footer";
import HeaderComponent from "@/app/components/header/header";

const Contact = () => {
  return (
    <>
      <HeaderComponent currentPage="contact" />
      {/* Faz o contêiner principal ocupar no mínimo a altura total da tela */}
      <div className="flex desktop:pt-[80px] mobile:pt-[50px] tablet:pt-[50px] flex-col justify-between min-h-screen">
        <div className="flex-grow flex flex-col justify-center items-center text-center">
          <section className="text-primary">
            <h1 className="Header font-bold desktop:text-tlg mobile:text-tmd">
              Endereço
            </h1>
            <p className="article text-xxl mobile:text-lg">
              Vila Mariana, São Paulo
            </p>
          </section>

          <section className="text-primary">
            <h1 className="Header font-bold desktop:text-tlg mobile:text-tmd">
              E-mail
            </h1>
            <p className="article desktop:text-xxl mobile:text-lg">
              joaovpastoriza@gmail.com
            </p>
          </section>

          <section className="text-primary">
            <h1 className="Header font-bold desktop:text-tlg mobile:text-tmd">
              Telefone
            </h1>
            <p className="article text-xxl desktop:text-xxl mobile:text-lg">
              (15) 99813-8404
            </p>
          </section>
        </div>

        {/* Footer vai automaticamente para a parte inferior da tela */}
        <Footer />
      </div>
    </>
  );
};

export default Contact;
