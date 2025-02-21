import { CompanyLogo } from '@/assets';
import { homePageRoutes } from '@/utils/constants';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [isOnTop, setIsOnTop] = useState<boolean>(true);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setIsOnTop(false);
    } else {
      setIsOnTop(true);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`py-20 w-full z-20 ${isOnTop ? '' : 'bg-white border-b border-gray-100'} transition-colors`}>
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
                <div className="flex-shrink-0">
                    <a href="/#home" className="flex">
                        <img className="w-44 sm:w-auto" src={CompanyLogo} alt="Abidzar Tour & Travel Company Logo" />
                    </a>
                </div>

                <button type="button" className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                    {/* s-- Menu open: "hidden", Menu closed: "block" --> */}
                    <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16"></path>
                    </svg>

                    {/* s-- Menu open: "block", Menu closed: "hidden" --> */}
                    <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>

                <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-20">
                  {
                    homePageRoutes?.map((route, idx) => {
                      return (
                        <a key={idx} href={route?.href} title={route?.label} className="text-base text-hero font-medium transition-all duration-200 hover:text-opacity-80"> {route?.label}</a>
                      )
                    })
                  }
                </div>
            </div>
        </div>
    </header>
  )
}

export default Footer;
