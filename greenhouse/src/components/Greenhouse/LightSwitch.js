import './LightSwitch.css';
import { useTheme } from '../../context/ThemeContext';
import { useRef } from 'react';

function LightSwitch() {
  const lightSwitch = useRef()
  const {themeName, setThemeName} = useTheme()
  const handleClick = e => {
    let theme = e.target.innerText.toLowerCase()
    // console.log(theme)
    if(theme === 'day') {
      // lightSwitch.classList.remove("day")
      setThemeName('day')
    }else {
      // lightSwitch.classList.remove("night")b
      setThemeName('night')
    }
  }
  return (
    <div className={`light-switch ${themeName}`} onClick={handleClick} ref={lightSwitch}>
      <div className="on">DAY</div>
      <div className="off">NIGHT</div>
    </div>
  );
}

export default LightSwitch;