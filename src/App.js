import './App.css';
import SpeedMeter from './components/speedMeter';
import Stackedbar from './components/stackedbar';
import Bargraph from './components/bargraph';
import Linegraph from './components/linegraph';
import FinancialManagement from './components/financialManagement';


function App() {
  const arcLength1=[0.6, 0.4];
  const arcLength2=[0.3, 0.5];
  const arcLength3=[0.2, 0.6];
  const arcLength4=[0.7, 0.1];

  const color1=['#3565A0', '#E0E0E0'];
  const color2=['#F9B022', '#E0E0E0'];
  const color3=['#FF4F50', '#E0E0E0'];
  const color4=['#01A15F', '#E0E0E0'];

  const percent1=0.6;
  const percent2=0.3;
  const percent3=0.2;
  const percent4=0.8;
  
  return (
    <>

      <div className='row'>
        <div className='col-8'>
        <div className='row'>
          <div className='col-3 shadow p-3 mb-5 bg-body-tertiary rounded'><FinancialManagement data="$6621280" text="Total Account Recievable"/></div>
          <div className='col-3 shadow p-3 mb-5 bg-body-tertiary rounded'><FinancialManagement data="$1630270" text="Total Account Payable"/></div>
          <div className='col-3 shadow p-3 mb-5 bg-body-tertiary rounded'><FinancialManagement data="75.38 %" text="Equity Ratio"/></div>
          <div className='col-3 shadow p-3 mb-5 bg-body-tertiary rounded'><FinancialManagement data="1.10 %" text="Dept Equity"/></div>
        </div>
        <div className='row'>
          <div className='col-3 shadow p-3 mb-5 bg-body-tertiary rounded d-flex align-item-center justify-content-center'><SpeedMeter arcsLength={arcLength1} percent={percent1} colors={color1}/></div>
          <div className='col-3 shadow p-3 mb-5 bg-body-tertiary rounded d-flex align-item-center justify-content-center'><SpeedMeter arcsLength={arcLength2} percent={percent2} colors={color2}/></div>
          <div className='col-3 shadow p-3 mb-5 bg-body-tertiary rounded d-flex align-item-center justify-content-center'><SpeedMeter arcsLength={arcLength3} percent={percent3} colors={color3}/></div>
          <div className='col-3 shadow p-3 mb-5 bg-body-tertiary rounded d-flex align-item-center justify-content-center'><SpeedMeter arcsLength={arcLength4} percent={percent4} colors={color4}/></div>
        </div>
        
        </div>
        <div className='col-4'>
        <Bargraph />
        </div>
      </div>
      <div className='row'>
        <div className='col-6'>
        <Linegraph />
        </div>
        <div className='col-6 d-flex justify-content-center'>
        <Stackedbar />
        </div>
      </div>

    </>
  );
}

export default App;
