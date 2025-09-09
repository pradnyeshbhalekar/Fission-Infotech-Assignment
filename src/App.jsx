import "./App.css";
import Lion from './components/Lion'
import Layout from './components/Layout'
import HorizontalScrollImage from "./components/Company";

const App = () => {
  return (
    <Layout>
      <Lion /> 
      <HorizontalScrollImage/>
    </Layout>

    
  )
}

export default App;
