import { BsFacebook, BsTelephoneFill } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";

function Contact() {
    return (
      <div className="Contact" id="contact">
        <header>
          <h2>Contact</h2>
        </header>
        <section>
          <div className="email_wapper">
            <span>To: dyncortz24@gmail.com <MdOutlineMail /></span>
            <textarea placeholder="Write message ..."></textarea>
            <button>Send <RiSendPlaneFill /></button>
          </div>
          <div>
            <p><BsTelephoneFill /> 09463372926</p>
            <a href="https://www.facebook.com/danelyn.cortz"><BsFacebook /> Danelyn Corton</a>
          </div>
        </section>
      </div>
    );
  }
  
  export default Contact;