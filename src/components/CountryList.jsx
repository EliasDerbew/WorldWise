import Spinner from "./Spinner";
import style from "./CountryList.module.css";
import CountryItem from "./CountryItem.module.css";

export default function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  const countries = []

  return (
    <ul className={style.CountryList}>
      {countries.map((city) => (
        <CountryItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
