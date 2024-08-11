import PlayerCard from '../PlayerCard';
import './team.css';

export default function Team(props){
    return(
        // renderização condicional, só vai renderizar o conteúdo a seguir se a condição antes do && for satisfeita
        // (props.players.length>0) &&
        // funciona como operador ternário também
        (props.players.length>0) ?
        <section className='team' style={{backgroundColor:props.secondaryColor}}>
            <h3 className='teamName' style={{borderColor:props.primaryColor}}>{props.name}</h3>
            <div className='players'>
            {props.players.map((player, index)=>{
                return <PlayerCard key={index} name={player.name} playerFunction={player.playerFunction} image={player.image} onDelete={props.onDelete}/>
            })}
            </div>
        </section>
        : ''
        // se a condição não for satisfeita, vai renderizar apenas um ''
    )
}