import { useState } from 'react'
import Screen from './components/Screen'
import './App.css';

function App()
{
  // States

  const [ screenValue, setScreenValue ] = useState( '' )

  // Vars

  /* Verificação se o último char não é um número */
  const checkLastChar = screenValue[ screenValue.length - 1 ] == '+' || screenValue[ screenValue.length - 1 ] == '-' || screenValue[ screenValue.length - 1 ] == 'X' || screenValue[ screenValue.length - 1 ] == '÷' || screenValue[ screenValue.length - 1 ] == '.'

  // Functions

  /* Adicionar valor */
  const addValue = ( v ) =>
  {
    if ( screenValue == '' && ( v != 'X' && v != '÷' && v != '.' ) )
    {
      setScreenValue( screenValue + v )

    } else if ( screenValue != '' )
    {
      if ( checkLastChar && ( v == '+' || v == '-' || v == 'X' || v == '÷' || v == '.' ) )
      {

      } else
      {
        setScreenValue( screenValue + v )
      }
    }
  }

  /* Adicionar valor através das teclas */
  const addValueKeyPress = ( e ) =>
  {
    let keyValue = e.key

    const numbers = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ]
    const operations = [ '+', '-', '*', '/' ]

    if ( numbers.indexOf( keyValue ) >= 0 )
    {
      addValue( keyValue )
    }

    if ( operations.indexOf( keyValue ) >= 0 )
    {
      if ( keyValue == '*' )
      {
        addValue( 'X' )
      } else if ( keyValue == '/' )
      {
        addValue( '÷' )
      } else
      {
        addValue( keyValue )
      }
    }

    if ( keyValue == 'c' )
    {
      clean()
    }

    if ( keyValue == 'Backspace' )
    {
      backspace()
    }

    if ( keyValue == 'Enter' )
    {
      resultValue()
    }
  }

  /* Apagar */
  const backspace = () =>
  {
    setScreenValue( screenValue.slice( 0, -1 ) )
  }

  /* Apagar tudo */
  const clean = () =>
  {
    setScreenValue( '' )
  }

  /* Resultado */
  const resultValue = () =>
  {
    if ( screenValue != '' && screenValue.length > 1 )
    {
      let result = screenValue

      if ( checkLastChar )
      {
        result = result.slice( 0, -1 )
      }

      result = result.replaceAll( 'X', '*' ).replaceAll( '÷', '/' )
      result = eval( result )

      setScreenValue( String( result ) )
    }
  }



  return (
    <div onKeyDown={ ( e ) => addValueKeyPress( e ) } className="App">
      <div className='Calculator'>

        <Screen screenValue={ screenValue } />

        <div className='Buttons'>

          <button onClick={ () => clean() }>C</button>
          <button onClick={ () => backspace() }>&larr;</button>
          <button className='Ops' onClick={ () => addValue( '÷' ) }>÷</button>
          <button></button>

          <button onClick={ () => addValue( '7' ) }>7</button>
          <button onClick={ () => addValue( '8' ) }>8</button>
          <button onClick={ () => addValue( '9' ) }>9</button>

          <button className='Ops' onClick={ () => addValue( 'X' ) }>X</button>

          <button onClick={ () => addValue( '4' ) }>4</button>
          <button onClick={ () => addValue( '5' ) }>5</button>
          <button onClick={ () => addValue( '6' ) }>6</button>

          <button className='Ops' onClick={ () => addValue( '-' ) }>-</button>

          <button onClick={ () => addValue( '1' ) }>1</button>
          <button onClick={ () => addValue( '2' ) }>2</button>
          <button onClick={ () => addValue( '3' ) }>3</button>

          <button className='Ops' onClick={ () => addValue( '+' ) }>+</button>
          <button onClick={ () => addValue( '0' ) }>0</button>
          <button onClick={ () => addValue( '.' ) }>.</button>

          <button className='IgualsButton' onClick={ () => resultValue() }>=</button>

        </div>

      </div>
    </div>
  );
}

export default App;
