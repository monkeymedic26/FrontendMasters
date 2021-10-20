import { useState } from 'react';

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("");

  function updateLocation(e) {
    setLocation(e.target.value);
  }

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input id="location"
          // onChange={(e) => setLocation(e.target.value)}
          onChange={updateLocation}
          value={location}
          placeholder="Location" />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={e => setAnimal(e.target.value)}
          >
            <option />
            {
              ANIMALS.map(animal => {
                return (
                  <option value={animal} key={animal}>
                    {animal}
                  </option>
                )
              })
            }
          </select>
          </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;