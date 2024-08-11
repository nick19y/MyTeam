import { AiFillCloseCircle } from 'react-icons/ai';
import './player_card.css';

export default function PlayerCard({player, name, image, playerFunction, backgroundColor, onDelete}){
    return(
        <div className='player'>
            <AiFillCloseCircle size={25} className='delete' onClick={()=>onDelete(player.id)}/>
            <div className='header' style={{backgroundColor: backgroundColor}}>
                <img src={image} alt={name}/>
            </div>
            <div className='baseboard'>
                <h4>{name}</h4>
                <h5>{playerFunction}</h5>
            </div>
        </div>
    )
}