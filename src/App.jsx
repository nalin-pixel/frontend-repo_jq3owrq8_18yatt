import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Chat from './components/Chat';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Chat />
      </main>
      <Footer />
    </div>
  );
}

export default App;
