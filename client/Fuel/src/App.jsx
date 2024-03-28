import Home from "./pages/Home/Home"
import './App.css'

function App() {


  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
      
  );
}

export default App
