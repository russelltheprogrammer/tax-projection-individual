import Header from './components/Header'
import UserTitleBox from './components/UserTitleBox';
import TaxAssumptionsBox from './components/TaxAssumptionsBox';
import NumbersInput from './components/NumbersInput';
import TaxNotes from './components/TaxNotes';
import Footer from './components/Footer';
import Info from './components/Info'


function App() {
  return (
    <div className="App">
        <Header/>
        <UserTitleBox />
        <TaxAssumptionsBox />
        <NumbersInput />
        <TaxNotes />
        <Info />
        <Footer />
    </div>
  );
}

export default App;
