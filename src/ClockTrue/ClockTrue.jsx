import './ClockTrue.css'
import React from 'react';
// import pause from '../img/pause.png'
// import play from '../img/play.png'
class ClockTrue extends React.Component{
    constructor(props){
        super(props)
            this.state ={time:0,
                mainTime:0,
                timeToEnter:'',
                img:pause
            }
      
            this.btnClick=this.btnClick.bind(this)
        
    }
     btnClick() {
        console.log('saad')
     
    }

    componentDidMount() {
    this.Timer=setInterval(
        ()=>{
            
            this.tick()
            
        },1000)
    }
    tick() {
        
        this.setState(state=>({
            mainTime:this.state.mainTime+1,
            time:this.state.mainTime,
            timeToEnter:' '
 
        })
        )
        console.log(this.state.timeToEnter,this.state.mainTime)
       
        if(this.state.time>=3600){
            if(this.state.time/3600<36000){
                this.setState(state=>({
             
                    timeToEnter:'0'
                }))
            }
            this.setState(state=>({
             
                timeToEnter:this.state.timeToEnter+Math.floor(this.state.time/3600)+':',
                time:this.state.time-Math.floor(this.state.time)
            })
            ) 
        }
        if(this.state.time>=60){
            if(this.state.time/60<600){
                this.setState(state=>({
             
                    timeToEnter:this.state.timeToEnter+'0'
                }))
            }
            this.setState(state=>({
             
                timeToEnter:this.state.timeToEnter+Math.floor(this.state.time/60)+':',
                time:this.state.time-Math.floor(this.state.time)
            })
            ) 
        }
        if(this.state.time>=0){
            if(this.state.time<10){
          
                this.setState(state=>({
                    
                    timeToEnter:this.state.timeToEnter+'0'
                }))
            }
            this.setState(state=>({
             
                timeToEnter:this.state.timeToEnter+Math.floor(this.state.time),
                // time:this.state.time-Math.floor(this.state.time)
            })
            ) 
        }
        
      }
      
    render(){
        return(
            <div className="ClockTrue">
                <h1>Файний годинник</h1>
               <div className="ClockTrue__main">
                <h2>{this.state.timeToEnter}</h2>
                <img className='toogleBtn__true' src={this.state.img} alt="" onClick={this.btnClick} />
                </div> 
            </div>
        )
    }
}
export default ClockTrue