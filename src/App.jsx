import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Highlights from "./components/Highlights.jsx";
import Model from "./components/Model.jsx";
import Features from "./components/Features.jsx";
import HowitWorks from "./components/HowitWorks.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
	return (
		<main className="bg=black">
			<Navbar />
			<Hero />
			<Highlights />
			<Model />
			<Features />
			<HowitWorks />
			<Footer />
		</main>
	);
};

export default App;
