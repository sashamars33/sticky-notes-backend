import Header from './components/Header'
import PagesDisplay from './components/PagesDisplay'
import Page from './components/Page'

// P6BG9x9oFI1hg8OH


function App() {

  const pages = [];
  for(let i = 0; i < 5; i++){
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
