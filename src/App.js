import logo from './logo.svg';
import './App.css';
import Corousel from './components/Functional-components/corousel/corousel';
import ImageComponent from './components/Functional-components/image/image-component';
import ModalExample from './components/Functional-components/moduls/moduls';
import TextLinkExample from './components/Functional-components/navbar/navbar';
import AnimatedToast from './components/Functional-components/toast/toast';

function App() {
  return (
    <div>
      <Corousel></Corousel>
        <ImageComponent></ImageComponent>
   <ModalExample></ModalExample>
<TextLinkExample></TextLinkExample>
    <AnimatedToast></AnimatedToast>
    </div>
  );
}

export default App;
