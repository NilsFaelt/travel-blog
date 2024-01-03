import Image from "next/image";
import React, { Dispatch, FC, SetStateAction } from "react";

interface Props {
  setPage: Dispatch<SetStateAction<number>>;
  page: number;
  pages: number;
}

export const Pagination: FC<Props> = ({ setPage, page, pages }) => {
  const ceiledPages = Math.ceil(pages);
  const displayFirstPage = page > 0 ? "opacity-1" : "opacity-0";
  const displayLastPage = page + 1 !== ceiledPages ? "opacity-1" : "opacity-0";
  const handleClickRight = () => {
    if (page < ceiledPages - 1 && ceiledPages > 1) {
      setPage((prev) => prev + 1);
    }
  };
  const handleClickLeft = () => {
    if (page > 0) {
      setPage((prev) => prev - 1);
    }
  };
  return (
    <div className='flex items-center justify-between border  h-36 p-5 w-78 bg-white rounded-md mt-10'>
      <Image
        onClick={handleClickLeft}
        className=' cursor-pointer'
        src={"/svg/arrow.svg"}
        width={38}
        height={18}
        alt='arrow left'
      />

      <p
        className={`${displayFirstPage} cursor-pointer`}
        onClick={() => setPage(0)}
      >
        {1}
      </p>

      <p className=' underline'>{page + 1}</p>
      <p
        onClick={() => setPage(ceiledPages - 1)}
        className={`${displayLastPage} cursor-pointer`}
      >
        ...{ceiledPages}
      </p>

      <Image
        onClick={handleClickRight}
        className=' cursor-pointer rotate-180'
        src={"/svg/arrow.svg"}
        width={38}
        height={18}
        alt='arrow right'
      />
    </div>
  );
};
