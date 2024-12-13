import { motion } from "motion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Man from '/src/assets/man.png'

const Team = () => {

  const profiles = [
    {
      id:1,
      image: Man,
      name: 'Adarsh Prakash',
      role: 'Web Development and Design'
    },
    {
      id:2,
      image: Man,
      name: 'Lakshya Dutta',
      role: 'Animation Designer'
    },
    {
      id:3,
      image: Man,
      name: 'Nancy Dhir',
      role: 'Human Resource'
    },
  ]


  return (
    <section className="max-w-screen-xl px-8 w-full flex flex-col mt-14 mx-auto" id="team">

      <h1 className="text-center mx-auto text-4xl text-textBackground relative font-extrabold w-[300px] h-14 custom-border custom-border-2 mt-5">
        Our Team
      </h1>

      <div className="flex justify-around flex-wrap gap-y-[15px] w-full p-5 mt-4">

        {
          profiles.map((profile) => (
            <motion.div
              initial={{y:20}}
              transition={{duration:0.1*(profile.id-0.4)}}
              whileHover={{ y: -20 }}
              whileInView={{y:0}}
              key={profile.id}
              className="bubbles-1 max-w-[250px] min-h-[350px] w-full flex flex-col items-center relative overflow-hidden transition-transform duration-[0.8s] shadow-textBackground shadow-[0px_1px_10px_1px] pt-10 pb-0 px-5"
              >
              <div className="text-center">
                <div className="max-w-[130px] h-[130px] w-full relative transition-transform duration-[0.8s] mx-auto my-0 rounded-[50%] border-[5px] border-solid border-white">
                  <img src={profile.image} alt="man" />
                </div>
                <h2 className="text-lg font-semibold">{profile.name}</h2>
                <h3 className="text-lg text-textBackground font-light">{profile.role}</h3>
              </div>
              <div className="absolute flex justify-evenly w-6/12 text-xl bottom-5">
                <a href="#">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </motion.div>
          ))
        }

      </div>
    </section>
  )
}

export default Team