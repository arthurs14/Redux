import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {
    state = {
        counter: 0
    }

    render() {
        const { ctr, storedResults, increment, decrement, add, subtract, onStoreResult, onDeleteResult } = this.props;
        return (
            <div>
                <CounterOutput value={ctr} />
                <CounterControl label="Increment" clicked={increment} />
                <CounterControl label="Decrement" clicked={decrement} />
                <CounterControl label="Add 5" clicked={add} />
                <CounterControl label="Subtract 5" clicked={subtract} />
                <hr />
                <button onClick={() => onStoreResult(ctr)}>Store Result</button>
                <ul>
                    {
                        storedResults.map(result => (
                            <li key={result.id} onClick={() => onDeleteResult(result.id)}>{result.value}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({ type: actionTypes.INCREMENT }),
        decrement: () => dispatch({ type: actionTypes.DECREMENT }),
        add: () => dispatch({ type: actionTypes.ADD, value: 5 }),
        subtract: () => dispatch({ type: actionTypes.SUBTRACT, value: 5 }),
        onStoreResult: (result) => dispatch({ type: actionTypes.STORE_RESULT, result: result }),
        onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, id: id })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);