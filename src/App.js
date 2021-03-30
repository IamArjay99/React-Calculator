import { useState } from 'react';
import Buttons from './components/Buttons';

const App = () => {

  const [ formula, setFormula ] = useState(0);

  const onHandleEvent = (str) => {

    const element     = document.getElementById("formula");
    let currFormula = element.value;

    let newFormula;
    let arr = currFormula ? currFormula.split("") : '0';
    const lastChar = currFormula[currFormula.length-1];

    switch(str) {
      case 'delete':
        if (arr !== 0 && arr.length > 1) {
          arr.splice(arr.length-1, 1);
          newFormula = arr.join("");
        } else {
          newFormula = 0;
        }
        break;
      case '/': case '*':
      case '+': case '-':

        if (arr !== '0' && arr.length > 0 && (arr[arr.length-1] != '+' && arr[arr.length-1] != '-' && arr[arr.length-1] != '/' && arr[arr.length-1] != '*')) {
          newFormula = currFormula !== '0' ? currFormula+str : str;
        } else {
          arr[arr.length-1] = str;
          newFormula = arr.join("");
        }

        break;
      case '.':
        if (lastChar === '.') {
          newFormula = currFormula;
        } else {
          let split = currFormula ? currFormula.split(/[(+)(/)(*)]/).join("-").split("-") : [];
          let dot   = split.length > 0 ? split[split.length-1].toString() : "";
          console.log(split);
          const count = () => {
            let flag = 0;
            dot.split("").forEach(item => item === '.' && ++flag);
            return flag;
          }

          if (count() > 0) {
            newFormula = currFormula;
          } else {
            arr[arr.length] = str;
            newFormula = arr.join("");
          }
        }
        break;
      case '=':
        if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
          newFormula = currFormula;
        } else {
          newFormula = eval(currFormula);
        }
        break;
      case 'clear':
        newFormula = 0;
        break;
      default:
        newFormula = currFormula !== '0' && currFormula[0] !== '+' && currFormula[0] !== '/' && currFormula[0] !== '*' ? currFormula+str : str;
        break;
    }
    setFormula(newFormula);
    element.focus();
  }

  return (
    <div className="container">
      <header>React - Calculator</header>
      <div className="form-group"><input type="text" value={formula} readOnly id="formula" /><button onClick={() => onHandleEvent('delete')}>DELETE</button></div>
      <Buttons onHandleEvent={onHandleEvent} />
    </div>
  );
}

export default App;
