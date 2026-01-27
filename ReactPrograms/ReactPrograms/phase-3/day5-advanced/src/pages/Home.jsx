import react from 'react'
import withAuth from '../hoc/withAuth'
function Home() {
    return (
        <div>
            <h1>Home Page</h1>
        </div>
    )
}
export default withAuth(Home)