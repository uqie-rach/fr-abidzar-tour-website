import { PlusDecor, SendIcon } from "@/assets";

const Subscribtion = () => {
  return (
    <section id="subscription" className="mt-40 mb-20 relative px-8">
      <div className="flex justify-center items-center bg-[#F4F1FD] mx-auto w-fit px-4 sm:px-12 lg:px-32 py-16 rounded-4xl relative">
        <img src={PlusDecor} alt="decoration" className="absolute -bottom-full -right-full" />
        <img src={SendIcon} alt='Abidzar Tour & Travel Contact Info' className="-top-5 -right-5 absolute" />
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-hero/80 leading-12 font-volkhov mb-10">Butuh Bantuan Untuk Perjalanan Anda? <br /> Kami Siap Mendukung!</h2>
          <a href="https://wa.me/+6281231090280" target="_blank" className="py-4 px-8 text-white font-bold text-base md:text-lg rounded-lg shadow-primary bg-primary">Hubungi Kami</a>
        </div>
      </div>
    </section>
  )
}

export default Subscribtion;
