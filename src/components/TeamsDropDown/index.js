import './teams_list.css';
export default function TeamsDropDown(props){

    const onSelect = (event) =>{
        props.onChange(event.target.value);
    }

    return(
        <div className='teams_list'>
            <label>{props.label}</label>
            <select onChange={onSelect} required={props.required} value={props.value}>
                <option value=""></option>
                {props.items.map((item, index)=>{
                return <option key={index}>{item}</option>
                })}
            </select>
        </div>
    )
}