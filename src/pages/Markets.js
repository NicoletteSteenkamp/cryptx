import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Typography, Spin, Alert } from 'antd';
import axios from 'axios';

const { Title, Text } = Typography;

const CoinMarkets = () => {
  const [marketData, setMarketData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMarketData = async () => {
      setLoading(true);
      setError(null);
      try {
        // Fetching market data from CoinCap API
        const response = await axios.get('https://api.coincap.io/v2/markets');
        setMarketData(response.data.data); 
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
      <Row gutter={[24, 24]}>
        {marketData.map((market, index) => (
          <Col span={12} key={index}>
            <Card title={market.exchangeId} hoverable>
              <Text>Base: {market.baseSymbol}</Text><br />
              <Text>Quote: {market.quoteSymbol}</Text><br />
              <Text>Price (USD): ${parseFloat(market.priceUsd).toFixed(2)}</Text><br />
              <Text>Volume (USD): ${parseFloat(market.volumeUsd24Hr).toFixed(2)}</Text><br />
              <Text>Exchange: {market.exchangeId}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CoinMarkets;
