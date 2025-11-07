import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Chat from './components/Chat';
import Footer from './components/Footer';
import FloatingDroid from './components/FloatingDroid';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      {/* The floating droid lives at app level so it can follow you across sections */}
      <FloatingDroid />
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
