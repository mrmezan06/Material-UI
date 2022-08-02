import './App.css';
import Button from './components/Button';
import BtnGroup from './components/BtnGroup';
import AutoComplete from './components/AutoComplete';
import Checkboxes from './components/CheckBox';
import FloatBtn from './components/FloatBtn';
import RadioButtonsGroup from './components/RadioGroup';
import RatingBar from './components/RatingBar';
import Select from './components/Select';
import Slider from './components/Slider';


const App = () => {
  return (
    <div className="App">
      <div className='flex justify-center items-center my-10 mx-10 gap-20'>
          <Button />
          <BtnGroup />
          <AutoComplete />
          <Checkboxes />
      </div>
      <div className='flex justify-center items-center my-10 mx-10 gap-20'>
          <FloatBtn />
          <RadioButtonsGroup />
          <RatingBar />
          <Select />
      </div>
      <div className='flex justify-center items-center my-10 mx-10 gap-20'>
          <Slider />
      </div>
    </div>
  );
}

export default App;
