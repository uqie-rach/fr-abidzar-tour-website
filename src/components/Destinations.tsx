import { NavigationIcon } from "@/assets"
import { destinations } from "@/utils/constants"

const Destinations = () => {
  return (
    <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]" id="destinasi">
      <div className="mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary uppercase">
                Top Selling
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-hero sm:text-4xl md:text-[40px]">
                Destinasi Pilihan & Layanan
              </h2>
            </div>
          </div>
        </div>

        <div className="mx-auto flex gap-10 flex-wrap justify-center">
          {
            destinations?.map((destination, idx) => {
              return (
                <DestinationCard
                  key={idx + destination?.title}
                  title={destination?.title}
                  image={destination?.image}
                />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Destinations

interface DestinationCardProps {
  image: string
  title: string
}

const DestinationCard = ({ image, title } : DestinationCardProps) => {
  return (
    <>
      <div className="w-[315px] h-[415px] overflow-hidden relative shadow-sm-spread rounded-3xl">
        <div className="bg-white group">
          <div className="flex h-[330px] w-full items-center justify-center mx-auto overflow-hidden">
            <img src={image} alt={"Layanan" + title + " Abidzar Tour & Travel"} />
          </div>
          <div className="w-full h-full flex items-center gap-3 p-4">
            <img src={NavigationIcon} alt={"Layanan" + title + " Abidzar Tour & Travel"} />
            <h3 className="text-base font-semibold text-hero text-left">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};
