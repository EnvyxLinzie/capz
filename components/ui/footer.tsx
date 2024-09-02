import React from 'react';
import Link from 'next/link';
import { IconMapPin, IconPhone } from '@tabler/icons-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Link href="/" className="inline-block" aria-label="Home">
                  <Image
                    src="/images/capslogo.png"
                    alt="Site Logo"
                    width={62} // adjust size as needed
                    height={62} // adjust size as needed
                    className="w-8 h-8"
                  />
                </Link>
              </div>
              <div className="text-gray-400 flex items-center">
                <IconMapPin className="w-5 h-5 mr-2 text-purple-600" />
                Jl. Prof. Dr. Suharso Ruko Wello No.1 53113 Purwokerto Jawa Tengah
              </div>
              <div className="text-gray-400 flex items-center">
                <IconPhone className="w-5 h-5 mr-2 text-purple-600" />
                +62 815-7540-3733
              </div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">

              {/* 2nd block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Category</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Accessories</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Hardware</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Software</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Maintenance</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Training</Link>
                  </li>
                </ul>
              </div>

              {/* 3rd block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Resources</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="https://www.facebook.com/iteamcaps" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Facebook</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://www.tiktok.com/@candraapple" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Tiktok</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://www.instagram.com/candraapplee/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Instagram</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://www.youtube.com/channel/UCqTgdG8EYOZH9fSlzMTzZAA" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Youtube</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://blog.caps.co.id" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Blog</Link>
                  </li>
                </ul>
              </div>

              {/* 4th block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Company</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="https://blog.caps.co.id" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Capspoint</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://academy.caps.co.id" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Caps Academy</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://capscyber.com" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Capscyber</Link>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-center">

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">
              &copy; Caps.co.id. All rights reserved | Created By{' '}
              <Link href="https://capscyber.com" className="text-purple-600 hover:underline">
                Capscyber
              </Link>
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
}
