import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Typography } from 'antd';
import axios from 'axios';

const { Title, Text } = Typography;

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const response = await axios.get('https://api.coincap.io/v2/exchanges');
        setExchanges(response.data.data); // Access the 'data' field in CoinCap's response
      } catch (error) {
        console.error('Error fetching exchanges:', error);
      }
    };

    fetchExchanges();
  }, []);

  return (
    <div>
      <Title level={2}>Exchanges</Title>
      <Row gutter={[24, 24]}>
        {exchanges.map((exchange) => (
          <Col span={12} key={exchange.exchangeId}>
            <Card title={exchange.name} hoverable>
              <Text>Rank: {exchange.rank}</Text><br />
              <Text>Trading Pairs: {exchange.tradingPairs}</Text><br />
              <Text>Volume (24Hr): ${parseFloat(exchange.volumeUsd24Hr).toLocaleString()}</Text><br />
              <Text>Website: <a href={exchange.exchangeUrl} target="_blank" rel="noopener noreferrer">Visit</a></Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Exchanges;
