import { session } from "./infra/services/popular"

function App() {
    session.get().then(console.log).catch(console.log)
    return (
        <h1>Hello World</h1>
    )
}

export default App
