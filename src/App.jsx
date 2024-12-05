import { createStore } from "redux"

const noteReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return state.concat(action.payload)
  }
}
const store = createStore(noteReducer)

store.dispatch({
  type: 'ADD_NOTE',
  payload: {
    id: 1,
    title: 'Hola tonotos',
    important: true
  }
})

const addNote = (e) => {
  e.preventDefault()
  store.dispatch({
    type: 'ADD_NOTE',
    payload: {
      id: 2,
      title: e.target.name.value,
      important: false
    }
  })

}
function App() {
  return (
    <div>
      <h3>NOTES</h3>
      {store.getState().map(e => <p key={e.id}>{e.title} {e.description}</p>)}
      <form action="" onSubmit={addNote} >
        <input type="text" name="note" />
        <button>Send</button>
      </form>
      {/* <button onClick={addNote}>Add note</button> */}
    </div>
  )
}

export default App