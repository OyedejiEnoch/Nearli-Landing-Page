"use client"
import Tagline from '@/components/Tagline';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Store, Image, Users } from 'lucide-react';

const steps = [
  {
    icon: Store,
    number: "01",
    title: "Create Your Store",
    description: "Set up your digital storefront in minutes. Add your business name, logo, and description. No technical skills needed.",
    color: "from-purple-500 to-blue-500"
  },
  {
    icon: Image,
    number: "02",
    title: "Post Your Products",
    description: "Upload product photos, set prices, and write descriptions. Your products become discoverable social content automatically.",
    color: "from-blue-500 to-purple-500"
  },
  {
    icon: Users,
    number: "03",
    title: "Get Discovered",
    description: "Customers find you through our location-based discovery feed. Build followers, get engagement, and grow your sales organically.",
    color: "from-purple-600 to-blue-600"
  }
];
export function HowItWorks() {

  useGSAP(()=>{

    const tl =gsap.timeline({
      scrollTrigger:{
        trigger:'#how-it-works',
        start:'top 55%',
      }
    })

        tl.from("#how-it-works h2", {opacity:0, duration:0.7, ease:"power1.inOut"})
        tl.from("#how-it-works p", {opacity:0, duration:0.6, ease:"power1.inOut"})

  },[])

  return (
    <section id="how-it-works" className="py-16 md:py-24 lg:py-32 bg-linear-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          <Tagline text='How it Works' />
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-gray-900 mb-6">
            From Setup to Sales in 3 Simple Steps
          </h2>
          <p className="text-sm md:text-lg lg:text-xl text-gray-600 font-light">
            Start selling today with the easiest platform built for entrepreneurs like you
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative mb-16 lg:mb-20 last:mb-0"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-22 top-40 w-0.5 h-40 bg-linear-to-b from-purple-300 to-blue-300"></div>
              )}
              
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* Left Side - Icon and Title */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-start gap-8">
                    <div className={`w-20 h-20 bg-linear-to-br ${step.color} rounded-3xl flex items-center justify-center shrink-0 shadow-xl shadow-purple-500/20`}>
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <div className="text-7xl lg:text-8xl font-bold text-gray-300 leading-none mb-4">
                        {step.number}
                      </div>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Side - Visual */}
                <div className={`max-sm:hidden ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-linear-to-br from-purple-50 to-blue-50 rounded-3xl p-12 h-80 flex items-center justify-center border border-purple-100 shadow-lg shadow-purple-500/5">
                    <div className={`w-40 h-40 bg-linear-to-br ${step.color} rounded-full opacity-20 animate-pulse shadow-2xl`}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <button className=" bg-[#0F2854] hover:to-blue-700 text-white px-10 py-5 rounded-xl font-semibold transition-all shadow-md shadow-purple-500/10 hover:shadow-xl hover:shadow-purple-500/10 text-lg">
              Get Started Free
            </button>
            <span className="text-sm text-gray-500 font-medium">No credit card required • Launch in minutes</span>
          </div>
        </div>
      </div>
    </section>
  );
}