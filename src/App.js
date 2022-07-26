import Header from './components/Header'
import PagesDisplay from './components/PagesDisplay'
import Page from './components/Page'

function App() {

  const pages = [];
  for(let i = 0; i < 8; i++){
    pages.push(<Page key={i}/>)
  }


  return (
    <div className="App">
      <Header /> 
      <PagesDisplay pages={pages}/>
    </div>
  );
}

export default App;
