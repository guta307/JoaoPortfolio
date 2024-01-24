import Image from "next/image";
import animation from "../../assets/loading/animation.gif";

const LoadingComponent = () => {
  return (
    <div className="w-screen h-screen bg-primary flex justify-center items-center">
      <Image
        className=" desktop:w-1/2 tablet:w-1/2 mobile:w-4/5"
        src={animation}
        alt="animation for loading page"
      />
    </div>
  );
};

export default LoadingComponent;
