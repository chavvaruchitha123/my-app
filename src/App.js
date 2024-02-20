import logo from './logo.svg';
import './App.css';
import Spinner from './components/Functional-components/spinners/spinner';
import Card from './components/Functional-components/spinners/styles/bootstrap/card';
import Content from './components/Functional-components/spinners/styles/bootstrap/content';
import FancyText from './components/Functional-components/spinners/styles/bootstrap/text';


function App() {
  return (
    <div>
      <Spinner></Spinner>
        <Content></Content>
    <Card></Card>
    <FancyText></FancyText>
    </div>
  );
}

export default App;
