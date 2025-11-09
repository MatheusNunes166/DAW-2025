import { MovieContent } from "./cases/movies/components/movie-content";
import { Footer } from "./components/layout/footer";
import { Header } from "./components/layout/header";
import { NavBar } from "./components/layout/navbar";
import { Highlight } from "./components/layout/highlight"; 

function App() {

  return (
    <>
      <Header />
      <main>
        <Highlight/>
        <NavBar/>
        <MovieContent/>
      </main>
      <Footer />
    </>
  )
}

export default App
