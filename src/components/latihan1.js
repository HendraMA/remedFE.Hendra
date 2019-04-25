import React from 'react'
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
          act: 0,
          index: '',
          datas: []
        }
      } 

      componentDidMount(){
        this.refs.name.focus();
      }
    
      fSubmit = (e) =>{
        e.preventDefault();
        console.log('try');
    
        let datas = this.state.datas;
        let name = this.refs.name.value;
        let address = this.refs.address.value;
    
        if(this.state.act === 0){   //new
          let data = {
            name, address
          }
          datas.push(data);
        }else{                      //update
          let index = this.state.index;
          datas[index].name = name;
          datas[index].address = address;
        }    
    
        this.setState({
          datas: datas,
          act: 0
        });
    
        this.refs.myForm.reset();
        this.refs.name.focus();
      }
    
      fRemove = (i) => {
        let datas = this.state.datas;
        datas.splice(i,1);
        this.setState({
          datas: datas
        });
    
        this.refs.myForm.reset();
        this.refs.name.focus();
      }
    
      fEdit = (i) => {
        let data = this.state.datas[i];
        this.refs.name.value = data.name;
        this.refs.address.value = data.address;
    
        this.setState({
          act: 1,
          index: i
        });
    
        this.refs.name.focus();
      }



    render(){
        let datas = this.state.datas;
        return(
            
            <div>
                <h1>SOAL 1</h1>
                <div className='row'>
                    <div className='col-md-4 mb-4'>
                        <select className='form-control'>
                            <option>Filter By Pekerjaan</option>
                        </select>
                    </div>
                </div>
                <table className='table mb-4'>
                    <thead>
                        <tr>
                            <td>Nama</td>
                            <td>Usia</td>
                            <td>Pekerjaan</td>
                            <td>Act</td>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
                <div className='row'>
                    <div className='col-md-3'> <input type='text' className='form-control' placeholder='Nama' /> </div>
                    <div className='col-md-3'> <input type='text' className='form-control' placeholder='Usia' /> </div>
                    <div className='col-md-3'> <input type='text' className='form-control' placeholder='Pekerjaan' /> </div>
                    <div className='col-md-3'> <input type='button' className='form-control btn-info' value='add Data' button onClick={(e)=>this.fSubmit(e)} /> </div>
                </div>
                 <pre>
          {datas.map((data, i) =>
            <li key={i} className="myList">
              {i+1}. {data.name}, {data.address}
              <button onClick={()=>this.fRemove(i)} className="myListButton">delete </button>
              <button onClick={()=>this.fEdit(i)} className="myListButton">edit </button>
            </li>
          )}
        </pre>
                
                
                ,
                <div className="App">
       
        <form ref="myForm" className="myForm">
          <input type="text" ref="name" placeholder="your name" className="formField" />
          <input type="text" ref="address" placeholder="your address" className="formField" />
          <button onClick={(e)=>this.fSubmit(e)} className="myButton">submit </button>
        </form>
        <pre>
          {datas.map((data, i) =>
            <li key={i} className="myList">
              {i+1}. {data.name}, {data.address}
              <button onClick={()=>this.fRemove(i)} className="myListButton">delete </button>
              <button onClick={()=>this.fEdit(i)} className="myListButton">edit </button>
            </li>
          )}
        </pre>
      </div>
            </div>
        )
    }
}

export default Home