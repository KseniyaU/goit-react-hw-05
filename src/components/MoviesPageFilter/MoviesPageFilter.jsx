import { FcSearch } from "react-icons/fc";
export const MoviesPageFilter = ({onSubmit, value, onChange }) => {
    return (
        <form onSubmit={onSubmit}>
            <input
                value={value}
                onChange={evt => onChange(evt.target.value)}
          type="text"
          name="query"
          placeholder="Search movies"
          autoComplete="off"
          autoFocus
                />
                <button type="submit"  >
          <FcSearch />
        </button>
            </form>
    )
}