import Spinner from "./Spinner";
import CitiesItem from "./CitiesItem";
import Message from "./Message";

export default function CitiesList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities.length) return <Message />;

  return (
    <ul>
      {cities.map((city) => (
        <CitiesItem key={city.id} city={city} />
      ))}
    </ul>
  );
}
