import Header from './Header';
import UserTitleBox from './UserTitleBox';
import TaxAssumptionsBox from './TaxAssumptionsBox';
import NumbersInput from './NumbersInput';
import TaxNotes from './TaxNotes';
import Footer from './Footer';


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
