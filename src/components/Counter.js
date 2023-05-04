import { useSelector, useDispatch } from 'react-redux'
import { Fragment } from "react";

import classes from './Counter.module.css';
import { counterActions } from "../store";

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter.counter);
    const showCounter = useSelector(state => state.counter.showCounter);

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggle());
    };

    const incrementHandler = () => {
        dispatch(counterActions.increment());
    };

    const increaseByFiveHandler = () => {
        dispatch(counterActions.increase({ amount: 5 }));
    };
    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    };


    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>

            {showCounter && (
                <Fragment>
                    <div className={classes.value}>{ counter }</div>
                    <div>
                        <button onClick={incrementHandler}>Increment</button>
                        <button onClick={decrementHandler}>Decrement</button>
                        <button onClick={increaseByFiveHandler}>Increase by 5</button>
                    </div>
                </Fragment>
            )}

            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;

// Class based with Redux store
/**
    class Counter extends Component {
        constructor() {
            super();
        }

        incrementHandler() {
            this.props.increment({type: 'increment'});
        }

        decrementHandler() {
            this.props.decrement({type: 'decrement'});
        }

        toggleCounterHandler () {};

        render() {
            return (
                <main className={classes.counter}>
                    <h1>Redux Counter</h1>
                    <div className={classes.value}>{ this.props.counter }</div>
                    <div>
                        <button onClick={this.incrementHandler.bind(this)}>Increment</button>
                        <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
                    </div>
                    <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
                </main>
            )
        }
    }

    const mapStateToProps = state => {
        return {
            counter: state.counter,
        }
    }

    const mapDispatchToProps = dispatch => {
        return {
            increment: () => dispatch({type: 'increment'}),
            decrement: () => dispatch({type: 'decrement'}),
        }
    }

    export default connect(mapStateToProps, mapDispatchToProps)(Counter);
 **/
