/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

function sliceData(arr: any[], pageSize: number) {
  const result = [];

  for (let i = 0; i < arr.length; i += pageSize) {
    const chunk = arr.slice(i, i + pageSize);
    result.push(chunk);
  }

  return result;
}

type Props = {
  pageSize: number;
  dataSource: any[];
  setData: React.Dispatch<React.SetStateAction<any[]>>;
};

const Pagination = (props: Props) => {
  const { dataSource, setData, pageSize = 10 } = props;

  const [active, setActive] = useState(0);
  const [nextActive, setNextActive] = useState(true);
  const [prevActive, setPrevActive] = useState(false);

  let pages = [];
  const slicedData = sliceData(dataSource, pageSize);

  slicedData.map((_, index) => {
    pages.push({
      index,
      number: index + 1,
    });
  });

  useEffect(() => {
    setData(slicedData[0]);

    if (slicedData[0].length === dataSource.length) setNextActive(false);
  }, []);

  const changePage = (index: number) => {
    if (index >= 0 && index < pages.length) {
      setActive(index);
      setData(slicedData[index]);

      setPrevActive(index > 0);
      setNextActive(index < pages.length - 1);
    }
  };

  return (
    <div className="flex justify-around items-center p-4"
      aria-label="Table navigation">
      <button
        onClick={() => changePage(active - 1)}
        className={`p-2 rounded-md shadow-sm ${prevActive ? "bg-blue-500 text-white" : "bg-gray-300"}`}
      >
        Prev
      </button>
      <button
        onClick={() => changePage(active + 1)}
        className={`p-2 rounded-md shadow-sm ${nextActive ? "bg-blue-500 text-white" : "bg-gray-300"}`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
