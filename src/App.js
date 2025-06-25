import './App.css';
import logo from './logo.png'; // Make sure logo.png is in src/

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          <img src={logo} alt="Babycakes Icon" className="header-icon" />
          Baby Cakes Bakery
        </h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="menu">
          <h2>Our Menu</h2>
          <ul>
            <li>🍪 Chocolate Chip Cookies</li>
            <li>🥐 Croissants</li>
            <li>🎂 Custom Cakes</li>
            <li>🧁 Cupcakes</li>
          </ul>
        </section>

        <section id="about">
          <h2>About Us</h2>
          <p>
            Welcome to Babycakes — a local, family-owned bakery dedicated to
            crafting homemade sweets and cozy memories. Since 2010, we’ve served
            our community with love, flour, and sugar.
          </p>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>📍 123 Cupcake Lane, Austin, TX</p>
          <p>📧 hello@babycakes.com</p>
          <p>📞 (512) 555-1234</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Babycakes Bakery. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
