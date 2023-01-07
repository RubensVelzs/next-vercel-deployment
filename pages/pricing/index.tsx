import Link from 'next/link';
import { MainLayout } from '../../components/Layuouts/MainLayout';

export default function PricingPage(){

    return(
        <MainLayout>
            <h1>Pricing page</h1>
            <h1 className={"title"}>
                Ir a <Link href="/home">About</Link>
            </h1>

            <p className={"description"}>
              Get started by editing{' '}
              <code className={"code"}>pages/princing/index.js</code>
            </p>

        </MainLayout>
    )
}
