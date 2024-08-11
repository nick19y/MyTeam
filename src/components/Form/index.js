import InputText from '../InputText';
import Banner from '../Banner';
import './form.css'
import TeamsDropDown from '../TeamsDropDown';
import CustomButtom from '../CustomButton';
import { useState } from 'react';

export default function Form(props){
    const[name, setName] = useState('');
    const[playerFunction, setPlayerFunction] = useState('');
    const[level, setLevel] = useState('');
    const[image, setImage] = useState('');
    const[team, setTeam] = useState('');

    const onSave = (event) =>{
        event.preventDefault();
        props.onRegisterPlayer({
            name,
            playerFunction,
            level,
            image,
            team
        });
        // esvaziando os campos depois de enviar o formulário
        setName('')
        setPlayerFunction('')
        setLevel('')
        setImage('')
        setTeam('')
    }
    return(
        <form className='default_form' onSubmit={onSave}>
            <h1>Novo Jogador</h1>
            <InputText 
                required={true} label="Nome" 
                placeholder="Digite o nome do jogador"
                value={name} 
                onChange={value=>setName(value)}
            />
            <InputText 
                required={true}
                label="Função" 
                placeholder="Digite a função do jogador"
                value={playerFunction} 
                onChange={value=>setPlayerFunction(value)}
            />
            <InputText 
                required={true} 
                label="Nível" 
                placeholder="Digite o nível do jogador"
                value={level} 
                onChange={value=>setLevel(value)}
            />
            <InputText
                label="Imagem" 
                placeholder="Insira a imagem do jogador"
                value={image} 
                onChange={value=>setImage(value)}
            />
            <TeamsDropDown 
            required={true} 
            value={team} 
            onChange={value=>setTeam(value)}
            label="Time" 
            items={props.teams}/>
            <CustomButtom title="Adicionar jogador"/>
        </form>
    )
}