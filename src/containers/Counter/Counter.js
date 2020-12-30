import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
            default:
                break;
        }
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
                <button onClick={onStoreResult}>Store Result</button>
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
        ctr: state.counter,
        storedResults: state.results,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({ type: actionTypes.INCREMENT }),
        decrement: () => dispatch({ type: actionTypes.DECREMENT }),
        add: () => dispatch({ type: actionTypes.ADD, value: 5 }),
        subtract: () => dispatch({ type: actionTypes.SUBTRACT, value: 5 }),
        onStoreResult: () => dispatch({ type: actionTypes.STORE_RESULT }),
        onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, id: id })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);