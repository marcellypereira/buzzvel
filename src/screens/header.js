import OutlineButton from "../components/button";
import NavBar from "../components/navBar";

export default function Header() {
  return (
    <header className="max-w-[1920px] mx-auto relative">
      <NavBar />
      <div className="flex flex-col-reverse lg:flex-row justify-between">
        <section className="flex flex-col items-center lg:items-start text-center lg:text-left lg:max-w-[600px] lg:pt-32 mt-8">
          <h1 className="lg:text-7xl font-extrabold leading-tight max-w-[343px] mx-auto lg:max-w-none text-[40px] lg:text-7xl text-[#0F172A]">
            Get the Sun to Power Your Home
          </h1>
          <p className="lg:text-2xl font-normal mt-4 lg:mt-8 max-w-[343px] lg:max-w-none text-[18px] text-[#0F172A]">
            Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.
          </p>
          <div className="lg:pt-6 pt-4">
            <OutlineButton text="Request a Quote" variant="primary" />
          </div>

          <div className="mt-28">
            <p className="font-normal text-lg text-[#0F172A] text-left max-w-[343px] lg:max-w-full">
              “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.”
            </p>
            <div className="flex flex-wrap gap-2 cursor-pointer mt-7">
              <img src="image1.png" className="" alt="" />
              <p className="font-normal text-lg text-[#0F172A]">Rwanda Melflor<br/>
                <p className="ont-normal text-base text-[#475569]">zerowaste.com</p>
              </p>
            </div>
          </div>
        </section>

        <section className="flex justify-end ">
          <div className="">
            <img src="image.png" alt="Imagem Solar"               className="w-[320px] lg:w-full h-auto" />
          </div>
        </section>
      </div>
    </header>
  );
}
