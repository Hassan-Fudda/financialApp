import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import TransactionForm from '../components/TransactionForm'
import TransactionItem from '../components/TransactionItem'
import Spinner from '../components/Spinner'
import { getGoals, reset } from '../features/Transaction/TransactionSlice'
import "../pages/Transaction.css"
import { useSelector,useDispatch } from 'react-redux'

function Transaction() {
      const navigate = useNavigate()
  const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
    const { goals, isLoading, isError, message } = useSelector(
      (state) => state.goals
    )
    useEffect(() => {
        if (isError) {
          console.log(message)
        }
    
        // if (!user) {
        //   navigate('/login')
        // }
    
        dispatch(getGoals())
    
        return () => {
          dispatch(reset())
        }
      }, [user, navigate, isError, message, dispatch])
    
      if (isLoading) {
        return <Spinner />
      }
    
  return (
   <><section className='heading'>
   <h1>Welcome {user && user.name}</h1>
   <p>Financial and Management Dashboard</p>
 </section>

 <TransactionForm />

 <section className='content'>
   {goals.length > 0 ? (
     <div className='goals'>
       {goals.map((goal) => (
         <TransactionItem key={goal._id} goal={goal} />
       ))}
     </div>
   ) : (
     <h3>You have not set any Transaction</h3>
   )}
 </section></>

  )
}

export default Transaction