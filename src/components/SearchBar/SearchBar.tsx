import css from "./SearchBar.module.css";
import toast from "react-hot-toast";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

function SearchBar({ onSubmit }: SearchBarProps) {
  const handleFormAction = async (formData: FormData) => {
    const query = (formData.get("query") as string).trim();

    if (!query) {
      toast("❗️ Please enter your search query");
      return;
    }

    onSubmit(query);
  };
  return (
    <header className={css.header}>
      <div className={css.container}>
        <a
          className={css.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB
        </a>
        <form
          className={css.form}
          action={async (formData: FormData) => {
            await handleFormAction(formData);
          }}
          method="POST"
        >
          <input
            className={css.input}
            type="text"
            name="query"
            autoComplete="off"
            placeholder="Search movies..."
            autoFocus
          />
          <button className={css.button} type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
}

export default SearchBar;
