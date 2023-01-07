import Link from 'next/link';
import { useRouter } from 'next/router';
import { CSSProperties, FC } from 'react';

const style:CSSProperties={
  color:'#0070f3',
  textDecoration:'none',
  
}

interface Props{
  text:string;
  href:string;
}
export const ActiveLink: FC<Props> = (props) => {
    const {href, text}= props;
    const {asPath}= useRouter();
  return (
   <Link href={href}>
     <a style={asPath===href?style:undefined}>{text}</a>
   </Link>
  )
}
