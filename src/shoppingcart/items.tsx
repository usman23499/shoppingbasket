import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import DeleteIcon from '@material-ui/icons/Delete';
import {
  
  selectCount,
  AddBlue,
  deletee,
  AddRed,
  AddYellow,
} from './../features/counter/counterSlice';

import { useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      textAlign:"center"
      
    },
   
  }),
);

export default function FullWidthGrid() {
  const classes = useStyles();

  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  
  return (
    <div  className={classes.root}>
      <h1>
        SHOPPING BASKET
      </h1>
      <Grid container spacing={1}>
        
        <Grid  item xs={12} sm={4}>
        <div  className="blue">
         <button style={{width:"100px",height:"40px",fontWeight:"bold",color:"white",background:"none",marginTop:"50%",border:"2px solid white"}}
         onClick={() => dispatch(AddBlue())}
         
         
         >
           Blue Shirt
         </button>
        </div>
        </Grid>
        <Grid item xs={12} sm={4}>
        <div  className="red">
        <button style={{width:"100px",height:"40px",fontWeight:"bold",color:"white",background:"none",marginTop:"50%",border:"2px solid white"}}
          onClick={() => dispatch(AddRed())}
        >
           Red Shirt
         </button>
     </div>
        </Grid>
        <Grid item xs={12} sm={4}>
        <div  className="yellow">
        <button style={{width:"100px",height:"40px",fontWeight:"bold",color:"white",background:"none",marginTop:"50%",border:"2px solid white"}}
          onClick={() => dispatch(AddYellow())}
        >
          Yellow Shirt
         </button>
     </div>
        </Grid>
       
      </Grid>

      <div style={{textAlign:"left",marginLeft:"20px"}}>
       <h2 style={{color:"#2b3daa"}}>
        Shopping Basket
       </h2>
       <h3 >
         You have {count.values} Items in Your Basket
       </h3>
    
    
    
      {count.Items.map((value,index)=>{

return(
  <Grid key={index} container style={{border:"2px solid black"}}>
  <Grid item sm={12}>
    <div style={{display:"inline"}}>
    <img   style={{width:"50px",height:"50px",borderRadius: "50%",marginTop:"10px"}} src={value.image} alt=""/>
    </div>
   <div style={{display:"inline"}}>
   <p style={{marginLeft:"60px",fontWeight:"bold",marginTop:"-50px"}}>
    {value.names}
    </p>
    <p style={{marginLeft:"60px",marginTop:"-20px"}}>
      <b>
        ${value.price}
      </b>
      - {value.title} 

      <span style={{textAlign:"right",marginLeft:"20px"}}>
     <DeleteIcon 
     onClick={() => dispatch(deletee(Number(index)))}
     />
      </span>
    </p>
   </div>
   
  </Grid>

   </Grid>
  
)




      }

        
      )}
        <br/>
        <hr/>
        
        <p style={{fontWeight:"bold",fontSize:20,textAlign:"right",marginRight:"40px"}}>
          Total:${count.total}
        </p>
        
      </div>
    </div>
  );
}
