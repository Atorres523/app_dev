import { useState } from 'react'
import { useScoreContext } from '../hooks/useScoreContext'
//import Popup from './Popup'

const ScoreForm = () => {
  const { dispatch } = useScoreContext()
  const [userID, setUserID] = useState('')
  const [score, setScore] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const scores = {userID, score}
    
    const response = await fetch('/api/scores', {
      method: 'POST',
      body: JSON.stringify(scores),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setError(null)
    // uncomment the following lines to clear the input fields after a successful submission
    // setTitle('')
    // setLoad('')
    // setReps('')
      setEmptyFields([])
      console.log('new score added:', json)
      dispatch({type: 'ADD_SCORE', payload: json})
    }

  }

  return (
    // <Popup trigger={true}>
    //      <form className="create" onSubmit={handleSubmit}> 
    // <h3>Add a Score</h3>

    // <label>userID:</label>
    // <input 
    //   type="text" 
    //   onChange={(e) => setUserID(e.target.value)} 
    //   value={userID}
    //   className={emptyFields.includes('userID') ? 'error': ''}
    // />

    // <label>Score:</label>
    // <input 
    //   type="number" 
    //   onChange={(e) => setScore(e.target.value)} 
    //   value={score}
    //   className={emptyFields.includes('score') ? 'error': ''}
    // />

    // <button>Add Score</button>
    // {error && <div className="error">{error}</div>}
    // </form> 
    // </Popup>
    
    
    <form className="create" onSubmit={handleSubmit}> 
    <h3>Add a Score</h3>

    <label>userID:</label>
    <input 
      type="text" 
      onChange={(e) => setUserID(e.target.value)} 
      value={userID}
      className={emptyFields.includes('userID') ? 'error': ''}
    />

    <label>Score:</label>
    <input 
      type="number" 
      onChange={(e) => setScore(e.target.value)} 
      value={score}
      className={emptyFields.includes('score') ? 'error': ''}
    />

    <button>Add Score</button>
    {error && <div className="error">{error}</div>}
    </form>

  )
}

export default ScoreForm