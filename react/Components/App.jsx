import "../CSS/App.css";
import { characterInformation } from "../JS/CharacterInformation";
import { CharacterCards } from "./characterCards";
import { CharacterRatings } from "./characterRatings";
import { Header } from "./Header";

function App() {
  return (
    <>
      <Header />
      <div
        id="section-container"
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <CharacterRatings characters={characterInformation} />
        <CharacterCards characters={characterInformation} />
      </div>
    </>
  );
}
export default App;
