import React from 'react';

class Toggle extends React.Component{
constructor(props){
     super(props);
     this.state={
         show:false,
         name:"kajal",
         baby:"prince"
     }
     this.handleClick=this.handleClick.bind(this);
}

handleClick(){
 this.setState({show:!this.state.show})
}

render(){
    return(
        <>
        <div>
            <h2>hiiiiiiiiiiii</h2>
            <button onClick={this.handleClick}>Click here to toggle my name</button>
            {
                this.state.show===true?(<h3>{this.state.name}</h3>):("")
            }
        </div>
        </>
    )
}

}

export default Toggle;