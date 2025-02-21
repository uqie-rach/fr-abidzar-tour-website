import { HeroImage, HeroBgAccent, PlayButton } from "@/assets"

const Hero = () => {
  return (
    <div className="relative py-24 sm:py-28 lg:py-36" id="home">
      <div className="absolute top-0 right-0 -z-1 w-[55%] md:w-[50%] lg:w-[45%]">
        <img src={HeroBgAccent} alt="Abidzar Tour & Travel Website" className="w-full h-full object-cover"/>
      </div>
      <section className="max-w-7xl mx-auto">
          <div className="px-4 sm:px-6 lg:px-8">
              <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                  <div>
                      <p className="text-base font-bold tracking-wider uppercase text-primary">nyaman dan bebas ribet</p>
                      <h1 className="mt-4 text-4xl font-bold text-hero lg:mt-8 sm:text-6xl xl:text-8xl font-volkhov">Booking mudah, perjalanan aman!</h1>
                      <p className="mt-4 text-base font-medium text-hero/50 lg:mt-8 sm:text-lg">Butuh perjalanan aman, tanpa repot, dan nyaman? Abidzar Tour & Travel siap melayani penjemputan dan pemberangkatan ke berbagai tujuan!</p>

                      <div className="flex items-center flex-wrap md:flex-nowrap gap-4">
                        <a href="#service" title="" className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-secondary rounded-lg lg:mt-16 hover:bg-secondary focus:bg-secondary shadow-secondary" role="button">
                            Pelajari
                            <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </a>
                        <a href="#destinasi" title="" className="inline-flex  gap-4 justify-center items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 rounded-lg lg:mt-16 group" role="button">
                          <div className="w-[40px] h-[40px] rounded-full bg-primary flex items-center justify-center shadow-primary group-hover:rotate-45 transition-transform">
                            <img src={PlayButton} alt="Destinasi Abidzar Tour & Travel" />
                          </div>
                          <span className="text-hero/50">
                            Cek Destinasi
                          </span>
                        </a>
                      </div>
                  </div>

                  <div>
                      <img className="w-full" src={HeroImage} alt="Abidzar Tour & Travel Home Page" />
                  </div>
              </div>
          </div>
      </section>
    </div>

  )
}

export default Hero
