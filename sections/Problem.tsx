"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Users, MessageCircle, TrendingDown, DollarSign } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

  const problems = [
    {
      icon: Users,
      title: "Limited Visibility",
      description: "Your products only reach friends, family and your existing followers, never new customers"
    },
    // {
    //   icon: MessageCircle,
    //   title: "No Way to Be Discovered",
    //   description: "No dedicated platform to browse businesses by what they sell. Unlike restaurants or services, product-based businesses remain invisible to shoppers"
    // },
    {
      icon: MessageCircle,
      title: "WhatsApp Overload",
      description: "Managing orders through DMs is chaotic and unprofessional"
    },
    {
      icon: TrendingDown,
      title: "No Online Presence",
      description: "Building a website is expensive and requires technical skills"
    },
    {
      icon: DollarSign,
      title: "High Marketing Costs",
      description: "Ads are too expensive for small budgets and uncertain returns"
    }
  ];

export function Problem() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

     useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#problem',
                start: 'top 75%'
            }
        })

        tl.from('.price-title', { opacity: 0, duration: 0.5, ease: 'power1.in' })
            //   .to('.price-paragraph', {opacity:1, duration:1}, '-=0.6')
            tl.to(cardsRef.current, {
            y: 0,
            delay:0.2,
            opacity: 1,
            duration: 1.2,
            stagger: 0.22,
            ease: "back.out",
            }, '-=0.3');
    }, [])
  
 

  return (
    <section id='problem' className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-gray-900 mb-6">
            The Reality for Small Businesses
          </h2>
          <p className="problem-paragraph text-sm md:text-lg lg:text-xl text-gray-600">
            Businesses are invisible online, You have amazing products. But your customers? They're limited to your contacts and people who already know you,
            which is a struggle to reach beyond your immediate circle
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              ref={(el) => { cardsRef.current[index] = el }}
              className="translate-y-25 opacity-0  bg-linear-to-br from-gray-50 to-white rounded-3xl p-8 hover:shadow-2xl hover:shadow-purple-500/5 transition-all duration-300 border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-linear-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <problem.icon className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {problem.title}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>


        {/* Testimonial Quote */}
        <div className="mt-20 max-w-4xl mx-auto bg-linear-to-br from-purple-50 via-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 lg:p-14 shadow-xl shadow-purple-500/5 border border-purple-100">
          {/* <div className="flex gap-1 text-purple-500 mb-6 text-xl">
            {[...Array(5)].map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div> */}
          <p className="text-xl md:text-2xl lg:text-2xl text-gray-800 mb-6">
            "I was spending hours on Instagram and WhatsApp just to reach a few customers. I needed something better, something that could help me grow."
          </p>
          <div className="flex items-center gap-4">
            <Image src="/assets/amaka.jpg" alt="Amara K." width={36} height={36} className=' w-14 h-14 object-cover rounded-3xl ring-4 ring-purple-100' />
            <div>
              <div className="font-semibold text-gray-900 text-lg">Amara K.</div>
              <div className="text-base text-gray-600">Jewelry Maker, Lagos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}