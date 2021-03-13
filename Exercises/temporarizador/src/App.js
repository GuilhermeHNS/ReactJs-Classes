import React, {Component} from 'react'
import Cronometro from './Assets/cronometro.png'
import indexCss from './index.css'
import Style from './style.css'
class App extends Component{

    constructor(props){
        super(props)
        this.state={
            numero: 0.0,
            botao: 'Iniciar'
        }
        this.timer = null
        this.iniciarPara = this.iniciarPara.bind(this)
        this.limpar = this.limpar.bind(this)
    }

    iniciarPara(){
        var state = this.state
        if(this.timer !== null){
            clearInterval(this.timer)
            this.timer = null
            state.botao = 'Iniciar'
            this.setState(state)

        }else{
            this.timer = setInterval(()=>{
                state.numero += 0.1
                state.botao = 'Pausar'
                this.setState(state)
            },100)
            
        }
        
    }

    limpar(){
        let state = this.state
        state.numero = 0.0
        this.setState(state)
        clearInterval(this.timer)
        this.timer = null
        state.botao = 'Iniciar'
    }

    render(){
        return(
            <div className="container">
                <img src={Cronometro} className="img"></img>
                <a className="timer">{this.state.numero.toFixed(2)}</a>

                <div className="containerBtn">
                    <a className="botao" onClick={this.iniciarPara}>{this.state.botao}</a>
                    <a className="botao"onClick={this.limpar}>Limpar</a>
                </div>
            </div>
        )
    }
}

export default App