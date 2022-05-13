import logo from './logo.svg';
// 引入boost

import './App.css';
import PriceList from './components/PriceList';
import ViewTabe from './components/ViewTab';
import { List_View,Chart_View } from './components/utility';
import TotalPrice from './components/TotalPrice';
import MonthPicker from './components/MonthPicker';

const items=[
  {
    "id":1,
    "title":"去上海",
    "price":200,
    "date":"2018-09-10",
    "category":{
      "id":1,
      "name":"旅行",
      "type":"outcome",
      "iconName":"ios-plane"
    }
  },
  {
    "id":2,
    "title":"去上海",
    "price":200,
    "date":"2018-09-10",
    "category":{
      "id":1,
      "name":"旅行",
      "type":"outcome",
      "iconName":"ios-plane"
    }
  }
]
function App() {
  return (
    <div className="App">
      <MonthPicker year={2018} month={5} onChange={(year,month)=>{console.log(year,month)}}/>
    </div>
  );
}

export default App;
