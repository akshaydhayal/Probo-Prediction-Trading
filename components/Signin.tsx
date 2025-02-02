"use client";
import { Input } from "./Input";
import Button from "./Button";
import Google from "./icons/Google";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { updateUser } from "@/store/userSlice";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const dispatch=useDispatch();

  function inputEmailChange(ip: string) {
    setEmail(ip);
  }
  function inputPasswordChange(ip: string) {
    setPassword(ip);
  }
  async function getUserData(token:string){
    try{
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user`,{
        headers:{token}
      });
      if(response.status==200){
        dispatch(updateUser(response.data.user));
        console.log("user state in redux updated");
      }
    }catch(e){
      console.log(e);
    }
  }
  async function handleSignin() {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/signin`, {
        email,
        password,
      });
      if (response.status == 200) {
        localStorage.setItem("token", response.data.jwtToken);
        getUserData(response.data.jwtToken);
        router.push("/");
      }
    } catch (e) {
      console.log(e);
    }
  }
  
  return (
    <div className="">
      <div className="flex items-center gap-4 justify-center">
        <p className="text-2xl tracking-tight font-bold text-slate-200 font-sans">Welcome back to Probo</p>
      </div>
      <div className="bg-[#272525] p-4 px-12  mt-2 rounded-lg flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <p className=" text-slate-200 font-medium text-base">Email</p>
          <Input type="text" placeholder="Your Email address" inputChange={inputEmailChange} />
        </div>
        <div className="flex flex-col gap-1">
          <p className=" text-slate-200 font-medium text-base">Password</p>
          <Input type="text" placeholder="Enter Password" inputChange={inputPasswordChange} />
        </div>
        <div className="flex flex-col gap-3 mt-4">
          <Button variant="dark" fullWidth={true} onClick={handleSignin} defaultStyle="tracking-wider font-extrabold">
            Signin
          </Button>
          <p className="text-slate-300 font-medium text-sm text-center">OR</p>
          <Button fullWidth={true} icon={<Google />} variant="light" defaultStyle="tracking-wider font-extrabold">
            Signin with Google
          </Button>
        </div>
        <div className="flex gap-2 justify-center">
          <p className="text-slate-300 text-sm">{`Don't have an account?`}</p>
          <p
            className="text-blue-400 text-sm font-medium cursor-pointer hover:underline"
            onClick={() => {
              router.push("/signup");
            }}
          >
            Sign up
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
