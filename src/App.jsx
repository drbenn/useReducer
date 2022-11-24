import { useReducer } from 'react'
import './App.css'

// https://www.youtube.com/watch?v=-bEzt5ISACA
// using state like the reduce method [5,6,7].reduce((cv,n) ⇒ cv +n, 0);

function NameList() {
  const [ state, dispatch ] = useReducer((state, action) => {
      switch(action.type) {
        case "SET_NAME": 
          return { ...state, name: action.payload };
        case "ADD_NAME":
          return {
            ...state,
            names: [...state.names, state.name],
            name: "",

          }
      }
  }, {
    names:[],
    name: "",
  });
  return (
    <div className="App">
      <input 
        type="text"
        value={state.name}
        onChange={e => dispatch({type: "SET_NAME", payload: e.target.value})} 
        />
      <div>Name:{state.name}</div>
      <button onClick={() => dispatch({ type: "ADD_NAME", payload: state.name})}>Add Name</button>
      <div>
        {state.names.map((name, index) => (
          <div key={index}>{name}</div>
        ))}
      </div>
    </div>
  )
}

function UserForm() {
  const [state, dispatch] = useReducer(
    (state, action) => ({
      ...state,
      ...action,
    }), {
    first: "",
    last: "",
  });
  return (
    <div>
      <input 
        type="text"
        value={state.first}
        onChange= {(e) => dispatch({ first: e.target.value})}
      />
      <br></br>
      <input type="text"
        value={state.last}
        onChange= {(e) => dispatch({ last: e.target.value})}
      />
      <div>
        First: {state.first} 
        <br></br>
        Last: {state.last}
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <UserForm />
      <NameList />
    </div>
  )
}
export default App;
