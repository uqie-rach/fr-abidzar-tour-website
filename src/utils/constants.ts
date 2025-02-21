import { BromoImage, JuandaImage, KirimPaketImage, ServiceImage1, ServiceImage2, ServiceImage3, ServiceImage4, SurabayaImage, WisataReligiImage } from "@/assets"

export const destinations = [
  {
    title: 'Wisata Religi',
    image: WisataReligiImage
  },
  {
    title: 'Malang - Surabaya dan Sebaliknya',
    image: SurabayaImage
  },
  {
    title: 'Bandara Juanda',
    image: JuandaImage
  },
  {
    title: 'Tour Wisata Bromo',
    image: BromoImage
  },
  {
    title: 'Kirim Paket Instan',
    image: KirimPaketImage
  },
];

export const services = [
  {
    title: 'Mobil MPV & Travel',
    desc: 'Booking berbagai pilihan Travel nyaman untuk perjalanan Anda.',
    icon: ServiceImage1
  },
  {
    title: 'Fleksibel & Praktis',
    desc: 'Layanan booking harian kapanpun anda butuhkan.',
    icon: ServiceImage2
  },
  {
    title: 'Antar Jemput Tepat Waktu',
    desc: 'Layanan ke bandara, stasiun, dan lokasi lainnya.',
    icon: ServiceImage3
  },
  {
    title: 'Perjalanan Sesuai Kebutuhan',
    desc: 'Wisata, bisnis, atau acara khusus—kami siap melayani.',
    icon: ServiceImage4
  },
]

export const homePageRoutes = [
  {
    href: "/#home",
    label: "Home",
  },
  {
    href: "/#layanan",
    label: "Layanan",
  },
  {
    href: "/#destinasi",
    label: "Destinasi",

  },
  {
    href: "/#booking",
    label: "Booking",
  },
  {
    href: "/#testimonial",
    label: "Testimonial",
  }
]
