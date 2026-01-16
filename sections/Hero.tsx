"use client"
import Tagline from '@/components/Tagline'
import { Button } from '@/components/ui/button'
import { Sparkles } from 'lucide-react'
import { PhoneMockup } from './PhoneMockUp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Hero = () => {

    useGSAP(()=>{
        const tl = gsap.timeline({
           delay:0.5,

        })

        tl.from(".hero-text", {opacity:0, duration:0.7, ease:"power1.inOut"})
        tl.from(".hero-paragraph", {opacity:0, duration:0.6, ease:"power1.inOut"})
        gsap.to(".firstButton", {opacity:1,delay:0.5, duration:0.5, ease:"power1.inOut"})
        gsap.to(".secondButton", {opacity:1, delay:0.7, duration:0.5, ease:"power1.inOut"})

    },[])

  return (
    <section className='hero-section relative overflow-hidden bg-linear-to-br from-white via-blue-50 to-white w-full px-4 lg:px-6 py-12 md:py-20 lg:py-22 '>
      <div className='max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center '>
        {/* left */}
        <div className='max-w-2xl'>
            <Tagline text='Discover businesses around you' icon={<Sparkles className='w-4 h-4' />} />

                <h1 className='hero-text text-4xl md:text-5xl lg:text-6xl xl:text-6xl text-gray-900 mb-8 font-medium'>
                    Stop Selling to your 
                    <span className="block text-transparent bg-clip-text bg-linear-to-r from-purple-600 via-purple-500 to-blue-600 mt-2">Contacts</span>
                    <span className="block text-gray-900 mt-2">
                    Start Selling to your 
                    <span className="text-transparent bg-clip-text bg-[#0F2854]"> City</span>
                </span>
                </h1>

                <p className="hero-paragraph text-sm md:text-lg text-gray-500 mb-10 ">
                    Nearly helps you find, explore, and connect with local businesses near you
                    Instead of searching endlessly or relying on paid ads, we let you scroll through nearby Businesses, 
                    see what they sell, and connect directly with business owners all in one place.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                    size="lg"
                    className="firstButton opacity-0 bg-[#0F2854] hover:bg-[#0c2248] text-white
                    text-lg px-10 py-7 shadow-lg shadow-purple-500/10 hover:shadow-lg hover:shadow-purple-500/10 rounded-2xl transition-all"
                >
                    Join the waitlist
                </Button>
                <Button
                    size="lg"
                    variant="outline"
                    className="secondButton opacity-0 border-2 border-gray-300 hover:border-purple-600 hover:text-purple-600 text-lg px-10 py-7
                     bg-white/80 backdrop-blur-sm rounded-2xl"
                >
                    See How It Works
                </Button>
            </div>
        </div>

        {/* right */}
        <div className='relative lg:pl-8'>
            <PhoneMockup />
        </div>
        
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -z-10 w-125 h-125 bg-linear-to-br from-purple-200 to-blue-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-125 h-125 bg-linear-to-tr from-blue-200 to-purple-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-150 h-150 bg-linear-to-r from-purple-100 to-blue-100 rounded-full blur-3xl opacity-10"></div>

    </section>
  )
}

export default Hero
