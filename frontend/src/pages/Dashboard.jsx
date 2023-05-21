import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import TransactionForm from '../components/TransactionForm'
import TransactionItem from '../components/TransactionItem'
import { Link } from 'react-router-dom'
import Spinner from '../components/Spinner'
import { getGoals, reset } from '../features/Transaction/TransactionSlice'

function Dashboard() {
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
    <>
      <section className='heading'>
      <h1>Dashboard</h1>
   <div className="box-border md:box-content">
     
   <div style={{backgroundColor: "rgb(226 232 240)", marginBottom:"10px"}}>
   <Link  to='/Transaction'>Transaction</Link>
   </div>
    <div style={{backgroundColor: "rgb(226 232 240)", marginBottom:"10px"}}>1</div>
    <div style={{backgroundColor: "rgb(226 232 240)", marginBottom:"10px"}}>1</div>
    <div style={{backgroundColor: "rgb(226 232 240)", marginBottom:"10px"}}>1</div>
    <div style={{backgroundColor: "rgb(226 232 240)", marginBottom:"10px"}}>1</div>
    <div style={{backgroundColor: "rgb(226 232 240)", marginBottom:"10px"}}>1</div>
   </div>
    
 </section>

    </>
  )
}

export default Dashboard
