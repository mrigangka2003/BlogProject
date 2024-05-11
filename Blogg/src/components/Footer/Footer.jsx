import { Link } from 'react-router-dom'
import {Logo} from '../index'
import Container from '../Container/Container'

function Footer() {
    return (
  
      <footer className="px-4 py-10 border-t border-gray-200/10">
        <Container>
        </Container>
        <div className="flex justify-center sm:justify-end px-8">
            <Logo width='50px'></Logo>
            <Link to={"https://github.com/mrigangka2003"}>
            <button
              type="button"
              className="rounded-md flex gap-2 mt-8  bg-white hover:bg-white/80  px-3 py-2 text-sm font-semibold text-black "
            >
              <img src='google.com' alt="github" />Created By Mriganka
            </button>
          </Link>
        </div>
  
      </footer>
  
    )
  }

export default Footer