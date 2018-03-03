import React, { Component } from 'react';

export class ValueButton extends Component{

  constructor(props) {
    super(props);
    this.state = {
      value: null,
      displayValue: '0',
      waitingForOperand: false,
      operator: '',
      anti: false
    }
    this.passValue = this.passValue.bind(this)
    this.toggle = this.toggle.bind(this)
  }

  toggle(){
    this.setState({
      anti: !this.state.anti
    })
  }


  passValue(digit) {
    let { displayValue, waitingForOperand, operator } = this.state

    if (waitingForOperand) {
      this.setState({
        displayValue: digit,
        waitingForOperand: false
      })
    } else {
      this.setState({
        displayValue: displayValue === '0' ? String(digit) : displayValue + digit
      })
    }
  }


  passDot() {
    let { displayValue, waitingForOperand } = this.state

    if (waitingForOperand) {
      this.setState({
        displayValue: displayValue + '.',
        waitingForOperand: false
      })
    } else if (displayValue.indexOf('.') === -1 ) {
      this.setState({
        displayValue: displayValue + '.',
        waitingForOperand: false
      })
    }
  }

  clearDisplay() {
    let { displayValue, waitingForOperand } = this.state

    this.setState({
      displayValue: '0',
      waitingForOperand: false,
      value: null
    })
  }

  deleteDisplay() {
    let { displayValue } = this.state

    if (displayValue !== '0') {
      this.setState({
        displayValue: displayValue ? displayValue.slice(0, -1) : '0'
      })
    } 
  }

  toPercent() {
   let { displayValue } = this.state
   let actualValue = parseFloat(displayValue)
   
    this.setState({
      displayValue: String(actualValue/100)
    }) 
  }

  

  Sine() {
   let { displayValue } = this.state
   let actualValue = parseFloat(displayValue)
   
    this.setState({
      displayValue: Math.sin(actualValue)
    }) 
  }

  asin() {
   let { displayValue } = this.state
   let actualValue = parseFloat(displayValue)
   
    this.setState({
      displayValue: Math.asin(actualValue)
    }) 
  }

  Cos() {
   let { displayValue } = this.state
   let actualValue = parseFloat(displayValue)
   
    this.setState({
      displayValue: Math.cos(actualValue)
    }) 
  }

  acos() {
   let { displayValue } = this.state
   let actualValue = parseFloat(displayValue)
   
    this.setState({
      displayValue: Math.acos(actualValue)
    }) 
  }

  ln() {
   let { displayValue } = this.state
   let actualValue = parseFloat(displayValue)
   
    this.setState({
      displayValue: Math.log(actualValue)
    }) 
  }

  invln() {
   let { displayValue } = this.state
   let actualValue = parseFloat(displayValue)
   
    this.setState({
      displayValue: Math.ln(actualValue)
    }) 
  }

  tan() {
   let { displayValue } = this.state
   let actualValue = parseFloat(displayValue)
   
    this.setState({
      displayValue: Math.tan(actualValue)
    }) 
  }

  atan() {
   let { displayValue } = this.state
   let actualValue = parseFloat(displayValue)
   
    this.setState({
      displayValue: Math.atan(actualValue)
    }) 
  }

  Log() {
   let { displayValue } = this.state
   let actualValue = parseFloat(displayValue)
   
    this.setState({
      displayValue: Math.log10(actualValue)
    }) 
  }

  antilog() {
   let { displayValue } = this.state
   let actualValue = parseFloat(displayValue)
   
    this.setState({
      displayValue: Math.log10(10, actualValue)
    }) 
  }

  E() {
   let { displayValue } = this.state
   let actualValue = parseFloat(displayValue)
   
    this.setState({
      displayValue: String(actualValue * 2.71828182846)
    }) 
  }

  Exp() {
   let { displayValue } = this.state
   let actualValue = parseFloat(displayValue)
   
    this.setState({
      displayValue: Math.exp(actualValue)
    }) 
  }

  Square() {
   let { displayValue } = this.state
   let actualValue = parseFloat(displayValue)
   
    this.setState({
      displayValue: String(actualValue * actualValue)
    }) 
  }

  SquareRoot() {
   let { displayValue } = this.state
   let actualValue = parseFloat(displayValue)
   
    this.setState({
      displayValue: Math.sqrt(actualValue)
    }) 
  }

  CubeRoot() {
   let { displayValue } = this.state
   let actualValue = parseFloat(displayValue)
   
    this.setState({
      displayValue: Math.cbrt(actualValue)
    }) 
  }



  Pie() {
   let { displayValue } = this.state
   let actualValue = parseFloat(displayValue)
   let pieValue = 3.141592653589793

   if (displayValue == 0 || displayValue == null || displayValue == '') {
    this.setState({
      displayValue: String(pieValue)
    })
   } else{
      this.setState({
      displayValue: String(actualValue * 3.141592653589793)
      })
    }
  }


  factorial(actualValue) {
    let { displayValue } = this.state
    actualValue = parseFloat(displayValue)

    if (actualValue === 0 || actualValue === 1)
      return 1
   
    while (actualValue > 1) {
      actualValue--
      this.setState({
        displayValue: displayValue *= actualValue
      })
    
    } 
      return displayValue
  }




