import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";
import { v4 as uuidv4 } from "uuid";

function App() {

  const teams = [
    {
      id:uuidv4(),
      name: 'League of Legends',
      primaryColor: 'black',
      secondaryColor: '#fcff9e'
    },
    {
      id:uuidv4(),
      name: 'Counter-Strike 2',
      primaryColor: '#cb42f5',
      secondaryColor: '#bb97fc'
    },
    {
      id:uuidv4(),
      name: 'Dota 2',
      primaryColor: '#a30f2f',
      secondaryColor: '#ff7d99'
    }
  ]

  const [players, setPlayers] = useState([]);
  const newPlayerAdded = (player) =>{
    console.log(player);
    setPlayers([...players, player]);
    // pegando todos os players e adicionando um ao final
  }
  function deletePlayer(){
    
  }
  return (
    <div>
      <Banner/>
      <Form teams={teams.map(team=>team.name)} onRegisterPlayer={player=>newPlayerAdded(player)}/>
      {teams.map((team,index)=>
      <Team 
        key={index} 
        name={team.name} 
        primaryColor={team.primaryColor} 
        secondaryColor={team.secondaryColor}
        players={players.filter(player=>player.team===team.name)}
        onDelete={deletePlayer}
      />)}
    </div>
  );
}

export default App;
