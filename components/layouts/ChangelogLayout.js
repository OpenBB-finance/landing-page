import Footer from "@/components/Footer"
import { MainLogoIcon } from "@/components/Icons"

const ChangelogLayout = ({children}) => {
	return <>
	<div className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
    <header className="flex justify-between items-center py-10">
      <MainLogoIcon className="w-40" />
    </header>
    <div className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0 min-h-screen">
      {children}
    </div>
  </div>
  <Footer/>
  </>
}

export default ChangelogLayout