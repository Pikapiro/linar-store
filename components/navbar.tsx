/* eslint-disable jsx-a11y/alt-text */
import getCategories from "@/actions/get-categories";
import MainNav from "@/components/main-nav";
import NavbarActions from "@/components/navbar-actions";
import Container from "@/components/ui/container";
import logo from '@/public/logo.png';
import Image from "next/image";
import Link from "next/link";
const Navbar = async () => {
  const categories = await getCategories();

  return ( 
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
      
          <Image src={logo.src} alt={"logo"}  width={100} height={100}/>
          </Link>
          <MainNav data={categories} />
          <Link href="/colors" className="ml-4 flex lg:ml-0 gap-x-2">
      <p>קטלוג צבעים</p>
        
          </Link>
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};
 
export default Navbar;
