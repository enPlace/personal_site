import "./Home.css";
import Name from "./name.webp"
const Home = () => {
  return (
    <div class="Home content">
      <header
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <h1>Nick Place</h1>
     
        <p>
          Ligula scelerisque justo sem accumsan diam quis
          <br />
          vitae natoque dictum sollicitudin elementum.
        </p>
      </header>

      <footer>
        <button>Download Resume</button>
      </footer>
    </div>
  );
};

export default Home;
