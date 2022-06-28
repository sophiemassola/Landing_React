import './ItemListContainer.css';
import Card from './Card';


function ItemListContainer () { // Los componentes siempre arrancan con Mayúscula.
    return(
        
        <section >

            <h2>Bienvenido a nuestra página!</h2>

            <div className='cuerpo'>
                <Card product='Paisajes' price='$15.000' />
                <Card product='Retratos' price='$25.000' />
                <Card product='Esculturas de madera' price='$20.000' />
                <Card product='Esculturas de Yeso' price='$19.000' />
            </div>

        </section>
    );
}

export default ItemListContainer;