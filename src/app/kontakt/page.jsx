import HOComponent from "@/components/Animation/HOComponent";
import styles from "./kontakt.module.scss";
import { FaPhoneAlt, FaHome } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";

const KontaktPage = () => {
  return (
    <HOComponent className="flex flex-col items-center justify-center">
      <h1 className="text-7xl mt-20">Kontakt</h1>
      <div className={styles.divContainer}>
        <div className={styles.informations}>
          <div>
            <FaHome />
            <h1>Adres</h1>
            <p>ul. Bystra 18</p>
          </div>
          <div>
            <FaPhoneAlt />
            <h1>Kontakt</h1>
            <p>18 26 77 547</p>
          </div>
          <div>
            <BsBank2 />
            <h1>Numer konta</h1>
            <p>55 8815 0002 0000 0008 4781 0001</p>
          </div>
        </div>
        <div className={styles.additionalInformation}>
          <p>Doba hotelowa: od 14:00 do 11:00 dnia następnego</p>
          <p>Na zapytania mailowe odpowiadamy do 24 godzin</p>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10840.807428944843!2d19.931135128561746!3d49.6046591179842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715e021ea6a1ac1%3A0xa9eb75a49d1675f4!2sWilla%20Hanusia!5e1!3m2!1spl!2spl!4v1703950100013!5m2!1spl!2spl"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </HOComponent>
  );
};

export default KontaktPage;
