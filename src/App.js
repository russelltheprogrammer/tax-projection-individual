import Header from './components/Header'
import UserTitleBox from './components/UserTitleBox';
import TaxAssumptionsBox from './components/TaxAssumptionsBox';
import NumbersInput from './components/NumbersInput';
import TaxNotes from './components/TaxNotes';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
       <Header/>
       <UserTitleBox />
       <TaxAssumptionsBox />
       <NumbersInput />
       <TaxNotes />
       <Footer />
    </div>
  );
}

export default App;
