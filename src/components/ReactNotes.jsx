import notesData from '../api/notesData.json';
import { Footer } from './Footer';
import { NotesContent } from './NotesContent';
import './NotesContent.css'

const ReactNotes = () => {
    return(
        <>
            <h1>REACT.JS NOTES</h1>
            <ul>
                {notesData.map((curElem) =>
                    <NotesContent key={curElem.id} data = {curElem} />
                )}
            </ul>
            <Footer />
        </>
    )
}

export default ReactNotes;