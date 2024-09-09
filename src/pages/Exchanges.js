// src/Pages/Exchanges.js
import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Typography } from 'antd';
import axios from 'axios';

const { Title, Text } = Typography;

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const response = await axios.get('https://api.coinlore.net/api/exchanges/');
        setExchanges(response.data);
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
        {Object.values(exchanges).map((exchange) => (
          <Col span={12} key={exchange.id}>
            <Card title={exchange.name} hoverable>
              <Text>Volume (USD): ${exchange.volume_usd.toLocaleString()}</Text><br />
              <Text>Active Pairs: {exchange.active_pairs}</Text><br />
              <Text>Country: {exchange.country}</Text><br />
              <a href={exchange.url} target="_blank" rel="noopener noreferrer">Visit Website</a>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Exchanges;
