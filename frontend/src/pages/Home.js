import { useEffect } from "react"
import { useState } from "react"
import { useScoreContext } from "../hooks/useScoreContext"

// components
import ScoreDetails from "../components/ScoreDetails"
import ScoreForm from "../components/ScoreForm"
import Popup from "../components/Popup"
//

const Home = () => {
  //const [scores, setScores] = useState(null)
  const { scores, dispatch } = useScoreContext()
  const [buttonPopup, setButtonPopup] = useState(false)

  useEffect(() => {
    const fetchScores = async () => {
      const response = await fetch('/api/scores')
      const json = await response.json()

      if (response.ok) {
        //setScores(json)
        dispatch({type: 'SET_SCORES', payload: json})
      }
    }

    fetchScores()
  }, [dispatch])

  return (
    <div className="home">
      <div className="scores">
        {scores && scores.map(score => (
          <ScoreDetails score={score} key={score._id} />
        ))}
      </div>
      <div className="score-form">
        <button onClick={() => setButtonPopup(true)}>Open popup</button>
        <Popup trigger={buttonPopup} setTrigger ={setButtonPopup}>
          <ScoreForm />
        </Popup>
      </div>
    </div>
  )
}

export default Home