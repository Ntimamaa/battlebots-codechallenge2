import React, { useEffect, useState } from "react";
import BotCard from "./BotCard";

function BotCollection({ setSelectedBots }) {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8002/bots')
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.error('Error fetching bots:', error));
  }, []);

  const handleDelete = (botId) => {
    fetch(`http://localhost:8002/bots/${botId}`, {
      method: 'DELETE',
    })
      .then(response => {
        console.log(response);
        setBots(prevBots => prevBots.filter(bot => bot.id !== botId));
      })
  };

  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map(bot => (
          <BotCard
            key={bot.id}
            bot={bot}
            onDelete={() => handleDelete(bot.id)}
            onAddToArmy={() => setSelectedBots(prevBots => [...prevBots, bot])}
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
