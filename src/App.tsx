import { About } from "./components/About/About";
import { Header } from "./components/Header/Header";
import { Portfolio } from "./components/Portfolio/Portfolio";
import Reviews from "./components/Reviews/Reviews";
import { Title } from "./components/Title/Title";

function App() {
  return (
    <>
      <div>
        <Header />
        <main className="container">
          <Title />
          <About />
          <Portfolio />
          <Reviews />
        </main>
      </div>
    </>
  );
}

export default App;
