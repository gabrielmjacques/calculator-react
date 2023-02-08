import { useState } from 'react'
import Screen from './components/Screen'
import './App.css';

function App()
{
  // States
  const [ screenValue, setScreenValue ] = useState( 0 )


  // Functions
  const addValue = ( v ) =>
  {
    if ( screenValue == '0' || screenValue == undefined )
    {
      setScreenValue()
      setScreenValue( v )

    } else
    {
      setScreenValue( screenValue + '' + v )
    }
  }

  const backspace = () =>
  {
    setScreenValue( screenValue.slice( 0, -1 ) )
  }

  const clean = () =>
  {
    setScreenValue( '0' )
  }

  const resultValue = () =>
  {
    if ( screenValue == '' )
    {
      setScreenValue( '0' )
    }

    let result = eval( screenValue.replaceAll( 'X', '*' ).replaceAll( '÷', '/' ) )

    setScreenValue( result.toString() )
  }



  return (
    <div className="App">
      <div className='Calculator'>

        <Screen screenValue={ screenValue } />

        <div className='Buttons'>

          <button onClick={ () => clean() }>C</button>
          <button onClick={ () => backspace() }>&larr;</button>
          <button onClick={ () => alert( 'Indisponível' ) }>%</button>
          <button onClick={ () => addValue( '÷' ) }>÷</button>

          <button onClick={ () => addValue( '7' ) }>7</button>
          <button onClick={ () => addValue( '8' ) }>8</button>
          <button onClick={ () => addValue( '9' ) }>9</button>

          <button onClick={ () => addValue( 'X' ) }>X</button>

          <button onClick={ () => addValue( '4' ) }>4</button>
          <button onClick={ () => addValue( '5' ) }>5</button>
          <button onClick={ () => addValue( '6' ) }>6</button>

          <button onClick={ () => addValue( '-' ) }>-</button>

          <button onClick={ () => addValue( '1' ) }>1</button>
          <button onClick={ () => addValue( '2' ) }>2</button>
          <button onClick={ () => addValue( '3' ) }>3</button>

          <button onClick={ () => addValue( '+' ) }>+</button>
          <button onClick={ () => alert( 'Indisponível' ) }>+/-</button>
          <button onClick={ () => addValue( '0' ) }>0</button>
          <button onClick={ () => alert( 'Indisponível' ) }>.</button>

          <button onClick={ () => resultValue() }>=</button>

        </div>

      </div>
    </div>
  );
}

export default App;
