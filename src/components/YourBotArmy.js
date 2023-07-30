import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ selectedBots, setSelectedBots }) {
  const addToBotArmy = (bot) => {
    setSelectedBots(prevBots => [...prevBots, bot]);
  };

  const removeFromBotArmy = (botId) => {
    setSelectedBots(prevBots => prevBots.filter(bot => bot.id !== botId));
  };

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          Your Bot Army
        </div>
        <div className="row bot-army-row">
          {selectedBots.map(bot => (
            <BotCard
              key={bot.id}
              bot={bot}
              onDelete={() => removeFromBotArmy(bot.id)}
              onAddToArmy={() => addToBotArmy(bot)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
