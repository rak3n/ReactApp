import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

let list=[]

class NavBar extends React.Component{


  render(){
    const ele=
      <div className='NavBar'>
        <div className='Item'>
          {this.props.item}
        </div>
      </div>
    
    return ele
  }
}


class Read extends React.Component{
  constructor(props){
    super(props)
    this.state={
      task: "",
      id: '' }
  }

  handleChange= event=>{
    //eslint-disable-next-line
    this.setState({task: event.target.value, id: (new Date).getTime()});
  }

  add = event=>{
    event.preventDefault()
    if(this.state.id){
      list.push({id:this.state.id, task:this.state.task})
      this.setState({id:'',task:''})
    }
  }

  handleDelete = e =>{
    list=list.filter((item)=>item.id!==e)
    this.forceUpdate()
  }

  render(){
    const ele=
      <div className='Footer'>
        <div className='Send'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 2v9h9v2h-9v9h-2v-9h-9v-2h9v-9h2zm2-2h-6v9h-9v6h9v9h6v-9h9v-6h-9v-9z"/></svg></div>
          <form className='Input' onSubmit={this.add}>
            <input className='tasks' type='text' name='task' value={this.state.task} placeholder="Add a note" onChange={this.handleChange}></input>
          <button type="submit" className="Submit">Submit</button>
          </form>
        </div>
//eslint-disable-next-line
  const ele2 =
      <div className='Dispaly'>
           {list.map((item) => (
          <div className='Task' key={item.id}>
            <input type='checkbox'></input>
            <div className="list" >{item.task}</div>
            <button className="delete" onClick={()=>this.handleDelete(item.id)}>
            <div ><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M19 24h-14c-1.104 0-2-.896-2-2v-17h-1v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2h-1v17c0 1.104-.896 2-2 2zm0-19h-14v16.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-16.5zm-9 4c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm-2-7h-4v1h4v-1z"/></svg></div>
            </button>
          </div>
        ))}
        
      </div>
      
      if(this.state.list === [])
      return ele;
      else
      return (<React.Fragment>
            {ele2}
             {ele}
             
             </React.Fragment>);
  }
}




class Board extends React.Component{
  

  render(){
    return (
      <React.Fragment>
        <NavBar item='Tasker' />
        <Read />
      </React.Fragment>
    );
  }
}


ReactDOM.render(<Board />,document.getElementById('root'));
