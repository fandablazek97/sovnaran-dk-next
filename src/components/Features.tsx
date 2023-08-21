import { GiMountaintop } from 'react-icons/gi'
import { PiButterflyThin, PiHandshakeThin } from 'react-icons/pi'
import Image from 'next/image'

const cards = [
  {
    name: 'Freedom',
    description: 'We believe in the power of freedom that comes with every journey. It is not just about escaping the ordinary; it is about embracing your independence, breaking away from routine, and charting your own course in the world.',
    icon: PiButterflyThin,
  },
  {
    name: 'Connection',
    description: 'Beyond providing top-notch gear, we are dedicated to fostering connections – with nature, with fellow travelers, and with yourself. Our products are designed to enhance your experiences and deepen your bonds, whether you are forging new friendships',
    icon: PiHandshakeThin,
  },
  {
    name: 'Adventure',
    description: 'We thrive on the thrill of exploration. Our products are carefully curated to equip you for the most daring journeys, encouraging you to embrace the unknown and create unforgettable memories.',
    icon: GiMountaintop,
  },
]

export default function Features() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <Image
        src="/road.jpg"
        alt="Road"
        width={1920}
        height={1440}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-30"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Our values</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Discover the core principles that drive us. We are committed to integrity, innovation, and fostering meaningful connections. Embracing these values, we strive to create a positive impact in everything we do.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div key={card.name} className="flex gap-x-4 rounded-xl bg-gray-950/40 p-6 ring-1 ring-inset ring-white/10">
              <card.icon className="h-7 w-7 flex-none text-orange-300" aria-hidden="true" />
              <div className="text-base leading-7">
                <h3 className="font-semibold text-white text-lg lg:text-xl">{card.name}</h3>
                <p className="mt-2 text-gray-300">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}