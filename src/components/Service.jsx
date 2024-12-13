import { motion } from "motion/react"
import Animation from '/src/assets/animaton-service.svg'
import WebDev from '/src/assets/web-services.svg'
import Cloud from '/src/assets/cloud-service.svg'
import Graphic from '/src/assets/graphic-services.svg'

import Button from './Button'

const Service = () => {

  const services = [
    {
      title: 'Website Development',
      description: 'Our website developers provide expert web application development and web design services to our clients. OASIS INFOBYTE offers a variety of website design and development services, We specialize in developing interactive, scalable, brand-oriented, and business-ready custom web solutions. Our aim is to build profitable digital products engineered to spark creativity and boost ROI.',
      image: WebDev,
      direction: 'right',
    },
    {
      title: 'Cloud Computing',
      description: 'Whatever type of cloud computing services you use, one thing is certain: large quantities of data will move back and forth between your end users and the cloud provider\'s data centers, over the internet. That\'s why whatever type of cloud services you use, OASIS INFOBYTE can help your organization have a better cloud experience and reap greater benefits from your cloud services investment.',
      image: Cloud,
      direction: 'left',
    },
    {
      title: 'Graphic Design',
      description: 'Our creative designers offer outstanding and attention-grabbing visuals for brochures, banners, flyers, logos, business cards, e-books, and many more. Our graphic designs can develop a great impression on your prospect’s mind. With a complete mixture of professionalism and stunning creativity skills, our expert designers can establish a bright profile for your business in the online world.',
      image: Graphic,
      direction: 'right',
    },
    {
      title: 'Animation Design',
      description: 'Animations make your brand more engaging and interactive. This makes them great assets to share on social media, distribute through email, feature internally and host on your website—they’re that versatile. Our passionate team of motion graphics designers empower you to tell great stories for your business. We believe it\'s only when you tell great stories you become one.',
      image: Animation,
      direction: 'left',
    },
  ]

  return (
    <section className='max-w-screen-xl px-8 w-full flex flex-col mt-14 mx-auto'>
      <h1 className='text-center mx-auto text-4xl text-textBackground relative font-extrabold w-[300px] h-14 custom-border custom-border-2 mt-5'>Our Services</h1>
      <div className='w-full mx-auto mt-4'>
        {
          services.map((serve) => (
            <div key={serve.title} className={`flex max-w-5xl mx-auto w-full min-h-[400px] items-center justify-between flex-col 
            ${serve.direction === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'}`
            }>
              <motion.div
                initial={{ x : (serve.direction==='left') ? -50 : 50 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: false, duration:0.2}}
                className="flex flex-col items-center md:items-start max-w-[500px]">
                <h1
                  className='text-2xl md:text-3xl text-center md:text-start text-textBackground font-[600] mb-4'>{serve.title}
                </h1>
                <p className='mb-3 text-center md:text-start'>{serve.description}</p>
                <Button
                  bgColor={'bg-bgBackground'}
                  text={'Read More'}
                  borderRadius={'rounded-full'} />
              </motion.div>
              <div className={`max-w-[400px] w-full min-h-64 mt-2
                ${serve.direction === 'right' ? 'ml-auto' : 'mr-auto'}
                `}>
                <img className='w-full h-full' src={serve.image} alt="web-services" />
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Service