import { NotesList } from "../types/notes";
export default function Notes({ notes }: NotesList) {
    const sortedListNotes = notes?.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return (
        <>
          <h2>Notes:</h2>
            <ul>
                {
                    sortedListNotes?.length>0?
                    sortedListNotes?.map((note) => {
                        return (
                        <li>
                            <h2>{note.headLine}</h2>
                            <p>{note.text}</p>
                            <p>{note.date}</p>
                        </li>)
                    }):
                    <h1>No notes</h1>
                }
            </ul>
        </>
    )
}