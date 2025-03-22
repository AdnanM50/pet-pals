"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LoginForm() {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#e2e2e2] to-[#c9d6ff]">
      <div
        className={`bg-white rounded-[30px] shadow-[0_5px_15px_rgba(0,0,0,0.35)] relative overflow-hidden w-full max-w-[768px] min-h-[480px] ${isActive ? "active" : ""}`}
      >
        <div
          className={`absolute top-0 h-full transition-all duration-1000 ease-in-out left-0 w-1/2 opacity-0 z-[1] ${
            isActive ? "translate-x-full opacity-100 z-[5]" : ""
          } ${isActive ? "animate-move" : ""}`}
        >
          <form className="bg-white flex flex-col items-center justify-center h-full px-10">
            <h1 className="text-2xl mb-5 font-bold">Create Account</h1>
            
          
            <Input
              type="text"
              placeholder="Name"
              className="bg-[#eee] border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
            />
            <Input
              type="email"
              placeholder="Email"
              className="bg-[#eee] border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
            />
            <Input
              type="password"
              placeholder="Password"
              className="bg-[#eee] border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
            />
            <Button className="bg-[#512da8] hover:bg-[#4527a0] text-white text-xs py-2.5 px-11 border border-transparent rounded-lg font-semibold tracking-wider uppercase mt-2.5 cursor-pointer">
              Sign Up
            </Button>
          </form>
        </div>

        {/* Sign In Form */}
        <div
          className={`absolute top-0 h-full transition-all duration-1000 ease-in-out left-0 w-1/2 z-[2] ${
            isActive ? "translate-x-full" : ""
          }`}
        >
          <form className="bg-white flex flex-col items-center justify-center h-full px-10">
            <h1 className="text-2xl font-bold">Sign In</h1>
           
            <span className="text-xs">or use your email password</span>
            <Input
              type="email"
              placeholder="Email"
              className="bg-[#eee] border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
            />
            <Input
              type="password"
              placeholder="Password"
              className="bg-[#eee] border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
            />
            <a href="#" className="text-[#333] text-xs no-underline my-4 mx-0">
              Forget Your Password?
            </a>
            <Button className="bg-[#512da8] hover:bg-[#4527a0] text-white text-xs py-2.5 px-11 border border-transparent rounded-lg font-semibold tracking-wider uppercase mt-2.5 cursor-pointer">
              Sign In
            </Button>
          </form>
        </div>

        {/* Toggle Container */}
        <div
          className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all duration-1000 ease-in-out z-[1000] ${
            !isActive
              ? "rounded-tl-[150px] rounded-bl-[100px]"
              : "-translate-x-full rounded-tr-[150px] rounded-br-[100px]"
          }`}
        >
          <div
            className={`bg-gradient-to-r from-[#5c6bc0] to-[#512da8] text-white relative -left-full h-full w-[200%] transition-all duration-1000 ease-in-out ${
              isActive ? "translate-x-1/2" : "translate-x-0"
            }`}
          >
            {/* Toggle Left Panel */}
            <div
              className={`absolute w-1/2 h-full flex flex-col items-center justify-center px-8 text-center top-0 -translate-x-full transition-all duration-1000 ease-in-out ${
                isActive ? "translate-x-0" : ""
              }`}
            >
              <h1 className="text-2xl font-bold">Welcome Back!</h1>
              <p className="text-sm leading-5 tracking-wide my-5">
                Enter your personal details to use all of site features
              </p>
              <Button
                onClick={() => setIsActive(false)}
                variant="outline"
                className="bg-transparent text-white hover:text-white hover:bg-[#4527a0]/20 text-xs py-2.5 px-11 border border-white rounded-lg font-semibold tracking-wider uppercase mt-2.5 cursor-pointer"
              >
                Sign In
              </Button>
            </div>

            {/* Toggle Right Panel */}
            <div
              className={`absolute w-1/2 h-full flex flex-col items-center justify-center px-8 text-center top-0 right-0 transition-all duration-1000 ease-in-out ${
                isActive ? "translate-x-full" : ""
              }`}
            >
              <h1 className="text-2xl font-bold">Hello, Friend!</h1>
              <p className="text-sm leading-5 tracking-wide my-5">
                Register with your personal details to use all of site features
              </p>
              <Button
                onClick={() => setIsActive(true)}
                variant="outline"
                className="bg-transparent text-white hover:text-white hover:bg-[#4527a0]/20 text-xs py-2.5 px-11 border border-white rounded-lg font-semibold tracking-wider uppercase mt-2.5 cursor-pointer"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

