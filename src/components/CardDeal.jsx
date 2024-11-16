import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2>
          lkkloooooooooooooiiiiiiiii
          <br className="sm:block hidden" />
          iiiiiiuuuuuuuuuuuuuuuuuyyyyyyy
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          kkkkkkkkkkkkkkkkkkjjjjjjjjjjjjjjjjjjjllllllllllllllhhhhh
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
