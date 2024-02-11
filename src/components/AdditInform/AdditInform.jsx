import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"

export const AdditInform = () => {
    return (
        <>
            <div>
                <p>Additional information</p>
                <ul>
                    <li><Link to='cast'>Cast</Link></li>
                    <li> <Link to='reviews'>Reviews</Link></li>
                </ul>               
            </div>
            <Outlet />
        </>
    )
}