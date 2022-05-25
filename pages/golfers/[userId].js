import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import ScoreCard from '../../components/ScoreCard'
import useUserScores from '../../lib/useUserScores'

const GolferProfile = () => {
  const router = useRouter()
  const { userId } = router.query

  const { userScores, error } = useUserScores(userId)

  return (
    <Layout>
      <>
        { error ?
          <h2>{error}</h2>
          : (
            <div>
              {userScores?.name && <h1>{userScores.name} scores</h1>}
              {userScores?.scores?.map(score => (
                <ScoreCard
                  key={score.id}
                  id={score.id}
                  totalScore={score.total_score}
                  playedAt={score.played_at}
                  userId={score.user_id}
                  userName={userScores.name}
                />
              ))}
            </div>
          )}
      </>
    </Layout>
  )
}

export default GolferProfile
