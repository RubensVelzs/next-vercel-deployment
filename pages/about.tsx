import Link from 'next/link';
import { DarkLayout } from '../components/Layuouts/DarkLayout';
import { MainLayout } from '../components/Layuouts/MainLayout';

export default function AboutPage(){

    return(
      <>
        
            <h1>About page</h1>
            <h1 className={"title"}>
               Ir a <Link href="/">Home</Link>
            </h1>      
       
      </>
    )
}

AboutPage.getLayout = function getLayout(page:JSX.Element){
   return(
      <MainLayout>
         <DarkLayout>
            {page}
         </DarkLayout>
      </MainLayout>
   )
}