import './App.css';
import Navbar from './components/Navbar/Navbar';
import {useState, useEffect} from 'react';
import Bloglist from './components/bloglist';

const hello=[
    {title:'new dev tool',body:'lorem ipusm', author:'mario',id:1},
    {title:'my new website',body:'lorem ipusm', author:'diaz',id:2},
    {title:'this is my site',body:'lorem ipusm', author:'hamza',id:3},
]

function App() {
 const[data,setData] =useState(hello);
 const[hell,sethell]=useState(hello)
  //  setData();

  const handleDelbutton=(id)=>{
    const newblogs= data.filter((hello)=>hello.id!==id);
    setData(newblogs);
   
  }
  useEffect(()=>{
    console.log('we are using effect');
    console.log(data);
  },[])
  const handleclick=()=>{
    
  }
  return (
    <div className="App">
    <h2>hello</h2>
        <Navbar hell={hell}/>
        <Bloglist data={data} title='MY BLOG' handleDelbutton={handleDelbutton} />
        <Bloglist data={data.filter((hell)=>hell.author.length===4)} title='mario blog' />
        <button >click me</button>
    </div>
  );
}

export default App;
