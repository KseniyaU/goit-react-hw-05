import css from '../MoviesPage/MoviesPage.module.css'
import { FcSearch } from "react-icons/fc";


export default function MoviesPage() {

    return <form>
        <button type="submit">
          <FcSearch />
        </button>
        <input
          type="text"
          name="query"
          placeholder="Search movies"
          autoComplete="on"
          autoFocus
        />
      </form>
}