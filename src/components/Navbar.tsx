import React from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline'
import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  return (
    <nav className='flex flex-row items-center justify-around w-screen h-12 text-white bg-black'>
        <Bars3Icon className='w-8 h-8 text-white'/>
        <h1 className='text-2xl text-bold'>ACEZONE</h1>
        <ul className='flex flex-row gap-2'>
            <li><MagnifyingGlassCircleIcon className='w-7 h-7'/></li>
            <li><GlobeAltIcon className='w-7 h-7'/></li>
            <li><ShoppingBagIcon className='w-7 h-7'/></li>
    
        </ul>
    </nav>
  )
}
