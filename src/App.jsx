import { useDispatch, useSelector } from "react-redux"
import { fetchTodos } from "./redux/slices/todo-slice"

function App() {
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  console.log(state)

  if (state.todo.isLoading) {
    return <h1>Loading.........</h1>
  }

  return (
    <>
      <h1>Api Calling using React Redux</h1>
      <button onClick={e => dispatch(fetchTodos())}>Fetch Todo's</button>
      {
        state.todo.isData && state.todo.isData.map((e, i) => <li key={i}>{i + 1}{". "}{e.title}</li>)
      }
    </>
  )
}

export default App
