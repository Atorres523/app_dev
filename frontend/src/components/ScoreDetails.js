import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const ScoreDetails = ({ score }) => {

  return (
    <div className="score-details">
      <h4>{score.userID}</h4>
      <p><strong>Highscore: </strong>{score.score}</p>
      <p>{formatDistanceToNow(new Date(score.createdAt), {addSuffix:true})}</p>
    </div>
  )
}

export default ScoreDetails