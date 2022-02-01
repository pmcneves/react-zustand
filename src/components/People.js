import { usePeopleStore } from "../store";

export default function People() {
  const people = usePeopleStore((state) => state.people);

  return (
    <div>
      we have {people.length} people in our DB
      <ul>
        {people.map((person) => (
          <li key={person}>{person}</li>
        ))}
      </ul>
    </div>
  );
}
