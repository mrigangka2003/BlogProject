import React from "react";
import { Link } from "react-router-dom";
import Container from "../container/Container";
import { Logo } from "../index";
import github from "../../images/github.png";
import Twitter from '../../images/xIcon.png'
import LinkedIn from '../../images/LinkedIn.png'

function Footer() {
  return (
    <footer className="px-4 py-10 border-t border-gray-200/10 ">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="w-[125px]">
            <Logo />
            <p>© 2024 Spotlight</p>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-2 ">
          <div className="mb-8 lg:mb-0">
            <p className="mb-6 text-lg font-semibold text-white">Legal</p>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-white">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
              <li>Disclaimer</li>
              <li>Media Policy</li>
            </ul>
          </div>
        </div>
        <div className="mb-8 lg:mb-0 flex justify-center items-center">
          <ul className="flex m-4 space-x-4 text-[14px] text-xl font-medium text-white">
            <Link to={"https://github.com/mrigangka2003"}>
              <button
                type="button"
                className="rounded-md flex gap-2 mt-8  bg-white hover:bg-white/80  px-3 py-2 text-sm font-semibold text-black "
              >
                <img src={github} alt="github" /> Github
              </button>
            </Link>
            <Link to={"https://twitter.com/mrigangkadatta"}>
              <button
                type="button"
                className="rounded-md flex gap-2 mt-8  bg-white hover:bg-white/80  px-3 py-2 text-sm font-semibold text-black "
              >
                <img src={Twitter} alt="Twiiter" width={"20"} /> Twitter
              </button>
            </Link>
            <Link to={"https://www.linkedin.com/in/mrigangka/"}>
              <button
                type="button"
                className="rounded-md flex gap-2 mt-8  bg-white hover:bg-white/80  px-3 py-2 text-sm font-semibold text-black "
              >
                <img src={LinkedIn} alt="LinkedIn" width={20}/> LinkedIn
              </button>
            </Link>
          </ul>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
