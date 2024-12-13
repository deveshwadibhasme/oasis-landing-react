import Button from './Button';
import ContactImg from '../assets/contact-us.svg'

const Contact = () => {
  return (
    <section className='max-w-[1200px] w-full min-h-screen text-center mx-[auto] my-[0] pt-[50px] relative'>
      <h1 className='text-center mx-auto text-4xl text-textBackground relative font-extrabold w-[300px] h-14 custom-border custom-border-2 mt-5'>
        Contact US
        </h1>
      <div className="flex flex-col md:flex-row">
        <div className="max-w-md w-full">
          <img src={ContactImg} alt="contact-us" />
        </div>
        <div className="flex flex-col items-center justify-center max-w-[500px] h-[400px] mx-[auto] my-[0] p-[30px] rounded-[10px] [box-shadow:0_5px_15px_rgba(0,0,0,0.5)]">
          <form onSubmit={(e)=>e.preventDefault()}>
            <input className='w-full border resize-y mb-5 p-2.5 rounded-[5px] border-solid border-[#ccc] outline-none' type="text" placeholder="Name"/>
              <input className='w-full border resize-y mb-5 p-2.5 rounded-[5px] border-solid border-[#ccc] outline-none' type="email" placeholder="Email"/>
                <textarea className='block max-w-[400px] min-h-[100px] w-full max-h-[120px] border overflow-y-hidden mb-5 p-0.5 border-solid border-[#ccc] outline-none' placeholder="Message"></textarea>
                <Button bgColor={'bg-bgBackground'} borderRadius={'rounded-full'} text={'Send'}/>
              </form>
            </div>
        </div>
    </section>
  )
}

export default Contact