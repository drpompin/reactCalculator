import React, { Component } from 'react';

export class ValueButton extends Component{

    constructor(props) {
      super(props);
      this.state = {
        displayScreen: ''
      }
    this.passValue = this.passValue.bind(this)
    this.addChar = this.addChar.bind(this)
  }

  passValue(value){
    this.setState({
      displayScreen: value
    })
  }

  addChar(input, character) {
    if (input.value == null || input.value == "0") {
      input.value = character;
    }
    else{
      input.value += character;
    }
  }



  render() {
    return (
      <center>
        <form>
          <div className="answer_screen"></div>
          
          <div className="disp_screen">{this.state.displayScreen}</div>
          <input />

          <div className="prnt_btn" >
            <div className="btn" >Rad</div>
            <div className="btn" >Deg</div>
            <div className="btn" >X!</div>
            <div onClick={this.passValue.bind(this, '(')} className="btn" >(</div>
            <div onClick={this.passValue.bind(this, ')')} className="btn" >)</div>
            <div className="btn" >C</div>
            <div className="btn" >CE</div>
          </div>

          <div className="prnt_btn" >
            <div className="btn" >inv</div>
            <div className="btn" >sin</div>
            <div className="btn" >ln</div>
            <div onClick={this.passValue.bind(this, '7')} className="btn" >7</div>
            <div onClick={this.passValue.bind(this, '8')} className="btn" >8</div>
            <div onClick={this.passValue.bind(this, '9')} className="btn" >9</div>
            <div onClick={this.passValue.bind(this, '/')} className="btn" >÷</div>
          </div>

          <div className="prnt_btn" >
            <div className="btn" >&#960;</div>
            <div className="btn" >cos</div>
            <div className="btn" >log</div>
            <div onClick={this.passValue.bind(this, '4')} className="btn" >4</div>
            <div onClick={this.passValue.bind(this, '5')} className="btn" >5</div>
            <div onClick={this.passValue.bind(this, '6')} className="btn" >6</div>
            <div onClick={this.passValue.bind(this, '*')} className="btn" >x</div>
          </div>

          <div className="prnt_btn" >
            <div className="btn" >e</div>
            <div className="btn" >tan</div>
            <div className="btn" >√</div>
            <div onClick={this.passValue.bind(this, '1')} className="btn" >1</div>
            <div onClick={this.passValue.bind(this, '2')} className="btn" >2</div>
            <div onClick={this.passValue.bind(this, '3')} className="btn" >3</div>
            <div onClick={this.passValue.bind(this, '-')} className="btn" >-</div>
          </div>

          <div className="prnt_btn" >
            <div className="btn" >%</div>
            <div className="btn" >Exp</div>
            <div className="btn" >x^2</div>
            <div onClick={this.passValue.bind(this, '0')} className="btn" >0</div>
            <div onClick={this.passValue.bind(this, '.')} className="btn" >.</div>
            <div className="btn" >=</div>
            <div onClick={this.passValue.bind(this, '.')} className="btn" >+</div>
          </div>

        </form>
      </center>
    );
  };
}








//<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"/>
















