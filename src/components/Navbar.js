import CardWidget from './CardWidget';
import './Navbar.css';


function Navbar() {
    return (
        <div className="padre">
        <header>
            <nav className="logo">
                    <a href="index.html"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrAt1ibe7BfXSAFnvMEJtBt2bOe0e6zuv9t39Ee_Nc&s"/></a>
            </nav>
            <nav class="menu">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="bio.html">Bio</a></li>
                    <li><a href="cuadros.html">Cuadros</a></li>
                    <li><a href="esculturas.html">Esculturas</a></li>
                    <CardWidget/>
                </ul>
            </nav>
       </header>
       </div>
    );
  }
  
  export default Navbar;