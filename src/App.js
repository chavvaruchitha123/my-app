import logo from './logo.svg';
import './App.css';
import List from './components/Functional-components/jsx/listjsx';
import ButtonComponent from './components/Functional-components/jsx/buttonjsx';
import Formcomponent from './components/Functional-components/jsx/formjsx';
import ImageComponent from './components/Functional-components/jsx/imagejsx';
import TableComponent from './components/Functional-components/jsx/tablejsx';
// import ButtonComponent from './components/Functional-components/button/button-component';
// import OrderedList from './components/Functional-components/List/order list/orderedlist/orderedlist';
// import UnOrderedList from './components/Functional-components/List/order list/unorder-list';
// import ImageComponent from './components/Functional-components/image/image-component';
// import TableComponent from './components/Functional-components/tables/tablecomponent';

function App() {
  return (
    <div>
      
        {/* <h1>Hello world</h1> */}
    {/* <ButtonComponent></ButtonComponent>
    <OrderedList></OrderedList>
    <UnOrderedList></UnOrderedList>
    <ImageComponent></ImageComponent>
    <ImageComponent></ImageComponent>
    <ImageComponent></ImageComponent>
    <TableComponent></TableComponent> */}
    {/* <List></List> */}
    <ButtonComponent></ButtonComponent>
    <Formcomponent></Formcomponent>
    <ImageComponent></ImageComponent>
    <TableComponent></TableComponent>

    
    </div>
  );
}

export default App;
