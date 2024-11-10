// src/components/Counter.js
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Counter = () => {
  const [doorsMade, setDoorsMade] = useState(0);
  const [customersServed, setCustomersServed] = useState(0);
  const [operationCities, setOperationCities] = useState(0);

  const doorsTarget = 8932;
  const customersTarget = 1322;
  const citiesTarget = 1;

  useEffect(() => {
    const incrementCounters = () => {
      // Slow down door increment for smoother effect
      const doorInterval = setInterval(() => {
        setDoorsMade((prev) => {
          if (prev < doorsTarget) return prev + 50; // Smaller increment
          clearInterval(doorInterval);
          return doorsTarget;
        });
      }, 50); // Slower interval

      // Slow down customer increment
      const customerInterval = setInterval(() => {
        setCustomersServed((prev) => {
          if (prev < customersTarget) return prev + 20; // Smaller increment
          clearInterval(customerInterval);
          return customersTarget;
        });
      }, 50);

      // City increment remains slower and at its own pace
      const cityInterval = setInterval(() => {
        setOperationCities((prev) => {
          if (prev < citiesTarget) return prev + 1;
          clearInterval(cityInterval);
          return citiesTarget;
        });
      }, 1000); // Slower increment for cities (1 per second)
    };

    incrementCounters();

    return () => {
      setDoorsMade(0);
      setCustomersServed(0);
      setOperationCities(0);
    };
  }, []);

  return (
    <CounterContainer>
      <div className="counter-content">
        <div className="counter-item">
          <h2>No. of Doors Made</h2>
          <h3>{doorsMade}</h3>
        </div>
        <div className="counter-item">
          <h2>No. of Customers Served</h2>
          <h3>{customersServed}</h3>
        </div>
        <div className="counter-item">
          <h2>Operating Cities</h2>
          <h3>{operationCities}</h3>
        </div>
      </div>
    </CounterContainer>
  );
};

const CounterContainer = styled.section`
  padding: 5rem 0;
  background: linear-gradient(
    135deg,
    rgba(245, 245, 245, 0.8),
    rgba(220, 220, 220, 0.8)
  );
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 2rem 0;

  .counter-content {
    display: flex;
    justify-content: space-around;
    text-align: center;
    padding: 2rem;
    color: var(--clr-grey-1);
  }

  .counter-item {
    background: rgba(255, 255, 255, 0.9);
    padding: 2rem;
    border-radius: 8px;
    width: 30%;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }

    h2 {
      color: var(--clr-grey-5);
      font-size: 1.2rem;
      margin-bottom: 1rem;
      text-transform: uppercase;
    }

    h3 {
      color: var(--clr-primary-4);
      font-size: 2.5rem;
      font-weight: bold;
    }
  }

  @media (max-width: 768px) {
    .counter-content {
      flex-direction: column;
      gap: 1rem;
    }

    .counter-item {
      width: 80%;
      margin: 0 auto;
    }
  }
`;

export default Counter;
