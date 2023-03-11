import './ClockTruev2.css'
import React from 'react';
import pause from '../img/pause.png'
import play from '../img/play.png'
class ClockTruev2 extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            img:play,
            time:1,
            date:new Date('December 17, 1970 00:00:00')
        }
        this.btnClick=this.btnClick.bind(this)
    }
    btnClick() {
        console.log(this.state.date)
        if(this.state.img===pause){
            clearInterval(this.Timer)
            this.setState({
            
                img:play,
            })
           
        }else{
            this.setState({
                img:pause
            })
            this.Timer=setInterval(
                ()=>{
                    
                    this.setState({
              
                        time:this.state.time+1,
                      date:new Date(this.state.time*1000+new Date(this.state.time*1000).getTimezoneOffset()*60000)
                    }
                    )
                
                    console.log(this.state.date)
                    
                },1000)
        }

     
    }
    // componentDidMount(){
    //     this.Timer=setInterval(
    //         ()=>{
                
    //             this.setState({
    //                 time:this.state.time+1,
    //               date:new Date(this.state.time*1000+new Date(this.state.time*1000).getTimezoneOffset()*60000)
    //             }
    //             )
            
    //             console.log(this.state.date)
                
    //         },1000)
    //     }
    
    render(){
        return(
            <div className="ClockTruev2">
                <h1>Файний годинник</h1>
               <div className="ClockTrue__main">
                <h2>{this.state.date.toLocaleTimeString()}</h2>
                <img className='toogleBtn__true' src={this.state.img} alt="" onClick={this.btnClick} />
                </div> 
            </div>
        )
    }
}
export default ClockTruev2