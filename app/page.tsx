"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import MoveFinder from './moveFinder';

export default function Home() {
  const [forcedMoveData, setForcedMoveData] = useState<Record<string, number> | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Adjust the path to fetch the JSON file from the root
        const response = await fetch('forced.json');
        const data = await response.json();
        let forcedMove: Record<string, number> = {};
        for (let moveInfo of data) {
          forcedMove[JSON.stringify(moveInfo.state)] = moveInfo.choice
        }
        setForcedMoveData(forcedMove);
      } catch (error) {
        console.error('Error fetching JSON:', error);
      }
    };
    console.log("fetching data")
    fetchData();
  }, []);

  if (!forcedMoveData) {
    return <h1>Loading...</h1>;
  }
  
  return (
    <main>
      <MoveFinder data={forcedMoveData} />
    </main>
  )
}
