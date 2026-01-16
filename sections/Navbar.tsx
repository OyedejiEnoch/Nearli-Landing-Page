import { Button } from '@/components/ui/button'
import { Store } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full px-4 lg:px-6 py-6'>
        <div className='max-w-7xl mx-auto flex items-center justify-between'>
            <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-linear-to-br from-purple-500 via-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/20">
                    <Store className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Nearli
                </span>
            </div>

            <div className='hidden md:flex items-center gap-6'>
                <a
                    href="#features"
                    className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                >
                    Features
                </a>
                <a
                    href="#how-it-works"
                    className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                >
                    How It Works
                </a>
                <Button
                    variant="ghost"
                    size="sm"
                    className="hover:font-bold px-6 py-5 bg-linear-to-br bg-[#0F2854] hover:bg-[#0b1f43] text-white"
                >
                    Sign In
                </Button>
            </div>
        </div>
      
    </nav>
  )
}

export default Navbar
Navbar