import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value = 10 }) => {
    
    const [counter, setCounter ] = useState(value); //[]

   
    //handleAdd
    const handleAdd = () => {
        setCounter( counter + 1 );
        //setCounter ((c)=>c+1);
    }

    const handReset = () => {
        setCounter(value);
    }
    
    const handSubtraction = () => {
        setCounter( counter - 1 );
    }
    
    return( 
        <>
            <h1>CounterApp</h1>
            <h2>  {counter}   </h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handReset}>Reset</button>
            <button onClick={handSubtraction}>-1</button>
            

        </>
        );
}

CounterApp.propTypes={
    value: PropTypes.number

}

export default CounterApp;