import Link from 'next/Link';
import { MainLayout } from '../components/Layuouts/MainLayout';


export default function HomePage() {
  return (
    <MainLayout>
      <h1>Home page</h1>
      <h1 className={"title"}>
        Ir a <Link href="/about">About</Link>
      </h1>

      <p className={"description"}>
        Get started by editing
        <code className={"code"}>pages/index.js</code>
      </p>
    </MainLayout>
  );
}
