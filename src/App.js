import './App.css';
import { motion } from 'framer-motion';
import cinnamonRoll from './CinnamonRoll.jpeg';
import cookiePhoto from './image16.jpeg';
import bakeryBox from './image12.png';
import logo from './logo.png';

const menuItems = [
  {
    name: 'Cinnamon Rolls',
    image: cinnamonRoll,
  },
  {
    name: 'Crinkle Cookies',
    image: cookiePhoto,
  },
  {
    name: 'Bakery Box (Mix & Match)',
    image: bakeryBox,
  },
];

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="nav-container">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="header-title"
          >
            <img src={logo} alt="Baby Cakes logo" className="logo" />
            Baby Cakes Bakery
          </motion.h1>

          <motion.nav
            className="nav-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <a href="#menu">Menu</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </motion.nav>
        </div>
      </header>

      <main>
        <section id="menu" className="menu-gallery">
          <h2>Our Menu</h2>
          <div className="grid">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                className="gallery-item"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img src={item.image} alt={item.name} />
                <div className="overlay">
                  <p>{item.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
