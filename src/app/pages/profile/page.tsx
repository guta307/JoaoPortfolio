import Link from "next/link";

/*image imports*/
import profileImg_Top from "../../assets/profile/portrait.png";
import profileImg_Bottom from "../../assets/profile/portrait2.png";
import Image from "next/image";
import HeaderComponent from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";

const Profile = () => {
  return (
    <>
      <HeaderComponent currentPage="profile" />
      <div className=" flex gap-8 pt-[6rem]  flex-col text-center justify-center items-center">
        <Image
          src={profileImg_Top}
          alt={"imagem de perfil do rodapé"}
          className=" desktop:w-[20%] mobile:w-[45%]"
        />
        <h1 className="Header text-primary text-txl">João Pastoriza</h1>
        <article className="article flex flex-col gap-6 text-xxl text-primary w-[60%]">
          <p>
            Oi, meu nome é João, criado no interior paulista, e já trabalhei com
            todo tipo de coisa, desde voluntário na área da educação até mesmo a
            estagiário no Ministério Público.
          </p>

          <p>
            Atualmente sou estudante de cinema e audiovisual na ESPM-SP, mas
            minha paixão pela sétima arte começou muito antes de entrar na
            faculdade. Quando tinha por volta dos 7 ou 8 anos de idade, decidi
            que queria assistir um filme de terror no cinema, e meu tio que
            também sempre adorou ir a sessões um tanto quanto "questionáveis",
            me levou para assistir Atividade Paranormal. Assim como Spielberg,
            fiquei com medo daquilo que tinha visto, e passei uma noite sem
            dormir, e em uma tentativa de me acalmar, esse mesmo tio decidiu me
            mostrar alguns Making Ofs de filmes de terror que colecionava, e a
            partir daquele momento me apaixonei pela ideia de criar filmes e
            histórias.
          </p>

          <p>
            Em 2019 entrei na faculdade de cinema da FAAP, onde fiquei até o
            inicio da pandemia, quando comecei a trabalhar na Design n Animation
            como estagiário de edição de vídeo, e em pouco tempo fui efetivado e
            passei a administrar equipes de animadores e editores, realizando
            trabalhos para empresas como B3, Coca-Cola, Sesc e muitas outras.
          </p>

          <p>
            Na área do audiovisual também já atuei como operador de câmera em
            diversos shows do circuito sertanejo, diretor de fotografia em
            curtas universitários e principalmente na área de produção e
            planejamento de curtas e longas metragens idependentes.
          </p>

          <p>
            Em 2022 decidi terminar meus estudos de cinema, dessa vez com um
            foco no setor de produção e produção executiva, e escolhi a ESPM
            para continuar essa jornada, onde passei a desenvolver diversas
            produções, especialmente documentais, com a Shawarma Entertainemnt,
            uma produtora que criei com mais 5 colegas para podermos continuar a
            criar e contar histórias.
          </p>

          <p>
            Devo confessar que sou um palmeirense incorrigivel, e realizei um
            grande sonho de trabalhar com o time que amo no desenvolvimento da
            série "Uma Terra de Palmeiras", onde fui responsável pela produção
            executiva de todo o projeto, assim como em outros documentários onde
            pude unir sonhos com a realidade como em "Rauh Welt Begriff, A arte
            atrás do Mundo Áspero" onde tive a oportunidade de desenvolver um
            projeto para ser gravado no Japão com Akira Nakai e a equipe RWB, de
            quem sou grande admirador.
          </p>

          <p>
            Também sou escritor no Newronio, onde escrevo sobre cinema e música,
            e produzimos diversos vídeos, como ensaios a respeito de diversos
            filmes e obras de artes, podcasts sobre os mais diversos temas e
            esquetes de comédia.
          </p>

          <p>
            Meu maior sonho é continuar nessa jornada de produção, criando e
            contando as histórias por meio de uma câmera e uma tela.
          </p>

          <Link
            className="article underline desktop:text-tmd tablet:text-tmd mobile:text-xxl"
            href={"/pages/home"}
          >
            Baixe meu currículo
          </Link>

          <Link
            className="article underline desktop:text-tmd tablet:text-tmd mobile:text-xxl"
            href={"/pages/contact"}
          >
            Contato
          </Link>

          <Image
            src={profileImg_Bottom}
            alt={"imagem de perfil do rodapé"}
            className=" min-w-full"
          />
        </article>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
