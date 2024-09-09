import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Typography, Spin, Alert } from 'antd';
import axios from 'axios';

const { Title, Text } = Typography;

const CoinMarkets = () => {
  const [marketData, setMarketData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mapping of coin names to their respective IDs
  const coinIds = {
    'bitcoin': 90,
    'ethereum': 80,
    'litecoin': 80,
    'cardano': 2010,
    'shiba-inu': 2011
  };

  useEffect(() => {
    const fetchMarketData = async () => {
      setLoading(true);
      setError(null);
      try {
        // Fetching data for each coin
        const responses = await Promise.all(
          Object.values(coinIds).map(id => 
            axios.get(`https://api.coinlore.net/api/coin/markets/?id=${id}`)
          )
        );
        // Updating state with fetched data
        setMarketData(responses.map(response => response.data));
      } catch (error) {
        setError('Error fetching market data');
        console.error('Error fetching market data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMarketData();
  }, []);

  if (loading) return <Spin tip="Loading..." />;
  if (error) return <Alert message={error} type="error" />;

  return (
    <div>
      <Title level={2}>Coin Market Data</Title>
      {marketData.map((coinMarkets, index) => {
        // Ensure coinMarkets is an array
        if (!Array.isArray(coinMarkets)) {
          console.error('Expected array but got:', coinMarkets);
          return <Alert key={index} message="Data format error" type="error" />;
        }
        const coinName = Object.keys(coinIds)[index];
        return (
          <div key={coinName}>
            <Title level={3}>{coinName}</Title>
            <Row gutter={[24, 24]}>
              {coinMarkets.map((market, i) => (
                <Col span={12} key={i}>
                  <Card title={market.name} hoverable>
                    <Text>Base: {market.base}</Text><br />
                    <Text>Quote: {market.quote}</Text><br />
                    <Text>Price: ${market.price_usd.toFixed(2)}</Text><br />
                    <Text>Volume: ${market.volume_usd.toFixed(2)}</Text>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        );
      })}
    </div>
  );
};

export default CoinMarkets;

