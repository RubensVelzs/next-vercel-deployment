import { FC, ReactNode } from "react"

interface IDarkLayoutProps{
  children :ReactNode
}
export const DarkLayout: FC<IDarkLayoutProps> = (props):JSX.Element => {
  const {children}= props;
  return (
    <div style={{backgroundColor: 'rgba(0,0,0,0.3)', borderRadius:'5px', padding:'12px'}}>
        <h3>Dark Layout</h3>
        <div>
           {children}  
        </div>
    </div>
  )
}

