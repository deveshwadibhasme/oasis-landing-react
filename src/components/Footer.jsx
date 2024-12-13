import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <footer className='min-h-[200px] w-full bg-bgBackground mx-auto my-0'>
      <div className="flex justify-between max-w-[1200px] text-white text-center mx-auto my-0 p-5" id="footer">
        <div className="max-w-[500px] text-center md:text-left">
          <h2>Contact Info</h2>
          <div className="w-full flex gap-5 m-[5px]">
            <div className="max-w-[30px] w-full h-[30px] bg-white text-black flex items-center justify-center rounded-[50%]">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="info">services.oasisinfobyte@gmail.com</div>
          </div>
          <div className="w-full flex gap-5 m-[5px]">
            <div className="max-w-[30px] w-full h-[30px] bg-white text-black flex items-center justify-center rounded-[50%]">
              <FontAwesomeIcon icon={faMapLocationDot} />
            </div>
            <div className="info">
              Satya Niketan, South West New Delhi, India - 110021</div>
          </div>
        </div>
        <div className="flex flex-col">
          <h2>Follow Us</h2>
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
      </div>
      <div className="text-white text-center mt-[5px] p-1">
        <hr />
        © Copyright OASIS INFOBYTE. All Rights Reserved Designed by Team OASIS
      </div>
    </footer>
  )
}

export default Footer