import Navbar from "components/Navbar"
import Footer from "components/Footer"

const CommonLayout = ({ children }) => {
    return <>
        <Navbar />
        <main className="min-h-screen">
            {children}
        </main>
        {/*<Footer />*/}
    </>
}

export default CommonLayout