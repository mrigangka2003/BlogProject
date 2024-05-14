import React from "react";
import { Link } from "react-router-dom";
import Container from "../container/Container";
import { Logo } from "../index";
import github from "../../images/github.png";
import Twitter from '../../images/xIcon.png';
import LinkedIn from '../../images/LinkedIn.png';

function Footer() {
  return (
    <footer className="px-4 py-10 border-t border-gray-200/10 text-white">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-col lg:flex-row items-center space-x-4 mb-8 lg:mb-0">
            <div className="w-[125px]">
              <Logo />
            </div>
            <p>© 2024 Spotlight</p>
          </div>
          <div className="flex flex-col lg:flex-row items-center space-x-4 mb-8 lg:mb-0">
            <p className="mb-6 lg:mb-0 text-lg font-semibold">Legal</p>
            <ul className="flex flex-col lg:flex-row lg:space-x-4 text-[14px] font-medium">
              <li className="mb-2 lg:mb-0"><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li className="mb-2 lg:mb-0"><Link to="/cookie-policy">Cookie Policy</Link></li>
              <li className="mb-2 lg:mb-0"><Link to="/disclaimer">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex justify-center items-center">
          <ul className="flex space-x-4 text-[14px] text-xl font-medium">
            <li>
              <Link to={"https://github.com/mrigangka2003"}>
                <button
                  type="button"
                  className="rounded-md flex items-center gap-2 bg-white hover:bg-white/80 px-3 py-2 text-sm font-semibold text-black"
                >
                  <img src={github} alt="github" /> Github
                </button>
              </Link>
            </li>
            <li>
              <Link to={"https://twitter.com/mrigangkadatta"}>
                <button
                  type="button"
                  className="rounded-md flex items-center gap-2 bg-white hover:bg-white/80 px-3 py-2 text-sm font-semibold text-black"
                >
                  <img src={Twitter} alt="Twitter" width={20} /> Twitter
                </button>
              </Link>
            </li>
            <li>
              <Link to={"https://www.linkedin.com/in/mrigangka/"}>
                <button
                  type="button"
                  className="rounded-md flex items-center gap-2 bg-white hover:bg-white/80 px-3 py-2 text-sm font-semibold text-black"
                >
                  <img src={LinkedIn} alt="LinkedIn" width={20} /> LinkedIn
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="my-4 flex justify-center font-semibold text-sm"> Mrigangka Datta</div>
      </Container>
    </footer>
  );
}

export default Footer;
