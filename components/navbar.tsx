/* eslint-disable jsx-a11y/alt-text */

import Container from "@/components/ui/container";
import logo from '@/public/logo.png';
import Image from "next/image";
import Link from "next/link";

const Navbar = async () => {

  const categories:string[] = [' ACP',' ACP PVDF FR',' Acrylic',' pc solid color',' PVC',' דבקים וסיליקון',' פרופילים',' קאפה','  קטלוג צבעים']
  return ( 
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-3 flex lg:ml-0 gap-x-2">
      
          <Image src={logo.src} alt={"logo"}  width={100} height={100}/>
          </Link>
          
          {categories.map((ele:string,id)=>{
// eslint-disable-next-line react/jsx-key

return <>  <Link href={`/${ele}`} className="ml-9 flex lg:ml-4 gap-x-6">
 {ele}
 </Link>
         </> })}
         
    
        
         
        
        </div>
      </Container>
    </div>
  );
};
 
export default Navbar;
