"use client";
import { Input } from "./Input";
import Button from "./Button";
import PortfolioIcon from "./icons/PortfolioIcon";
import Google from "./icons/Google";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Signup = () => {
    const router=useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleNameChange=(ip:string)=>setName(ip);
  const handleEmailChange=(ip:string)=>setEmail(ip);
  const handlePasswordChange=(ip:string)=>setPassword(ip);

  async function handleSignup(){
    try{
        const response=await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/signup`,{
            email,password,name
        });
        if(response.status==201){
            router.push("/signin");
        }
    }catch(e){
        console.log(e);
    }
  }
  return (
    <div className="">
      <div className="flex items-center gap-4 justify-center">
        {/* <PortfolioIcon /> */}
        <p className="text-2xl tracking-tight font-bold text-white font-sans">Register Account</p>
      </div>
      <div className="bg-[#272525] p-4 px-12 mt-2 rounded-lg flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <p className=" text-slate-200 font-medium text-base">Name</p>
          <Input type="text" placeholder="Your Name" inputChange={handleNameChange} />
        </div>
        <div className="flex flex-col gap-1">
          <p className=" text-slate-200 font-medium text-base">Email</p>
          <Input type="text" placeholder="Your Email address" inputChange={handleEmailChange} />
        </div>
        <div className="flex flex-col gap-1">
          <p className=" text-slate-200 font-medium text-base">Password</p>
          <Input type="text" placeholder="Enter Password" inputChange={handlePasswordChange} />
        </div>
        <div className="flex flex-col gap-3 mt-4">
          <Button variant="dark" fullWidth={true} onClick={handleSignup} defaultStyle="tracking-wider font-extrabold">
            Register
          </Button>
          <p className="text-slate-300 font-medium text-sm text-center">OR</p>
          <Button fullWidth={true} icon={<Google />} variant="light" defaultStyle="tracking-wide font-extrabold">
            Signin with Google
          </Button>
        </div>
        <div className="flex gap-2 justify-center">
          <p className="text-slate-300 text-sm">Already have an account?</p>
          <p
            className="text-blue-400 text-sm font-medium cursor-pointer hoverunderline"
            onClick={() => {
              router.push("/signin");
            }}
          >
            Signin
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
