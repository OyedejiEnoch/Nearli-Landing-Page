"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Mail } from 'lucide-react';
import { useState } from 'react';


export function Cta() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // In a real implementation, this would connect to a backend
      console.log('Email submitted:', email);
    }
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-linear-to-b from-gray-50 to-white text-[#0F2854] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Ready to Grow Your Business?
          </h2>
          <p className="text-sm md:text-lg lg:text-xl text-[#0F2854] mb-14 max-w-2xl mx-auto">
            Join thousands of entrepreneurs who are already reaching new customers every day. Create your store in minutes.
          </p>

          {!submitted ? (
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-10">
                <div className="flex-1 relative">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-14 pr-6 py-7 text-lg bg-white text-gray-900 border-0 rounded-xl shadow-lg focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <Button 
                  type="submit"
                  size="lg"
                  className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-7 whitespace-nowrap shadow-xl hover:shadow-2xl transition-all text-lg"
                >
                  Get Early Access
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
              <p className="text-base text-purple-500 font-light">
                Join the waitlist • No credit card required • Launch in Q1 2026
              </p>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-3xl p-10 md:p-12 border border-white/20 shadow-2xl">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-4xl">🎉</span>
              </div>
              <h3 className="text-3xl font-bold mb-3">You're on the list!</h3>
              <p className="text-lg text-purple-100 font-light">
                We'll notify you as soon as we launch. Get ready to grow your business!
              </p>
            </div>
          )}

          {/* Trust Indicators */}
          <div className="mt-20 pt-16 border-t border-white/20">
            <div className="grid md:grid-cols-3 gap-10 text-center">
              <div>
                <div className="text-3xl font-bold mb-3">Free to Start</div>
                <div className="text-purple-500 text-base font-light">No upfront costs or hidden fees</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-3">5-Min Setup</div>
                <div className="text-purple-500 text-base font-light">From signup to first product</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-3">24/7 Support</div>
                <div className="text-purple-500 text-base font-light">We're here to help you succeed</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Gradient Orbs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-20"></div>
    </section>
  );
}