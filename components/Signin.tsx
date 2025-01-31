// import Note from '../icons/Note'
import { Input } from './Input'
import Button from './Button'
import PortfolioIcon from './icons/PortfolioIcon'
import Google from './icons/Google'

const Signin = () => {
  return (
    <div className=''>
        <div className='flex items-center gap-4 justify-center mt-12'>
            <PortfolioIcon/>
            {/* <p className='text-2xl tracking-wide font-semibold text-white'>Welcome to SuperMemory</p> */}
            <p className='text-3xl tracking-tight  font-semibold text-white font-sans'>Welcome to SuperMemory</p>
        </div>
        <div className='bg-[#272525] mx-24 p-12 mt-6 rounded-lg flex flex-col gap-3'>
            <div className='flex flex-col gap-1'>
                <p className=' text-slate-200 font-semibold text-base'>Email</p>
                <Input type="text" placeholder="Your Email address"/>
            </div>
            <div className='flex flex-col gap-1'>
                <p className=' text-slate-200 font-semibold text-base'>Password</p>
                <Input type="text" placeholder="Enter Password"/>
            </div>
            <div className='flex flex-col gap-3 mt-4'>
                <Button variant='dark' fullWidth={true}>
                    Continue
                </Button>
                <p className='text-slate-300 font-medium text-base text-center'>OR</p>
                <Button fullWidth={true} icon={<Google/>} variant="light">
                    Signin with Google
                </Button>
            </div>
            <div className='flex gap-2 justify-center'>
            <p className='text-slate-300'>Don't have an account?</p>
            <p className='text-blue-300 font-medium cursor-pointer hover:underline'>Sign up</p>
            </div>
        </div>
    </div>
  )
}

export default Signin