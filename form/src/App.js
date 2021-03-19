import React , {useState} from 'react';
import { Container, TextField, Button, IconButton, makeStyles} from '@material-ui/core';


import './App.css';
const useStyles  = makeStyles((theme)=>({
  root: {
    '& .MuiTextField-root' : {
      background:'lightgreen',
      margin:theme.spacing(1),
  }
  }

  

}))

const useStyle  = makeStyles((theme)=>({
  roo: {
    '& .MuiTextField-root' : {
      background:'lightblue',
      margin:theme.spacing(1),
  }
  }

  

}))
function App() {
 const classes = useStyles();
 const classe = useStyle();

 
   

    const [Input, setInput]=useState([{
      firstName: "", lastName: "", email:"", Phone:""
    }])

    const Handle =(e) =>{
      e.preventDefault();
       console.log("Input", Input);
    }

  const [Inputfields, setInputfields]=useState([
     {Hobby:""},
  ])
  
  

  const Handlesubmit =(e) =>{
    e.preventDefault();
     console.log("InputFields", Inputfields);
  }


  

   const handleAddField=()=>{
    setInputfields([...Inputfields,{firstName:""}])
   }

    const handleRemoveField = (index)=>{
      const values=[...Inputfields];
      values.splice(index, 1);
      setInputfields(values);

    }






  const handleChangeInput = (index, event)=>{
     console.log(index, event.target.name)
     const values = [...Inputfields];
     values[index][event.target.name]=event.target.value;
     setInputfields(values);

   

    
  }
  return (

    
   
    
   
         <Container className="con">

               <h1 className="head">FORM</h1>
            <form className={classe.roo} onSubmit={Handle}>
             {Input.map((Inp,Ind)=>(
                <div key={Ind}>
            
              <div>
               <TextField 
                name="firstName"
                label="First Name"
                value={Input.firstName}
                variant="filled"
                onChange={event =>  handleChangeInput(Ind,event) }
                />

              </div>
                
                
                <div>
                <TextField 
                name="lastName"
                label="Last Name"
                value={Input.lastName}
                variant="filled"
                onChange={event =>  handleChangeInput(Ind,event) }
                />
                </div>
               
               <div>
               <TextField 
                name="email"
                label="Email"
                value={Input.email}
                variant="filled"
                onChange={event =>  handleChangeInput(Ind,event) }
               />
                </div>
                <div>
               <TextField 
                name="Phone"
                
                label="Phone"
                value={Input.Phone}
                variant="filled" 
                onChange={event =>  handleChangeInput(Ind,event) }
                  /></div>
              
         </div>
         )
         )}
         
           
            </form> 


            
          
          <div className={classes.root} onSubmit={Handlesubmit}>
            {Inputfields.map((Inputfield, index)=>(
              <div key={index}>
                
                  <div className="hobby">
               <TextField 
                name="Hobby"
                label="Hobby"
                value={Inputfield.Hobby}
                variant="filled"
                onChange={event => handleChangeInput(index,event) }
                />

                
                
            <IconButton>
         <Button onClick={handleAddField} class="add">+</Button>
            </IconButton>
           

            <IconButton>
              <Button class="sub" onClick={handleRemoveField} >-</Button>
            </IconButton>
            </div>
              </div>
            ))} 

            <Button onClick={Handlesubmit ? Inputfields:alert("please provide valid information")} variant="contained" type="submit" color="primary">Submit Data</Button>
            {/* <Button type="reset" variant="contained"  color="primary">Reset</Button> */}
          </div>

        
        <div className="userinfo">
          <h1 >User Information</h1>
        </div>
            
            
            
          
           </Container> 

              
    
  );
}

export default App;
