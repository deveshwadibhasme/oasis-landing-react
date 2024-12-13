import Button from "./Button"
import { motion } from "motion/react"
// import Wave from '../assets/wave.png'

const Home = () => {
  return (
    <div className='max-w-screen-2xl -mt-14 relative flex flex-col gap-6 justify-center items-center mx-auto min-h-[110vh] bg-[linear-gradient(rgb(127,2,130),rgb(113,70,206))] text-center'>
      <motion.h1
        initial={{ y: 20, opacity: 0.5 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{duration:0.8}}
        className="text-3xl md:text-5xl text-white font-extrabold">Build Your IT Here</motion.h1>
      <motion.h3
        initial={{ y: -20, opacity: 0.5 }}
        animate={{ y: 0, opacity: 1}}
        transition={{duration:0.7}}
        className="text-lg md:text-2xl capitalize text-textWhite font-light md:font-semibold">you have a vision. we have a team to get you there
      </motion.h3>
      <Button text={'Get Started'} bgColor={'bg-bgWhite'} />
    </div>
  )
}

export default Home