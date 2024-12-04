import { createStore } from "redux"

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return state.concat(action.payload)
    case 'TOOGLE_IMPORTANCE':
      return state
    default:
      return state
  }
}

const store = createStore(reducer)

store.dispatch({
  type: 'ADD_NOTE',
  payload: {
    name: 'Schedule day',
    description: 'Adding new features',
    id:1
  }
})

store.dispatch({
  type: 'ADD_NOTE',
  payload: {
    name: 'Eduardo',
    description: 'JAJAJA alv',
    id:2
  }
})

function App() {
  return (
    <div>
      <h2>Notes app with Redux</h2>
      {store.getState().map(e => {
        return (
          <div key={e.id} style={{ border: '1px solid black' }}>
            <p>{e.name}</p>
            <p>{e.description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default App