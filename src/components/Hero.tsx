import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import Image from 'next/image'
import { HiMenu, HiX } from "react-icons/hi"
import Logo from './Logo'

const navigation = [
  { name: 'About us', href: '#about-us' },
  { name: 'Contact', href: '#contact' },
  { name: 'E-shop', href: 'https://www.sovnaran.cz', external: true },
]

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl">
          <div className="px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
            <nav className="flex items-center justify-between lg:justify-start" aria-label="Global">
              <a className="p-1.5">
                <span className="sr-only">Sovnaran</span>
                <Logo className='w-32 h-min' />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <HiMenu className="h-6 w-6" aria-hidden="true" />
              </button>
              <div className="hidden lg:ml-12 lg:flex lg:gap-x-14">
                {navigation.map((item) => (
                  <a 
                    key={item.name} 
                    href={item.href} 
                    target={item.external ? "_blank" : "_self"}
                    className="text-sm font-semibold leading-6 text-gray-900" 
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
                <Logo className='w-32 h-min' />
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <HiX className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target={item.external ? "_blank" : "_self"}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  At Sovnaran, we are more than just a store
                </h1>
                <p className="mt-6 leading-8 text-gray-600">
                we are your partners in outdoor adventure. Whether you are an avid hiker, a passionate camper, or a thrill-seeking explorer, we have got the gear you need to make the most of your outdoor experiences. Our handpicked selection of high-quality outdoor equipment is designed to withstand the elements and enhance your journey, every step of the way.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#about-us"
                    className="rounded-md bg-orange-600 px-5 py-3 font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            src="/woods.jpg"
            alt="Sovnaran"
            width={1920}
            height={1440}
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
          />
        </div>
      </div>
    </div>
  )
}