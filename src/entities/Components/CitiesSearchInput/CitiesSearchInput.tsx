import { TextField } from "shared";
import { useState } from "react";



function CitiesSearchInput() {
  interface City {
    id: string,
    name: string
  }
  const [cityName, setCityName] = useState<City[]>([])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) return
    fetch(`https://netology-trainbooking.netoservices.ru/routes/cities?name=${event.target.value}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCityName(data);
      });
    console.log(cityName)
  }
  const className = 'cities-search-input'
  return (
    <TextField
      type="text"
      placeholder="Откуда"
      handleChange={handleChange}
    />
  );
}

export default CitiesSearchInput;