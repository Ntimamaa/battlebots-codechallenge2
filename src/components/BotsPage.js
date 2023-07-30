import React, { useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [selectedBots, setSelectedBots] = useState([]);
  return (
    <div>
      <YourBotArmy selectedBots={selectedBots} setSelectedBots={setSelectedBots} />
      <BotCollection setSelectedBots={setSelectedBots} />
    </div>
  );
}

export default BotsPage;
