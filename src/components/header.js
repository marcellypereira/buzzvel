/* eslint-disable jsx-a11y/anchor-is-valid */
import OutlineButton from './button';

export default function Header() {
  const navItems = ['Products', 'Solutions', 'Services', 'Configure'];

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="max-w-[1920px] mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-black text-3xl font-bold hover:text-primary mr-8">
            <a href="#">soller</a>
          </h1>
          <ul className="flex items-center gap-x-8">
            {navItems.map((item) => (
              <li key={item} className="hidden lg:block">
                <a href="#" className="text-[#0F172A] text-base font-medium hover:text-primary">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-3 text-[#0369A1]">
            <img src="icon1.png" alt="Contact icon" className="w-5 h-5" />
            <p className="text-base">55 818 282</p>
          </div>
          <OutlineButton text="Request a Quote" variant="primary" />
        </div>
      </nav>
    </header>
  );
}
