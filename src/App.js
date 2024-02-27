import './App.css';

function App() {
  return (
    <div className="NetArt">
      <div className='gap'></div>
      <div className='aside'>
        <img className='award-img' src={require('./1.png')} alt='award'/>
      </div>
    
      <div className='content'>
        <img className='logo' src={require('./logo.png')} alt='Logo'/>
        <div className='heading'> C.R.I PUMPS WIN THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</div>
        <ul>
          <li>C.R.I's energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects accross the globe to save energy.</li>
          <li>C.R.I. is the highest contributer in the country for projects of EESL(Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
        </ul>
        <img className='award' src={require('./2.png')} alt='award'/>
        <div>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</div>
      </div>
      <footer className='footer'>
        <div>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROOS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. 
        </div>
        <div className='pipes'>
        <img src={require('./3.png')} alt='pipes'/>
        <label className='label'> Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</label>
        </div>
        <div className='details'>
          <head>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</head>
          <p>CHEMICALS & PROCESS <label>| </label> POWER <label>|</label> OILS & GAS <label>|</label> SUGARS & DISTILLERIES <label>|</label> PAPER & PULP <label>|</label> MARINE & DEFENCE <label>|</label> METAL & MINING <label>|</label> FOOD & BEVERAGE <label>|</label> PETROCHEMICALS & REFINERIES <label>|</label> SOLAR <label>|</label> BUILDING <label>|</label> HVAC <label>|</label> FIRE FIGHTING <label>|</label> AGRICULTURE & RESIDENTAL</p>
        </div>
        <div>
        </div>
        <div className='contact'>
          <div className='call'>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEt0lEQVR4nO2by2sUWRSHCx11p/4F43P+gUHxvffRNjpRoyMYH1mI7lyIhBgNguhCTUYQxJUhIG4FwY2g0TzU9gEiGE2C+NbQicJkSOxOPjlUNbY99bhVdavrNvhBQQhdt+v3q6pz7zn3tGX9IlmAuUAWaAY6gQfAEDACTDiH/D0I3Hc+0+ycM9eqRYA/gFZHbJHoFB1TjgOLLZMBpgM7gW6SYQq4C/wt32UZJrwRGKB6vAT2pm4E8Cdwj/R4DKxIQ/gsoB2YJH3kGtrkmqolfh7Qi3k8TDxQAmuAUcxFptPVSYnfCPyH+YwDdbrFZ4ECtYNc60Zd4pcDY9Qe8rSuiSt+kfI7PzEBPT1w/Tq8f48h5IEFcaa6nNLXfPoE+/fD2rX2kcnAjRsYwoNIUyTwj7L43bt/iC8d69bBtWsYwrmw4pcqLXK8xJtngmhZHmZt/yi2ePNMyCnlDtiJjT9fvkBDQ7D4chMkOKbPHpW7/yJwmGPH1MWXm3DrFikjGetvfgbsDBzi3TtbTFgD5NiyBcZloZYqO/wM6Ak8/fbtaOJLx/PnpEyXl/jFTtXFnzt34hnw4QMpIxoXuhnQqnT66Gj0V+DIEQyhxc2AnPLpJ0+GFy+zhkydZtDrVrouKp8+OBjuKdi1y4RHvzJbnFOZ7oZDdSo0T3yJTLkBR0OfrvIUyGP/8SOG0lRugOzGhKetzd+AF8FrqhS5XG6A7L6EZ2QENm/2NsCcoOdGX7kBryIPc/WqtwGXLmEwQ+UGSOUkGlIJamx0NyCbNTkGDJcbIDu00Xn2zDsgnjiBoYzrM0C4eNH7VUg/Cww0IB97uG/f4OBB7yzw82dMfgVeaRnyzRvvWeHAARgbMzYI3tc2rGSLXvGgqQkKEfZXikV48sQuu3/9msg02IlOOju944GYEOZJqCy5yxPW16d9IXQUnUxNwenT3ibI66ASE2QKdas9yr5Dd7fWpXAW3UxO2lOglwl1dXDzZvSq8/r1cWeXn5KhOTGbmbwXSYcP++cLra3w+rXandf3JEggml1ZE5AtJBIxoaXFX8iGDXD+vC28vz9cyV1MuCu9U6HocasIHScpJPKfOqUuKuwhJvSGalppjl4UjRMYOzqi1xODjq1bVadI96KokGCP3w+6umDTpmRMUIsH7mVxwWlCTB4JejIV6jYgp1TXrbcCtsb6k3fACY4XLuh7Jfbts8cMbrD03yDF7sCsHk+f2hcfR/y2bTAk/deBNPiKF4BpVe/+lDt35Yp/eS2+eLXtcQFYkkoXaD4P7e32Kk9FfH29qnjRsswKA3b7aToMDNj7Dn7xQf3OC2dCiReAGam3xMreg2zDVRpx6BC8fas6iqT6M60YbXIjpM3wsJ34SPKkftdxKl3zI4mvaJT8l9pslFyts0+4QO1Q+Cnd1WRCpkZaZqUH5y+t4ksAq7RUkJNDrm2llSTA70q9RNUn55nlJWDCTOCsQT+ZORN5qtPwoyktJdqIPFJugU0K7Axyj1KDpT4kY22QvMUyBWwjdsjWSEKVJRmzC9hulHA3JBhJK5rzesRZPxSc5Xhz5B8+pA0w21lINQEdTqo96ExZpR9P553/iWGXnc9m/le6/oWlne+oTXmybW4HzQAAAABJRU5ErkJggg==" alt='contact'/>
            <label>Toll Free <b>1800 200 1234</b></label>
          </div>
          <div className='facebook'>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACk0lEQVR4nO1WzU4aURTmIbpoq6bPQObcCRoTE7etfQBjVMSNheoLuNKVG5OuZLALl6YLo5HSuPMpMGpFcHBh2VTBRZGZrzn3DiB/8wMsOclJJjPfnPPd83tDoZGMJICAaAKalgDRLwhxASEqjvJzBkRx6Pr48B1HImMQwgDRC4SAh1og+oFw+MNwnBN9BtGTNK7rVayuXuP0tITb2xqen5Xy88lJCbHYlcQwlv8hmhvMuRBf5YnYYCx2g2KxCqDmqqZZxcrKTSMampbo/+RChrMGwzA9HbdrMmnKf5WNueA5JyfshlFwdfTwwOG3cHBg4fDQwvm51fhmGEUnHY/QtHdBTv+9EXY358fHFqamWotwft5uwUSjOeeb4df5hAwdF5NbzguFGiYnO7ugncDdXVXa4g6KRMa8CWhaQhrianc7PYe87nRmBjg7s5DNWsjlOrHR6LWTii/eBITISDC3lRuB7W27QWBry/ZIVckhkPaTgksJzufdq3xzs0nAMJqF1015TijshZ8IlCW4UvFPYH/fnQDbUtiynwg8STBPuHZD6XQz7710Y8PuSYDo0X8KTLM/Aru7dteOCZCCTM8i5EqfnYXU1/0/Pa3esfJQ6izCP0GKMO4Mocuh1QDbUtg1bwK6Pu6s3Rfc3/8bmAAPMyFqvgcRC4hS0vDycm5gAktL9VGcDPkVhMPvG92QShX6JsBbVGH+Qoi3vgmw8Ap17gJ213XsRWBvj50zxoKufwz1I1B7QbXe4mK+ZTn1IsB1s7CQf3U9i/flvC4Q4pPc58qgWixHRyWsrzcJ7OzY8l00+tu5hKiw93vydoGmvQHRN1+XUoUxAl1AAt6O1yDETxBlnb1Rls9EafnNb6uNZCQhJf8BXiLWY/nKuPMAAAAASUVORK5CYII=" alt='facebook'/>
            <label>www.facebook.com/cripumps</label>
          </div>
          <div className='web'>
            <img src={require('./web.png')} alt='web'/>
            <label>www.crigroups.com</label>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
