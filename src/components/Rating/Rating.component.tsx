import Image from "next/image";
import { FC } from "react";

interface Props {
  rating?: number;
  difficultyRating?: number;
}

export const Rating: FC<Props> = ({ rating = 0, difficultyRating = 0 }) => {
  const ratingArray = Array(rating).fill(null);
  const difficultyRatingArray = Array(difficultyRating).fill(null);

  return (
    <div
      data-testid='rating'
      className='bg-white  flex flex-col gap-3 justify-center items-center text-black py-5'
    >
      {rating > 0 && (
        <div className='flex flex-row gap-5 min-w-56'>
          <p>Rating: </p>
          <div className='flex flex-row gap-2 flex-1'>
            {ratingArray.map((_, i) => (
              <Image
                alt='palm svg'
                key={i}
                width={18}
                height={18}
                src={"/svg/palm.svg"}
              />
            ))}
          </div>
        </div>
      )}
      {difficultyRating > 0 && (
        <div className='flex flex-row gap-5 bg-white min-w-56'>
          <p>Beginner Friendly: </p>
          <div className='flex flex-row gap-2 flex-1'>
            {difficultyRatingArray.map((_, i) => (
              <Image
                alt='sloth svg'
                key={i}
                width={18}
                height={18}
                src={"/svg/sloth.svg"}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
