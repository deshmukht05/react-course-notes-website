import notesData from "../api/notesData.json";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { NotesContent } from "./NotesContent";

const ReactNotes = () => {
  return (
    <>
      {/* <Header /> */}
      <h1>REACT.JS NOTES</h1>
      <ul>
        {notesData.map((curElem) => (
          <NotesContent key={curElem.id} data={curElem} />
        ))}
      </ul>
      <Footer />
    </>
  );
};

export default ReactNotes;
