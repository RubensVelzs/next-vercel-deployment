import Link from "next/link";
import { MainLayout } from "../../components/Layuouts/MainLayout";

export default function ContactPage(){
    return(
        <MainLayout>
            <h1>Contact page</h1>
            <h1 className={"title"}>
                Ir a <Link href="/about">About</Link>
            </h1>

            <p className={"description"}>
              Get started by editing{' '}
              <code className={"code"}>pages/contact.js</code>
            </p>
        </MainLayout>
    );
}