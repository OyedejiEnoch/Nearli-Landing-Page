"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Store, Palette, ShoppingBag, Briefcase } from 'lucide-react';
import { useRef } from 'react';

const users = [
  {
    icon: Store,
    title: "Solo Entrepreneurs",
    description: "Running your business alone? Get a professional storefront without hiring developers or designers.",
    examples: ["Home bakers", "Beauty product sellers", "Clothing resellers"]
  },
  {
    icon: Palette,
    title: "Creators & Makers",
    description: "Turn your craft into income. Showcase handmade products to customers who value unique, authentic items.",
    examples: ["Jewelry makers", "Artists", "Handcraft artisans"]
  },
  {
    icon: ShoppingBag,
    title: "Small Retail Businesses",
    description: "Expand beyond your physical location. Reach customers who can't visit your shop in person.",
    examples: ["Boutiques", "Local shops", "Pop-up vendors"]
  },
  {
    icon: Briefcase,
    title: "Informal Vendors",
    description: "Transitioning online? Start with a simple store and upgrade as you grow. No complicated setup.",
    examples: ["Market traders", "Street vendors", "Side hustlers"]
  }
];
export function TargetUsers() {

  
      const targetUsersRef = useRef<(HTMLDivElement | null)[]>([])
  
      useGSAP(()=>{
  
      const tl =gsap.timeline({
        scrollTrigger:{
          trigger:'#targetUsers',
          start:'top 35%',
        }
      })
  
        .to(targetUsersRef.current, { //animating 
          y: 0,
          delay:0.2,
          opacity: 1,
          duration: 1.2,
          stagger: 0.22,
          ease: "back.out",
          
        }, '-=0.2');
  
    },[])

  return (
    <section id='targetUsers' className="py-16 md:py-24 lg:py-32 bg-linear-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-block px-6 py-3 bg-linear-to-r from-purple-100 to-blue-100 rounded-full text-purple-700 text-sm font-semibold mb-6 shadow-sm">
            Who It's For
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-gray-900 mb-6">
            Built for Every Type of Entrepreneur
          </h2>
          <p className="text-sm md:text-lg lg:text-xl text-gray-600">
            Whether you're just starting or ready to scale, we're here to help you grow
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {users.map((user, index) => (
            <div 
              key={index}
              ref={(el) => { targetUsersRef.current[index] = el }}
              className="bg-white translate-y-25 opacity-0 rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 transition-all border border-gray-200"
            >
              <div className="w-16 h-16 bg-linear-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20">
                <user.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {user.title}
              </h3>
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                {user.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {user.examples.map((example, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 bg-linear-to-r from-purple-50 to-blue-50 text-[#0F2854] text-sm rounded-full font-medium border border-purple-100"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Success Story */}
        <div className="mt-24 max-w-6xl mx-auto">
          <div className="bg-linear-to-br from-purple-600 via-[#0F2854] to-[#0F2854] rounded-3xl p-8 md:p-12 lg:p-16 text-white shadow-2xl shadow-purple-500/20">
            <div className="grid lg:grid-cols-3 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-2">
                <div className="text-sm font-bold text-purple-200 mb-4 uppercase tracking-wider">SUCCESS STORY</div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  "I believe i can grow from 20 sales a month to 200+"
                </h3>
                <p className="text-lg md:text-xl text-purple-50 leading-relaxed mb-8 font-light">
                  "At my business, I am only selling to people who already know me. Having a solution such as this, i believe customers from across the city can find me every day through the discovery feed."
                </p>
                <div className="flex items-center gap-5">
                  <div>
                    <div className="font-semibold text-lg">Joke M.</div>
                    <div className="text-base text-purple-100">Cake vendor, Lagos</div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <img 
                  src="https://images.unsplash.com/photo-1655720357761-f18ea9e5e7e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZW50cmVwcmVuZXVyJTIwc21hbGwlMjBidXNpbmVzc3xlbnwxfHx8fDE3Njc3MzA3MzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Entrepreneur"
                  className="rounded-3xl shadow-2xl border-4 border-white/20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}