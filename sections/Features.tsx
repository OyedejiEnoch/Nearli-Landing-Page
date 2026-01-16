"use client"
import Tagline from '@/components/Tagline';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Heart, MapPin, MessageSquare, BarChart3, Smartphone, UserPlus, Tag } from 'lucide-react';
import { useRef } from 'react';

const features = [
  {
    icon: Heart,
    title: "Social Product Posts",
    description: "Every product you list becomes engaging social content that customers can like, comment on, and share"
  },
  {
    icon: UserPlus,
    title: "Store Follows & Engagement",
    description: "Build a loyal following. Customers can follow your store and get notified when you post new products"
  },
  {
    icon: MapPin,
    title: "Location-Based Discovery",
    description: "Get discovered by customers nearby. Our algorithm shows your products to people in your area first"
  },
  {
    icon: BarChart3,
    title: "Seller Dashboard",
    description: "Track views, likes, followers, and sales. Understand what products resonate with your audience"
  },
  {
    icon: MessageSquare,
    title: "Direct Messaging",
    description: "Chat with customers directly. Answer questions, negotiate, and close sales in one place"
  },
  {
    icon: Smartphone,
    title: "Mobile-First Experience",
    description: "Built for the way you work. Manage your entire business from your phone, anywhere, anytime"
  }
];
export function Features() {
    const featuresRef = useRef<(HTMLDivElement | null)[]>([])

    useGSAP(()=>{

    const tl =gsap.timeline({
      scrollTrigger:{
        trigger:'#features',
        start:'top 35%',
      }
    })

        // tl.from("#features h2", {opacity:0, duration:0.7, ease:"power1.inOut"})
        // tl.from("#features p", {opacity:0, duration:0.6, ease:"power1.inOut"})
      .to(featuresRef.current, { //animating 
        y: 0,
        delay:0.2,
        opacity: 1,
        duration: 1.3,
        stagger: 0.18,
        ease: "back.out",
        
      }, '-=0.2');

  },[])

  return (
    <section id="features" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
            <Tagline text='Features' />

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-900 mb-6 font-medium">
            Everything You Need to Succeed
          </h2>
          <p className="text-sm md:text-lg lg:text-xl text-gray-600">
            Powerful tools designed for small businesses, not enterprise complexity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
               ref={(el) => { featuresRef.current[index] = el }}
              className="group translate-y-25 opacity-0 relative bg-white rounded-3xl p-8 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 border border-gray-200"
            >
              <div className="w-16 h-16 bg-linear-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/20">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className="mt-24 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center bg-linear-to-br from-purple-50 via-blue-50 to-purple-50 rounded-3xl p-10 md:p-14 lg:p-16 shadow-xl shadow-purple-500/5 border border-purple-100">
            <div>
              <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 leading-tight">
                Designed for Mobile-First Users
              </h3>
              <p className="text-lg md:text-xl text-gray-600 mb-8 font-light leading-relaxed">
                In emerging markets, your phone is your office. We built our platform mobile-first because that's how you and your customers actually work.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-7 h-7 bg-linear-to-br bg-[#0F2854] rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-sm shadow-purple-500/10">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 text-lg">Fast loading even on slow connections</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-7 h-7 bg-linear-to-br bg-[#0F2854] rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-sm shadow-purple-500/10">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 text-lg">Works offline with smart caching</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-7 h-7 bg-linear-to-br bg-[#0F2854] rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-sm shadow-purple-500/10">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 text-lg">Optimized for low data usage</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1766806756904-bad81fe3b104?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRwbGFjZSUyMG1vYmlsZSUyMHBob25lJTIwc2hvcHBpbmd8ZW58MXx8fHwxNzY3NzMwNzMzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Mobile shopping"
                className="rounded-3xl shadow-2xl border border-purple-200"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}