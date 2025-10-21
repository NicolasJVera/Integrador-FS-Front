import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import Routes from "./routes/routes"
import { Toaster } from 'react-hot-toast'
// import { useEffect } from 'react'
// import { useAuth } from './hooks/useAuth'



function App() {
  // const { checkAuth } = useAuth();

  // useEffect(() => {
  //   checkAuth();
  //  }, []);

  return (
    <>
    <Navbar />
    <Toaster position="top-right" toastOptions={{ duration: 3500 }} />
    <Routes />
    <Footer />
    </>
  )
}

export default App
