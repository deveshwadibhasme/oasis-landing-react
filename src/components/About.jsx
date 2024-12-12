import AboutImg from '../assets/about-us.svg'
import Button from "./Button"

// bg-[linear-gradient(180deg,rgb(108,92,231)_50px,rgb(255,255,255)_50px)]
const About = () => {
  return (
     <section className="max-w-screen-xl w-full flex flex-col mt-14" 
     id="about">
            <h1 
                className="text-center mt-7 mx-auto text-4xl text-textBackground relative font-extrabold w-60 h-14 custom-border custom-border-2">About Us</h1>
            <div className="flex w-full items-center flex-col md:flex-row">
                <div className="max-w-2xl px-5 flex flex-col items-center md:items-start">
                    <h2 className='text-2xl text-textBackground font-[600]'>We build IT that build your business<br/></h2>
                    <p className='mb-5'><br/>We Develop Personalized Software At Our Company, We Turn The Digital Dreams Of Our Clients
                        Into A
                        Reality. We Work Closely With Our Users Throughout Development To Ensure That We Are Still
                        Aligned
                        With The End-Goal. We Are Committed To Producing Exceptional Software For Each Of Our Clients.
                        <br/>
                        <br/>
                        At OASIS Infobyte, our mission is to empower the youth, particularly students, by fostering
                        self-awareness and delving into the unexplored realms of technology and high-growth fields. We
                        are
                        dedicated to bridging the gap between students and industrial knowledge, guiding them toward
                        their
                        dreams. As an MSME registered startup, we are open to connecting with new individuals on this
                        journey of perpetual learning and boundless joy!
                        <br/>
                        <br/>
                        AICTE Approved: Our internship programs, endorsed by AICTE, ensure top-notch quality and
                        relevance.
                        <br/>
                        <br/>
                        ISO 9001:2015 Certified: Committed to international standards, reflecting our unwavering
                        dedication
                        to quality.
                    </p>
                    <Button bgColor={'bg-bgBackground'} borderRadius={'rounded-[50px]'} text={'Read More'}/>
                </div>
                <div className="mx-auto max-w-[480px] min-h-96 w-full h-full">
                    <img src={AboutImg} className='w-full h-full' alt="About Us"/>
                </div>
            </div>
        </section>
  )
}

export default About