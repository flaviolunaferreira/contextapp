import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Button extends Component {
  static contextType = ThemeContext;
  render() { 
    const { trocarTema } = this.context;
    return (
      <button onClick={ trocarTema }>Troque o Tema</button>
    );
  }
}
 
export default Button;
