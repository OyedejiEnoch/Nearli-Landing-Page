"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Heart, TrendingUp, Globe, Sparkles } from 'lucide-react';
import { useRef } from 'react';

const values = [
  {
    icon: Heart,
    title: "Empowerment",
    description: "Every entrepreneur deserves the tools to succeed, regardless of budget or technical skill"
  },
  {
    icon: TrendingUp,
    title: "Economic Inclusion",
    description: "We're building infrastructure for the next wave of digital entrepreneurs in emerging markets"
  },
  {
    icon: Globe,
    title: "Community First",
    description: "Success isn't about algorithms alone—it's about connecting real people with real products"
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "We're just getting started. AI-powered discovery and smart recommendations are coming soon"
  }
];
export function Trust() {

    
        const trustRef = useRef<(HTMLDivElement | null)[]>([])
    
        useGSAP(()=>{
    
        const tl =gsap.timeline({
          scrollTrigger:{
            trigger:'#trust',
            start:'top 35%',
          }
        })
    
          .to(trustRef.current, { //animating 
            y: 0,
            delay:0.2,
            opacity: 1,
            duration: 1.2,
            stagger: 0.22,
            ease: "back.out",
            
          }, '-=0.2');
    
      },[])

  return (
    <section id='trust' className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-900 mb-6 font-medium">
            Our Vision: Make Every Small Business Visible
          </h2>
          <p className="text-sm md:text-lg lg:text-xl text-gray-600 font-light">
            We believe that talent and hard work are everywhere, but opportunity isn't. We're changing that.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto mb-24">
          {values.map((value, index) => (
            <div 
              key={index}
              ref={(el) => { trustRef.current[index] = el }}
              className="text-center p-8 translate-y-25 opacity-0"
            >
              <div className="w-18 h-18 bg-linear-to-br from-purple-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-purple-500/20">
                <value.icon className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="max-w-6xl mx-auto bg-linear-to-br from-gray-900 to-gray-800 rounded-3xl p-10 md:p-14 lg:p-16 text-white shadow-2xl">
          <div className="text-center mb-14">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Growing Together
            </h3>
            <p className="text-gray-400 text-lg md:text-xl font-light">
              Real impact, real businesses, real growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400 mb-4">
                92%
              </div>
              <div className="text-gray-400 text-base leading-relaxed">
               Possibility Of sellers getting their first sale within 7 days
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400 mb-4">
                3.5x
              </div>
              <div className="text-gray-400 text-base leading-relaxed">
                Average increase in monthly sales after joining
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400 mb-4">
                24/7
              </div>
              <div className="text-gray-400 text-base leading-relaxed">
                Your store works for you, even while you sleep
              </div>
            </div>
          </div>
        </div>

        {/* Future Vision */}
        <div className="mt-24 max-w-5xl mx-auto">
          <div className="bg-linear-to-br from-purple-50 via-blue-50 to-purple-50 rounded-3xl p-10 md:p-12 lg:p-14 border border-purple-100 shadow-xl shadow-purple-500/5">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 bg-linear-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/20">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
                  What's Next
                </h3>
                <p className="text-lg text-gray-600 font-light">
                  We're constantly evolving to serve you better
                </p>
              </div>
            </div>
            <ul className="space-y-4 ml-0 lg:ml-24">
              <li className="flex items-start gap-4">
                <span className="text-purple-600 font-bold text-xl">→</span>
                <span className="text-gray-700 text-lg">AI-powered product recommendations to match customers with your products</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-purple-600 font-bold text-xl">→</span>
                <span className="text-gray-700 text-lg">Smart pricing insights based on similar products and local demand</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-purple-600 font-bold text-xl">→</span>
                <span className="text-gray-700 text-lg">Automated inventory management and restocking reminders</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-purple-600 font-bold text-xl">→</span>
                <span className="text-gray-700 text-lg">Multi-language support to reach customers across borders</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}