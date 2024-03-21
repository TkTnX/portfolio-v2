import { About } from "./components/About/About";
import { Header } from "./components/Header/Header";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Title } from "./components/Title/Title";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <main>
          <Title />
          <About />
          <Portfolio />
        </main>
      </div>
    </>
  );
}

export default App;
