import styled from "styled-components";
import styles from "../components/crypto.module.css";
import PriceChart from './Pages/PriceChart'; 

const Container = styled.section`
  display: grid;
  grid-template-rows: auto auto; 
  gap: 1rem;
  padding: 0 4rem 0 1rem;
`;

const TopContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; 
  gap: 1rem;
`;

const BottomContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const Card = styled.div`
  box-shadow: 0 0.5px 10px #a1a1a1;
  width: fit-content;
  min-width: 250px;
  cursor: pointer;
  padding: 0.75rem 1.6rem;
  border-radius: 15px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.02);
  }

  h3 {
    font-size: 1.1rem;
  }
`;

const LiveMarket = styled.div`
  box-shadow: 0 0.5px 10px #a1a1a1;
  border-radius: 15px;
  padding: 1rem;
`;

const ChartContainer = styled.div`
  box-shadow: 0 0.5px 10px #a1a1a1;
  border-radius: 15px;
  padding: 1rem;
`;

function Cryptopage() {
  return (
    <Container>
      {/* Top Container */}
      <TopContainer>
        {/* Cards Section */}
        <Card>
          {/* Bitcoin Card */}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/89d246e4220feb31d6c934676417a9e8a61a8cce812acb6a30545d785fd9d599?placeholderIfAbsent=true&apiKey=90d00836b5a049b48c0253add244096a"
            alt="Bitcoin"
          />
          <div>Bitcoin - BTC</div>
          <div>$40,291</div>
          <div>+0.25%</div>
        </Card>

        <Card>
          {/* Ethereum Card */}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7ae911116d829f9a021ff27c3406c4eb6546d9333e22aa68c92444cbad120ac?placeholderIfAbsent=true&apiKey=90d00836b5a049b48c0253add244096a"
            alt="Ethereum"
          />
          <div>Ethereum - ETH</div>
          <div>$18,291</div>
          <div>+0.25%</div>
        </Card>

        <Card>
          {/* Litecoin Card */}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ed096e10da2d178839063d727a17fb26c4605cacfbe730fabec36bd0e69bf37?placeholderIfAbsent=true&apiKey=90d00836b5a049b48c0253add244096a"
            alt="Litecoin"
          />
          <div>Litecoin - LTC</div>
          <div>$8,291</div>
          <div>+0.25%</div>
        </Card>

        <Card>
          {/* Cardano Card */}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c685a08c5766b6bce435c60f010e822ef44240958ff0e78786de2e239641b706?placeholderIfAbsent=true&apiKey=90d00836b5a049b48c0253add244096a"
            alt="Cardano"
          />
          <div>Cardano - ADA</div>
          <div>$3,291</div>
          <div>-2.05%</div>
        </Card>

        {/* Chart Component */}
        <ChartContainer>
          <PriceChart />
        </ChartContainer>
      </TopContainer>

      {/* Bottom Container */}
      <BottomContainer>
        {/* Live Market Section */}
        <LiveMarket>
          <div className={styles.liveMarket}>
            <div className={styles.div31}>
              <div className={styles.heading2}>Live Market</div>
              <div className={styles.div32}>
                <div className={styles.div}>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c339dfe254dc110159f63fae9f3b7cb00e238f757d528b67f501a92d386d2d9e?placeholderIfAbsent=true&apiKey=90d00836b5a049b48c0253add244096a"
                    className={styles.img7}
                    alt="Live Market"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/45eae7019b62db6b5a6b8b13db00cb4dd8b38f9e049c0044d6a0d0177c0ac227?placeholderIfAbsent=true&apiKey=90d00836b5a049b48c0253add244096a"
                    className={styles.img8}
                    alt="Live Market"
                  />
                </div>
                <div className={styles.div33}>
                  <div>BTC Price</div>
                  <div className={styles.amount8}>$800</div>
                </div>
                <div className={styles.div34}>
                  <div>ETH Price</div>
                  <div className={styles.amount9}>$600</div>
                </div>
                <div className={styles.div35}>
                  <div>ADA Price</div>
                  <div className={styles.amount10}>$200</div>
                </div>
                <div className={styles.div36}>
                  <div>ITL Price</div>
                  <div className={styles.amount11}>$100</div>
                </div>
              </div>
            </div>
          </div>
        </LiveMarket>
      </BottomContainer>
    </Container>
  );
}

export default Cryptopage;
