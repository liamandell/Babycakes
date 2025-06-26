import './App.css';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="App">
      <header className="header">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Baby Cakes Bakery
        </motion.h1>
        <nav className="nav-links">
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <motion.section id="menu" className="section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Our Menu</h2>
          <ul>
            <li>🍪 Chocolate Chip Cookies</li>
            <li>🥐 Croissants</li>
            <li>🎂 Custom Cakes</li>
            <li>🧁 Cupcakes</li>
          </ul>
        </motion.section>

        <motion.section id="about" className="section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2>About Us</h2>
          <p>
            Welcome to Babycakes — a local, family-owned bakery crafting homemade sweets and cozy memories since 2010.
          </p>
        </motion.section>

        <motion.section id="contact" className="section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2>Contact</h2>
          <p>📍 123 Cupcake Lane, Austin, TX</p>
          <p>📧 hello@babycakes.com</p>
          <p>📞 (512) 555-1234</p>
        </motion.section>
      </main>

      <footer>
        <p>&copy; 2025 Babycakes Bakery. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