  performOperation(nextOperator) {
    let { value, displayValue, operator } = this.state
    let nextValue = parseFloat(displayValue)
    
    const operations = {
      '/': (prevValue, nextValue) => prevValue / nextValue,
      '*': (prevValue, nextValue) => prevValue * nextValue,
      '+': (prevValue, nextValue) => prevValue + nextValue,
      '-': (prevValue, nextValue) => prevValue - nextValue,
      '=': (prevValue, nextValue) => nextValue
    }

    if (value === null) {
      this.setState({
        value: nextValue
      })
    } else if (operator) {
      const currentValue = value || 0
      const computedValue = operations[operator](currentValue, nextValue)

      this.setState({
        value: computedValue,
        displayValue: String(computedValue)
      })
    }


      this.setState({
        operator: nextOperator,
        //displayValue: displayValue,
        waitingForOperand: true
      })


    // if (displayValue.indexOf(operator) == -1) {
    //   this.setState({
    //     operator: operator,
    //     displayValue: displayValue + operator,
    //     waitingForOperand: true
    //   })
    // } else {
    //   this.setState({
    //     displayValue: displayValue,
    //     waitingForOperand:false
    //   })
    // }


    
    // this.setState({
    //   waitingForOperand: true,
    //   // operator: operator,
    //   displayValue: displayValue + operator
    // })
  }



  



  render() {

    let { displayValue } = this.state

    return (
      <form>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <div className="disp_screen"> { displayValue } </div>

        <div className="prnt_btn" >
          <div className="btn" >Rad</div>
          <div className="btn" >Deg</div>
          <div className="btn" onClick={this.factorial.bind(this)}>X!</div>
          <div onClick={this.passValue.bind(this, '(')} className="btn" >(</div>
          <div onClick={this.passValue.bind(this, ')')} className="btn" >)</div>
          <div onClick={() => this.clearDisplay()} className="btn" >C</div>
          <div onClick={() => this.deleteDisplay()} className="btn" >CE</div>
        </div>

        <div className="prnt_btn" >
          <div className="btn" onClick={this.toggle} >inv</div>
          {
            this.state.anti ?
            <div className="btn" onClick={() => this.Asin()}>sin-1</div> :
            <div className="btn" onClick={() => this.Sine()}>sin</div>
          }

          {
            this.state.anti ?
            <div className="btn" onClick={() => this.invln()}>1-ln</div> :
            <div className="btn" onClick={() => this.ln()}>ln</div>
          }
          <div onClick={this.passValue.bind(this, '7')} className="btn" >7</div>
          <div onClick={this.passValue.bind(this, '8')} className="btn" >8</div>
          <div onClick={this.passValue.bind(this, '9')} className="btn" >9</div>
          <div onClick={this.performOperation.bind(this, '/')} className="btn" >÷</div>
        </div>

        <div className="prnt_btn" >
          <div className="btn" onClick={() => this.Pie()}>&#960;</div>
          {
            this.state.anti ? 
            <div className="btn" onClick={() => this.acos()}>acos</div> : 
            <div className="btn" onClick={() => this.Cos()}>cos</div>
          }

          {
            this.state.anti ?
            <div className="btn" onClick={() => this.antilog()}>alog</div> :
            <div className="btn" onClick={() => this.Log()}>log</div>
          }
          
          <div onClick={this.passValue.bind(this, '4')} className="btn" >4</div>
          <div onClick={this.passValue.bind(this, '5')} className="btn" >5</div>
          <div onClick={this.passValue.bind(this, '6')} className="btn" >6</div>
          <div onClick={this.performOperation.bind(this, '*')} className="btn" >x</div>
        </div>

        <div className="prnt_btn" >
          <div className="btn" onClick={() => this.E()}>e</div>

          {
            this.state.anti ?
            <div className="btn" onClick={() => this.atan()}>atan</div> :
            <div className="btn" onClick={() => this.Tan()}>tan</div>
          }

          {
           this.state.anti ?
            <div className="btn" onClick={() => this.SquareRoot()}>3√</div> :
            <div className="btn" onClick={() => this.CubeRoot()}>√</div>
           
          }

          <div onClick={this.passValue.bind(this, '1')} className="btn" >1</div>
          <div onClick={this.passValue.bind(this, '2')} className="btn" >2</div>
          <div onClick={this.passValue.bind(this, '3')} className="btn" >3</div>
          <div onClick={this.performOperation.bind(this, '-')} className="btn" >-</div>
        </div>

        <div className="prnt_btn" >
          <div onClick={() => this.toPercent()} className="btn" >%</div>
          <div className="btn" onClick={() => this.Exp()}>Exp</div>
          <div className="btn" onClick={() => this.Square()}>x^2</div>
          <div onClick={this.passValue.bind(this, '0')} className="btn" >0</div>
          <div onClick={this.passDot.bind(this, '.')} className="btn" >.</div>
          <div className="btn" onClick={() => this.performOperation()} >=</div>
          <div onClick={this.performOperation.bind(this, '+')} className="btn" >+</div>
        </div>

      </form>
    );
  };
}








//<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"/>
















