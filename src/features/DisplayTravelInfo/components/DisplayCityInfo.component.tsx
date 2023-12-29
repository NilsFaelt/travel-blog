"use client";
import { countries } from "@/data";
import { useCloseOnClickOutsideElement, useDebounce } from "@/hooks";
import { useQueryHook } from "@/tanstack";
import { CountryData } from "@/types";
import { Spinner } from "@/ui";
import { PrimaryInput } from "@/ui/PrimaryInput.component";
import React, { FC, useEffect, useRef, useState } from "react";
import { DisplayEachCountry } from "./DisplayEachCountry.component";

export const DisplayCityInfo: FC = () => {
  const [choosenCountry, setChoosenCountry] = useState("");
  const [userCityInput, setUserCityInput] = useState("");
  const [toogleDropDown, setToogleDropDown] = useState(true);
  const dropDownRef = useRef(null);
  const { data, refetch, isLoading, isFetching, isError } = useQueryHook<
    [CountryData]
  >(`https://api.api-ninjas.com/v1/country?name=${choosenCountry}`, "country", {
    headers: { "X-Api-Key": "VJZtsnObCLxsUUnYQGYIeh1YTWc5JHmVD48fTMc0" },
  });
  const fetchingData = !isLoading && !isFetching && !isError && data?.[0];
  useEffect(() => {
    refetch();
  }, [choosenCountry]);

  useEffect(() => {
    setToogleDropDown(true);
    const perfectMatchCountry = countries.find(
      (country) => country.toLowerCase() === userCityInput.toLowerCase()
    );
    if (perfectMatchCountry) {
      setChoosenCountry(perfectMatchCountry);
    } else setChoosenCountry("");
  }, [userCityInput]);

  const filteredCountries = countries
    ?.filter((country) =>
      country.toLowerCase().includes(userCityInput.toLowerCase())
    )
    .slice(0, 10);

  useCloseOnClickOutsideElement(dropDownRef, setToogleDropDown);

  return (
    <div className=' relative flex flex-col content-center justify-center md:max-w-screen-md mx-auto'>
      <PrimaryInput<string>
        value={userCityInput}
        setValue={setUserCityInput}
        type='text'
        placholder='Country'
      />
      {!fetchingData ? (
        <Spinner />
      ) : (
        <DisplayEachCountry
          name={choosenCountry.toLowerCase().replace(/\s/g, "")}
          country={data?.[0]}
        />
      )}
      {!choosenCountry && toogleDropDown && userCityInput?.length > 1 && (
        <div
          ref={dropDownRef}
          className='flex flex-col content-center justify-center absolute top-10 left-0 right-0 mx-auto bg-white shadow-md py-5 gap-1'
        >
          {filteredCountries.map((country, i) => {
            return (
              <p
                className=' text-center cursor-pointer hover:bg-primaryYellow'
                onClick={() => setChoosenCountry(country)}
                key={i}
              >
                {country}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};
