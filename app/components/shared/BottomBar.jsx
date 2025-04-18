import React from 'react'
import Link from 'next/link'

function BottomBar() {
  return (
    <div className='bg-black p-2'>
    <div className="max-w-7xl mx-auto  tex">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-gray-400">
          <p className="">© Copyrights Oxford Center for Leadership</p>
          <div className="flex space-x-6">
            <Link href="/terms-and-conditions" className=" hover:text-blue-900 transition-colors">
              Terms and Conditions
            </Link>
            <Link href="/student-code-of-conduct" className=" hover:text-blue-900 transition-colors">
              Student Code of Conduct
            </Link>
            
          </div>
        </div>
      </div>
      </div>
  )
}

export default BottomBar