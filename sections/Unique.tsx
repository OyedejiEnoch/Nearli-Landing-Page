"use client"
import Tagline from '@/components/Tagline';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Zap, Eye, Globe, Shield } from 'lucide-react';
import { useRef } from 'react';

const differences = [
  {
    icon: Eye,
    title: "Discovery Over Ads",
    traditional: "Pay for every click, compete with big brands",
    our_way: "Get discovered organically through our social feed algorithm"
  },
  {
    icon: Globe,
    title: "Global + Local Reach",
    traditional: "Limited to your social media followers",
    our_way: "Reach nearby customers and worldwide shoppers automatically"
  },
  {
    icon: Zap,
    title: "Social + Commerce",
    traditional: "Choose between social media OR e-commerce",
    our_way: "Get both in one platform - engage and sell seamlessly"
  },
  {
    icon: Shield,
    title: "Fair Visibility",
    traditional: "Big sellers dominate, small stores are invisible",
    our_way: "Every store gets a chance to be seen and grow"
  }
];
export function Unique() {

    const uniqueRef = useRef<(HTMLDivElement | null)[]>([])

    useGSAP(()=>{

    const tl =gsap.timeline({
      scrollTrigger:{
        trigger:'#unique',
        start:'top 35%',
      }
    })

      .to(uniqueRef.current, { //animating 
        y: 0,
        delay:0.2,
        opacity: 1,
        duration: 1.2,
        stagger: 0.22,
        ease: "back.out",
        
      }, '-=0.2');

  },[])

  return (
    <section id='unique' className="py-16 md:py-24 lg:py-32 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">

          <Tagline text='Our Unique Approach' />
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-8 font-medium">
            Built for Small Businesses,
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400 mt-2">
              Not Big Corporations
            </span>
          </h2>
          <p className="text-sm md:text-lg lg:text-xl text-gray-400">
            We're not another marketplace that favors big sellers. We level the playing field.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto mb-20">
          {differences.map((diff, index) => (
            <div 
              key={index}
              ref={(el) => { uniqueRef.current[index] = el }}
              className="bg-gray-800/50 translate-y-25 opacity-0 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-gray-700 hover:border-purple-600/50 transition-all shadow-xl shadow-purple-900/5"
            >
              <div className="flex items-start gap-5 mb-6">
                <div className="w-14 h-14 bg-linear-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/20">
                  <diff.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold pt-2">{diff.title}</h3>
              </div>
              
              <div className="space-y-4 md:ml-10">
                <div className="flex items-start gap-3">
                  <span className="text-red-400 text-xl shrink-0">✕</span>
                  <p className="text-gray-400 text-base">{diff.traditional}</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-xl shrink-0">✓</span>
                  <p className="text-gray-200 text-base font-medium">{diff.our_way}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          <div className="text-center p-8 bg-gray-800/30 rounded-3xl border border-gray-700">
            <div className="text-sm text-gray-500 mb-3 font-medium uppercase">Traditional Marketplaces</div>
            <div className="text-xl lg:text-2xl font-semibold text-gray-400">Big sellers win</div>
          </div>
          <div className="text-center p-8 bg-linear-to-br from-purple-600 to-blue-600 rounded-3xl shadow-2xl shadow-purple-500/20 transform md:scale-105 border border-purple-400">
            <div className="text-sm text-purple-100 mb-3 font-semibold uppercase tracking-wide">Nearli</div>
            <div className="text-2xl lg:text-3xl font-bold">Everyone gets a chance</div>
          </div>
          <div className="text-center p-8 bg-gray-800/30 rounded-3xl border border-gray-700">
            <div className="text-sm text-gray-500 mb-3 font-medium uppercase">Social Media</div>
            <div className="text-xl lg:text-2xl font-semibold text-gray-400">Only your friends see</div>
          </div>
        </div>
      </div>
    </section>
  );
}