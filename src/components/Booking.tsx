import { BookingSectionImage } from "@/assets";
import { bookingSteps } from "@/utils/constants";

const Booking = () => {
  return (
    <div className="relative py-24 sm:py-28 lg:py-36" id="booking">
      <section className="max-w-7xl mx-auto">
          <div className="px-4 sm:px-6 lg:px-8">
              <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                  <div>
                      <p className="text-base font-bold tracking-wider uppercase text-primary">mudah dan cepat</p>
                      <h1 className="mt-4 text-4xl font-bold text-hero lg:mt-8 sm:text-6xl font-volkhov leading-tight capitalize">booking travel dalam 3 langkah mudah</h1>

                      <div>
                        {
                          bookingSteps?.map((step, idx) => {
                            return (
                              <div key={idx} className="flex items-center mt-8">
                                <img src={step?.icon} alt={step?.title} className="w-[48px] h-[48px] object-cover"/>
                                <div className="ml-4">
                                  <h3 className="text-xl font-bold text-hero/70">{step?.title}</h3>
                                  <p className="mt-2 text-gray-500">{step?.desc}</p>
                                </div>
                              </div>
                            )
                          })
                        }
                      </div>
                  </div>
                  <div>
                      <img className="w-full" src={BookingSectionImage} alt="langkah langkah booking travel di Abidzar Tour & Travel" />
                  </div>
              </div>
          </div>
      </section>
    </div>

  )
}

export default Booking;
