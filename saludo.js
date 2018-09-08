import React from "react";
import {  Text} from 'react-native';


export default class Saludo extends React.Component {
  render() {
    return (
        <Text>Hola {this.props.nombre}!</Text>
        )
    
  }
}
