import "../styles/moralis.module.css";
import Staking from "./staking";
import StakingData from "./stakingData";

const Main = () => {
  return (
    <section className="container">
      <Staking />
      <StakingData />
    </section>
  );
};

export default Main;
