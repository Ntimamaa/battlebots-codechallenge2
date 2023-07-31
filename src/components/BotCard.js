import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot, onDelete, onAddToArmy,onRemoveFromArmy, isInArmy }) {
  const handleAddToArmy = () => {
    onAddToArmy(bot);
  };
  const handleRemoveFromArmy = () =>{
    onRemoveFromArmy(bot);
  }

  const buttonText = isInArmy ? "Remove from Army" : "Add to Army";
  const buttonClass = isInArmy ? "ui mini red button" : "ui mini green button";
  const buttonClick = isInArmy ? handleRemoveFromArmy : handleAddToArmy;


  return (
    <div className="ui column">
      <div className="ui card" key={bot.id}>
        <div className="image">
          <img onClick={buttonClick} alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>
          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button className="ui mini red button" onClick={onDelete}>
                x
              </button>
              <button
                className={buttonClass}
                onClick={buttonClick}
              >
                {buttonText}
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
