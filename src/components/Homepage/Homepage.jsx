import styles from "./homepage.module.scss";
import HomepageHeader from "./HomepageHeader/HomepageHeader";
import HomepageTile from "./HomepageTile/HomepageTile";
import { atrakcje } from "../../../assets/homePageTiles.js";

const Homepage = () => {
  return (
    <>
      <HomepageHeader />
      <div className="flex h-100 mt-10 mb-40">
        {atrakcje.map((item, index) => (
          <HomepageTile key={index} item={item} />
        ))}
      </div>
    </>
  );
};

export default Homepage;
