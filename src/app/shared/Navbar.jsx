import logo from '@/assets/ইলম-কেয়ার-বিডি.png';
import {
  Button,
  Navbar,
  Typography
} from "@/components/MaterialTailwind";
import CollapseNavList from "@/components/navbar/CollapseNavList";
import MenuIcon from "@/components/navbar/MenuIcon";
import NavLink from '@/components/navbar/NavLink';
import Image from "next/image";
import Link from "next/link";

const menus = [
  {
    label: 'হোম',
    route: '/'
  },
  {
    label: 'কোর্স',
    route: '/courses'
  },
  {
    label: 'পরিচয়',
    route: '/about'
  },
  {
    label: 'শিক্ষকবৃন্দ',
    route: '/teachers'
  },
  {
    label: 'যোগাযোগ',
    route: '/contacts'
  },
]

export default function StickyNavbar() {

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">

      {
        menus.map(menu => {
          const { label, route } = menu;
          return (
            <Typography key={label}
              as="li"
              variant="paragraph"
              color="blue-gray"
              className="p-1 font-normal "
            >
              <NavLink href={route} className="relative navItem">
                {label}
              </NavLink>
            </Typography>
          )
        })
      }
    </ul>
  );

  return (

    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link href="/">
          <Image src={logo} alt="ইলম কেয়ার বিডি" className='w-32 md:w-36' />
        </Link>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-x-1">
            <Link href="/login">
              <Button
                variant="text"
                className="hidden text-md lg:inline-block"
              >
                <span>লগইন</span>
              </Button>
            </Link>
            <Link href="/register">
              <Button
                variant="gradient"
                className="hidden lg:inline-block"
              >
                <span>রেজিস্টার</span>
              </Button>
            </Link>
          </div>
          <MenuIcon />
        </div>
      </div>
      <CollapseNavList navList={navList} />
    </Navbar>
  );
}