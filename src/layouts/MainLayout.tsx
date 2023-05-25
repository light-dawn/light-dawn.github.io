import { Wrapper } from '../components/Wrapper'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { Outlet } from "react-router-dom";

export function MainLayout({children} : {children: React.ReactNode}) {
  return (
    <Wrapper>
      <NavBar></NavBar>
        <Outlet></Outlet>
        {children}
      <Footer></Footer>
    </Wrapper>
  )
}

export default MainLayout
