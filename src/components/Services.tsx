import { services } from "@/utils/constants";

const Service = () => {
  return (
    <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]" id="layanan">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary uppercase">
                Layanan
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-hero sm:text-4xl md:text-[40px]">
                Kami Menyediakan Layanan Terbaik
              </h2>
            </div>
          </div>
        </div>

        <div className="mx-auto flex gap-10 flex-wrap justify-center">
          {
            services?.map((service, idx) => {
              return (
                <ServiceCard
                  key={idx + service?.title}
                  title={service?.title}
                  details={service?.desc}
                  icon={service?.icon}
                />
              )
            })
          }
        </div>
      </div>
    </section>
  );
};

export default Service;


const ServiceCard = ({ icon, title, details }) => {
  return (
    <>
      <div className="w-[250px] px-4 relative">
        <div className="rounded-[20px] p-8 bg-white shadow-2 hover:shadow-xl text-center transition-all group">
          <div className="opacity-0 group-hover:opacity-100 absolute w-[100px] h-[100px] bg-primary rounded-tl-3xl rounded-br-3xl -z-[1] -bottom-10 transition-all group-hover:-bottom-5 -left-5"></div>
          <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl mx-auto">
            <img src={icon} alt={title} />
          </div>
          <h4 className="mb-[14px] text-sm lg:text-base xl:text-lg font-semibold text-hero">
            {title}
          </h4>
          <p className="text-hero/60">{details}</p>
        </div>
      </div>
    </>
  );
};
