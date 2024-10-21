/* eslint-disable jsx-a11y/anchor-is-valid */
import OutlineButton from './button';

export default function NavBar() {
  return (
    <nav className="w-full h-24 z-50 bg-white">
      <div className="max-w-[1800px] mx-auto px-4 lg:px-3 w-full flex justify-between items-center h-full">
        <ul className="flex items-center gap-x-8 hidden lg:flex">
          <li>
            <a href="#" className="text-black text-3xl font-bold hover:text-primary">
              soller
            </a>
          </li>
          {['Products', 'Solutions', 'Services', 'Configure'].map((item) => (
            <li key={item}>
              <a href="#" className="text-[#0F172A] text-base font-medium	hover:text-primary">
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 text-[#0369A1]">
            <img src="icon1.png" alt="Icon" className="mr-2" />
            <p className="text-base ">55 818 282</p>
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
