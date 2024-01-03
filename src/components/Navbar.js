import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className='p-4'>
        <ul className="flex justify-evenly">
        <li className='pb-1   border-b-[3px] border-b-indigo-500'>
          <Link href="#">
            <span className=' m-4'>
              ABOUT
            </span>
          </Link>
        </li>
          <li>
            <Link href="#">
              INSTRUCTOR
            </Link>
          </li>
          <li>
            <Link href="#">
              SERVICES
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
  