import './Clock.css'
import React from 'react';
import pause from '../img/pause.png'
import play from '../img/play.png'

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date(),
        isToggleOn:true,
        img:pause
    };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
      console.log(this.state.isToggleOn)
      if(this.state.isToggleOn===true){
        this.setState(state =>({
            img:play
        }))
        clearInterval(this.timerID);
      }else{
        this.setState(state =>({
            img:pause
        }))
        this.tick()
        this.timerID = setInterval(
            () => this.tick(),
            1000
          );
      }
    }
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }

    render() {
      return (
        <div className='Clock'>
          <h1>Поганий годинник</h1>
          <div className="Clock__main" >
            <h2>{this.state.date.toLocaleTimeString()}</h2>
            <img className='toogleBtn' src={this.state.img} alt="" onClick={this.handleClick} />
          </div>
        
        </div>
      );
    }
  }
export default Clock