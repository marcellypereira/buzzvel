/* eslint-disable jsx-a11y/anchor-is-valid */
import OutlineButton from './button'; // Certifique-se de que este componente está implementado

export default function NavBar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-[1920px] mx-auto p-4 flex justify-between items-center">
        <div>
          <ul className="flex items-center gap-x-8">
            <li>
              <a href="#" className="text-black text-3xl font-bold hover:text-primary">
                soller
              </a>
            </li>
            {['Products', 'Solutions', 'Services', 'Configure'].map((item) => (
              <li key={item} className="hidden lg:block">
                <a href="#" className="text-[#0F172A] text-base font-medium hover:text-primary">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:flex items-center gap-4 z-50">
          <div className="flex items-center gap-3 text-[#0369A1]">
            <img src="icon1.png" alt="Icon" className="w-5 h-5" />
            <p className="text-base">55 818 282</p>
          </div>
          <OutlineButton
            text="Request a Quote"
            variant="primary"
          />
        </div>
      </div>
    </nav>
  );
}
