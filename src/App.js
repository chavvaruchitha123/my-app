// import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/Functional-components/button/button-component';
import OrderedList from './components/Functional-components/List/order list/orderedlist/orderedlist';
import UnOrderedList from './components/Functional-components/List/order list/unorder-list';
import ImageComponent from './components/Functional-components/image/image-component';
import TableComponent from './components/Functional-components/tables/tablecomponent';
import Profile from './components/Functional-components/jsx/jsx';

function App() {
  return (
    <div>
      
        <h1>Hello world</h1>
    <ButtonComponent></ButtonComponent>
    <OrderedList></OrderedList>
    <UnOrderedList></UnOrderedList>
    <Profile></Profile>
    <ImageComponent></ImageComponent>
    <ImageComponent></ImageComponent>
    <ImageComponent></ImageComponent>
    <TableComponent></TableComponent>
  </div>
  );
}

export default App;
