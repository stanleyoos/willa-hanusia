import HOComponent from "@/components/Animation/HOComponent";
import styles from "./kontakt.module.scss";
import { FaPhoneAlt, FaHome } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <h1 className="text-5xl mt-20">Kontakt</h1>
      <div className={styles.divContainer}>
        <div className={styles.informations}>
          <div>
            <FaHome />
            <h1>Adres</h1>
            <p>ul. Bystra 18</p>
            <p>34-700 Rabka-Zdrój</p>
          </div>
          <div>
            <FaPhoneAlt />
            <h1>Kontakt</h1>
            <p className="my-3">
              <a href="tel:18 26 77 547">18 26 77 547</a>
            </p>
            <p>
              <a href="tel:604 525 964">604 525 964</a>
            </p>
          </div>
          <div>
            <BsBank2 />
            <h1>Numer konta</h1>
            <p>55 8815 0002 0000 0008 4781 0001</p>
          </div>
        </div>
        <a
          href="mailto:kontakt@hanusia-rabka.pl"
          className={styles.mailInformation}
        >
          <IoIosMail />
          <h1>Mail</h1>
          <p>kontakt@hanusia-rabka.pl</p>
        </a>
        <div className={styles.additionalInformation}>
          <p>Doba hotelowa: od 14:00 do 11:00 dnia następnego</p>
          <p>Na zapytania mailowe odpowiadamy do 24 godzin</p>
        </div>
        {/* <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10840.807428944843!2d19.931135128561746!3d49.6046591179842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715e021ea6a1ac1%3A0xa9eb75a49d1675f4!2sWilla%20Hanusia!5e1!3m2!1spl!2spl!4v1703950100013!5m2!1spl!2spl"
            width="600"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div> */}
      </div>
    </>
  );
};

export default Contact;
