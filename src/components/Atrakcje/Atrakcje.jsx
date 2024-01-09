import stlyes from "./atrakcje.module.scss";
import LeftAnimation from "../Animation/LeftAnimation";

const Atrakcje = () => {
  return (
    <>
      <h1 className="text-7xl text-center my-12">Atrakcje</h1>
      <ul className={stlyes.divContainer}>
        <LeftAnimation>
          <li className={stlyes.singleAttraction}>
            🎪 kryty plac zabaw (400m²)
          </li>
        </LeftAnimation>
        <LeftAnimation>
          <li className={stlyes.singleAttraction}>🟢 ogromny basen kulkowy</li>
        </LeftAnimation>
        <LeftAnimation>
          <li className={stlyes.singleAttraction}>
            🛷 górka do zjazdów na sankach
          </li>
        </LeftAnimation>
        <LeftAnimation>
          <li className={stlyes.singleAttraction}>
            🥪 codziennie podajemy smaczne i obfite śniadania, obiady, desery i
            kolacje
          </li>
        </LeftAnimation>
        <LeftAnimation>
          <li className={stlyes.singleAttraction}>
            🛏 wygodne pokoje 2, 3, 4/5 osobowe z łazienkami, balkonami, TV i
            Wi-Fi,
          </li>
        </LeftAnimation>
        <LeftAnimation>
          <li className={stlyes.singleAttraction}>
            🎲 przestronna świetlica z zabawkami, książeczkami i projektorem
            wideo
          </li>
        </LeftAnimation>
        <LeftAnimation>
          <li className={stlyes.singleAttraction}>
            🪑 dla maluszków łóżeczka i krzesełka do karmienia
          </li>
        </LeftAnimation>
        <LeftAnimation>
          <li className={stlyes.singleAttraction}>
            🅿 bezpłatny parking obok budynku
          </li>
        </LeftAnimation>
        <LeftAnimation>
          <li className={stlyes.singleAttraction}>
            🔇 spokojna i cicha okolica, bez ruchu samochodowego
          </li>
        </LeftAnimation>
      </ul>
    </>
  );
};

export default Atrakcje;
