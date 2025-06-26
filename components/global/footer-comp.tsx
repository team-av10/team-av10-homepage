import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function FooterComp ()  {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-black ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <Link href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <Image src="/av10-logo.png" width={40} height={40} className="h-8" alt="AV10 Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">AV10 | एवी10 | ஏவி10 </span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <Link href="https://www.linkedin.com/company/105020005/" className="hover:underline me-4 md:me-6">LinkedIn</Link>
                </li>
                <li>
                    <Link href="https://github.com/team-av10" className="hover:underline me-4 md:me-6">Github</Link>
                </li>
                <li>
                    <Link href="https://x.com/teamav10dot" className="hover:underline me-4 md:me-6">X</Link>
                </li>

            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        {/* <FooterTooltip/> */}
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 mt-[-20px]">© 2025 <a href="#" className="hover:underline">AV10-SKCET</a>. All Rights Reserved.</span>
    </div>
    </footer>
  )
}
