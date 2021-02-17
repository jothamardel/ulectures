import React from "react";
import Player from "../Player/player";
import PlayerList from "../Player-list/player-list";

class PlayerPage extends React.Component {
  render() {
    return (
      <div className="player-page">
        <Player />
        <PlayerList />
      </div>
    );
  }
}

export default PlayerPage;
