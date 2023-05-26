import { Wrapper } from '../components/Wrapper'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { Outlet } from "react-router-dom";

export const MainLayout: React.FC<{children?: React.ReactNode}> = ({children}) => {
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
