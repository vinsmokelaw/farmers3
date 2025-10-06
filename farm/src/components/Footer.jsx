import React from 'react'
import { FiFacebook, FiInstagram, FiLinkedin, FiPhone, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="mt-16 bg-white">
      {/* category + contact strip */}
      <div className="bg-amber-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-5 text-[#404A3D] text-sm font-semibold">
            <span>FARMERS</span>
            <span>•</span>
            <span>ORGANIC</span>
            <span>•</span>
            <span>FOODS</span>
            <span>•</span>
            <span>PRODUCT</span>
          </div>
          <div className="flex items-center gap-6 text-[#404A3D]">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white"><FiPhone /></span>
              <span className="text-sm font-semibold">+1 (212) 255-511</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white"><FiMail /></span>
              <span className="text-sm font-semibold">noreply@pbminfotech.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 text-[#404A3D]">
              <img src="/logo.png" alt="logo" className="h-8 w-auto" />
              <span className="font-semibold text-xl">grimo</span>
            </div>
            <p className="mt-4 text-sm text-[#404A3D]/80 max-w-xs">
              Mauris sed molestie sem. Sed vel vestibulum elit, non accumsan risus.
              In vitae sapien viverra est Duo ei ullum inani senserit.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#404A3D]/30 text-[#404A3D] hover:bg-green-50"><FiFacebook /></a>
              <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#404A3D]/30 text-[#404A3D] hover:bg-green-50"><FiLinkedin /></a>
              <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#404A3D]/30 text-[#404A3D] hover:bg-green-50"><FiInstagram /></a>
            </div>
          </div>
          
          <div className="md:col-span-8">
            <h3 className="text-[#404A3D] text-2xl md:text-[28px] font-semibold max-w-2xl">
              Professional & modern, a theme designed to help your business stand out from the rest.
            </h3>
            <div className="mt-8 grid md:grid-cols-3 gap-8 text-sm">
              <div>
                <div className="font-semibold text-[#404A3D]">Useful Link</div>
                <ul className="mt-3 space-y-2 text-[#404A3D]/80">
                  <li><a href="#" className="hover:underline">Company</a></li>
                  <li><a href="#" className="hover:underline">About</a></li>
                  <li><a href="#" className="hover:underline">Contact</a></li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-[#404A3D]">Working Time</div>
                <ul className="mt-3 space-y-1 text-[#404A3D]/80">
                  <li>Mon - Fri: 9.00am - 5.00pm</li>
                  <li>Saturday: 10.00am - 6.00pm</li>
                  <li>Sunday Closed</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-[#404A3D]">Our Address</div>
                <ul className="mt-3 space-y-1 text-[#404A3D]/80">
                  <li>Old Westbury 256, New York</li>
                  <li>11201, United States</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#404A3D]/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 text-xs text-[#404A3D]/80 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-6">
            <a href="#" className="hover:underline">Terms & Conditions</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
          <span>Copyright © {new Date().getFullYear()} Agrimo, All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  )
}
