import React, { Component } from 'react';


class AutoShrinkingText extends Component{
  constructor(props) {
    super(props);
    this.state = ({
      scale: 1
    })
  }

  componentDidUpdate(){

    let { scale } = this.state
    let node = this.node
    let parentNode = node.parentNode
    
    let availableWidth = parentNode.offsetWidth
    let actualWidth = node.offsetWidth
    let actualScale = availableWidth / actualWidth

    if (scale === actualScale) {
      return
    }

    if (actualScale < 1) {
      this.setState({
        scale: actualScale
      })
    } else if (scale > 1) {
      this.setState({
        scale: 1
      })
    }

  }

  render() {
    let { scale } = this.state

    console.log(scale)

    return (
      <div 
        {...this.props}
        style={{ transform: 'scale(${scale},${scale})' }} 
        ref={node => this.node = node}>
        {this.props.children}
      </div>
    )
  }
}




export class ValueButton extends Component{

  constructor(props) {
    super(props);
    this.state = ({
      displayValue: '0',
      waitingForOperand: false,
      operator: null,
      value: null
    });
  }

   clearDisplay() {
    let { displayValue } = this.state

    this.setState({
      displayValue: '0',
      value: '0'
    })
  }

  inputDigit(digit) {
    let { displayValue, waitingForOperand } = this.state

    if (waitingForOperand) {
      this.setState({
        displayValue: String(digit),
        waitingForOperand: false
      })
    } else {
      this.setState({
        displayValue: displayValue === '0' ? String(digit) : displayValue + digit
      })
    }
  }

  inputDot() {
    let { displayValue, waitingForOperand } = this.state

    if (waitingForOperand) {
      this.setState({
        displayValue: '.',
        waitingForOperand: false
      }) 
    } else if (displayValue.indexOf('.') === -1) {
        this.setState({
          displayValue: displayValue + '.',
          waitingForOperand: false
        })
      }
  }

 

  toggleSign() {
    let { displayValue } = this.state

    this.setState({
      displayValue: displayValue.charAt(0) === '-' ? displayValue.substr(1) : '-' + displayValue
    })
  }

  inputPercent() {
    const { displayValue } = this.state
    const value = parseFloat(displayValue)

    this.setState({
      displayValue: String(value / 100)
    })
  }

  performOperation(nextOperator) {
    let { displayValue, operator, value } = this.state

    let nextValue = parseFloat(displayValue)

    let operations = {
      "/": (prevValue, nextValue) => prevValue / nextValue,
      "*": (prevValue, nextValue) => prevValue * nextValue,
      "+": (prevValue, nextValue) => prevValue + nextValue,
      "-": (prevValue, nextValue) => prevValue - nextValue,
      "=": (prevValue, nextValue) => prevValue 
    }

    if (value == null) {
      this.setState({
        value: nextValue
      })
    } else if (operator) {
      let currentValue = value || 0
      let computedValue = operations[operator](currentValue, nextValue)

      this.setState({
        value: computedValue,
        displayValue: String(computedValue)
      })
    }
    

    //let computedValue = operations[operator](prevValue, nextValue)
    

    this.setState({
      waitingForOperand: true,
      operator: nextOperator
    })
  }





  render() {

    let { displayValue } = this.state

    return (
      
        <div className="calculator">
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
          <AutoShrinkingText className="calculator-display">{displayValue}</AutoShrinkingText>
          
          <div className="calculator-keypad">
            <div className="input-keys" >
              <div className="function-keys controls">
                <button className="calculator-key key-sign" onClick={() => this.toggleSign()}>±</button>
                <button className="calculator-key key-percent" onClick={() => this.inputPercent()}>%</button>
                <button className="calculator-key key-clear" onClick={() => this.clearDisplay()}>AC</button>
              </div>

              <div className="digit-keys controls">
                <button className="calculator-key key-9" onClick={() => this.inputDigit(9)}>9</button>
                <button className="calculator-key key-8" onClick={() => this.inputDigit(8)}>8</button>
                <button className="calculator-key key-7" onClick={() => this.inputDigit(7)}>7</button>
                <button className="calculator-key key-6" onClick={() => this.inputDigit(6)}>6</button>
                <button className="calculator-key key-5" onClick={() => this.inputDigit(5)}>5</button>
                <button className="calculator-key key-4" onClick={() => this.inputDigit(4)}>4</button>
                <button className="calculator-key key-3" onClick={() => this.inputDigit(3)}>3</button>
                <button className="calculator-key key-2" onClick={() => this.inputDigit(2)}>2</button>
                <button className="calculator-key key-1" onClick={() => this.inputDigit(1)}>1</button>
                <button className="calculator-key key-0" onClick={() => this.inputDigit(0)}>0</button>
                <button className="calculator-key key-dot" onClick={() => this.inputDot()}>•</button>
              </div>
            </div>



            <div className="operator-keys controls">
              <button className="calculator-key key-divide" onClick={() => this.performOperation('/')}>÷</button>
              <button className="calculator-key key-multiply" onClick={() => this.performOperation('*')}>x</button>
              <button className="calculator-key key-subtract" onClick={() => this.performOperation('-')}>-</button>
              <button className="calculator-key key-add" onClick={() => this.performOperation('+')}>+</button>
              <button className="calculator-key key-equals" onClick={() => this.performOperation('+')}>=</button>
            </div>
              
          </div>
        </div>
    );
  };
}








//<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"/>
















