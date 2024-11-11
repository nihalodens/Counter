import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './redux/counterSlice'

const Counter = () => {
  const [amount,setAmount] = useState(0)
  const {count} = useSelector(state=>state.counterReducer)
  const dispatch = useDispatch()

  const handleIncrementAmount = ()=>{
    if(amount){
      // dispatch action
      dispatch(incrementByAmount(+amount))
    }else{
      alert("please enter a valid amount!!!!")
    }
  }

  return (
        
    <div style={{minHeight:'100vh',backgroundColor:'black'}} className='text-light d-flex justify-content-center align-items-center'>
        <center><h1 > Counter App</h1>   
        <div style={{width:'900px',height:'500px', border:'solid 1px'}} className='mt-5'>
            <h1 style={{fontSize:"150px"}} className='mt-5'>{count}</h1>
                <button onClick={()=>dispatch(decrement())} className='btn btn-warning mx-5 '>Decrement</button>
                <button onClick={()=>dispatch(reset())} className='btn btn-danger mx-5'>Reset</button>
                <button onClick={()=>dispatch(increment())} className='btn btn-success mx-5'>Increment</button>
                <input onChange={e=>setAmount(e.target.value)} className='mt-5' style={{width:'600px',height:'35px'}} placeholder='enter the amount to be incremented' type="text" />
                <button onClick={handleIncrementAmount}  className='btn btn-primary ms-3'>INCREMENT BY AMOUNT</button>
        </div>
        </center> 
    </div> 
  )
}

export default Counter