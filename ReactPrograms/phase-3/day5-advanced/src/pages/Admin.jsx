import react from 'react'
import withAuth from '../hoc/withAuth'
function Admin(){
    return(
        <div>
            <h3>Admin Dashboard</h3>
        </div>
    )
}
export default withAuth(Admin)