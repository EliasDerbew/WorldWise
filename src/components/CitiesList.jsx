import Spinner from "./Spinner";
import CitiesItem from "./CitiesItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

export default function CitiesList() {
  const { cities, isLoading } = useCities();

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
