import '../../style.css'
import AboutUs from '../AboutUs';
import Contacts from '../Contacts';
import Navbar from '../Navbar'
import Services from '../Services';
import Footer from '../Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Services />
      <AboutUs />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
