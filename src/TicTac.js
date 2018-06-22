import React,{ Component } from "react";
import './App.css';

class TicTac extends Component{
    render(){
        return(
            <div>
                <h1 className="tic">Tic Tac Toe</h1>
                <table>
                <tr>
                    <td></td>
                    <td className="middle"></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="second"></td>
                    <td className="middle second"></td>
                    <td className="second"></td>
                </tr>
                <tr>
                    <td></td>
                    <td className="middle"></td>
                    <td></td>
                </tr>
                </table>
            </div>
        )
    }
}
export default TicTac;