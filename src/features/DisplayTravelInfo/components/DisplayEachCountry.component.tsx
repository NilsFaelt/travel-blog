import { CountryData } from "@/types";
import React from "react";

export const DisplayEachCountry: React.FC<{
  country: CountryData;
  name: string;
}> = ({ country, name }) => {
  if (!country) return null;

  return (
    <div className=' border rounded-md shadow-md  max-w-xl mx-auto mt-8 p-10 self-center'>
      <h2 className='text-2xl font-bold mb-4'>{country.name}</h2>
      <div>
        <p>
          <strong>Capital:</strong> {country.capital}
        </p>
        <p>
          <strong>Population:</strong> {country.population * 1000}
        </p>
        <p>
          <strong>Region:</strong> {country.region}
        </p>
        <p>
          <strong>Currency:</strong> {country.currency.name}
        </p>
        <a
          target='_blank'
          className=' text-white'
          href={`https://www.smartraveller.gov.au/destinations/${name}`}
        >
          <div className=' bg-black rounded-md mt-5 p-3'>
            <p className=' text-white'>
              <strong> Learn more?</strong>
            </p>
            Visit smartraveller/{name}
          </div>
        </a>
      </div>
    </div>
  );
};
