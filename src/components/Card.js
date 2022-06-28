import './Card.css';

function Card ({product,price}) { // Los componentes siempre arrancan con Mayúscula. 
    return(
        <div className='card'>
            <h4>{product}</h4>
            <p>{price}</p>
            <img src='' />
        </div>
    );
}


/* OTRA FORMA --> propiedad "props" de React

function Card (props) {
    return(
        <div className='card'>
            <h4>{props.product}</h4>
            <p>{props.price}</p>
            <img src='' />
        </div>
    );

*/
export default Card;