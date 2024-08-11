import './custom_buttom.css';

export default function CustomButtom(props){
    return(
        <button className='custom_button' type='submit'>{props.title}</button>
    )
}