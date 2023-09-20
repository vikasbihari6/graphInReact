import React from 'react'
import GaugeChart from 'react-gauge-chart'

const SpeedMeter = ({arcsLength,percent,colors}) => {
  return (
    <div>
        <p className='text-center'>Days payable Outstanding</p>
      <GaugeChart id="gauge-chart5"
        nrOfLevels={420}
        arcsLength={arcsLength}
        colors={colors}
        percent={percent}
        arcPadding={0.02}
        style={{ width: '300px', height: '200px' }}
        
        
        />

    </div>
  )
}

export default SpeedMeter
