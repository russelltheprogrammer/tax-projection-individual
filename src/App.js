import Header from './Header';
import UserTitleBox from './UserTitleBox';
import TaxAssumptionsBox from './TaxAssumptionsBox';
import NumbersInput from './NumbersInput';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
       <Header/>
       <UserTitleBox />
       <TaxAssumptionsBox />
       <NumbersInput />
       <Footer />
    </div>
  );
}

export default App;
