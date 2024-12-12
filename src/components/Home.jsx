import Button from "./Button"
import Wave from '../assets/wave.png'

const Home = () => {
  return (
    <div className='max-w-screen-xl relative flex flex-col gap-6 justify-center items-center mx-auto min-h-screen bg-[linear-gradient(rgb(127,2,130),rgb(113,70,206))]'>
      <h1 className="text-5xl text-white font-extrabold">Build Your IT Here</h1>
      <h3 className="text-2xl capitalize text-textWhite font-semibold">you have a vision. we have a team to get you there</h3>
      <Button text={'Get Started'} bgColor={'bg-bgWhite'} />
    </div>
  )
}

export default Home