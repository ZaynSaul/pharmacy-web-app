import React, { useState } from 'react';

import Pagination from './Pagination';

type PaginationProps = {
  hideOnSinglePage: boolean;
  pageSize: number
}

type ColumnProps = {
  key?: string;
  dataIndex?: string;
  title?: string;
  render?: any;
}

type Props = {
  dataSource: any[];
  columns: ColumnProps[];
  pagination: PaginationProps;
}

const Table = ({ columns, dataSource, pagination }: Props) => {
  const [data, setData] = useState(dataSource);

  const { hideOnSinglePage = true, pageSize } = pagination;

  let showPagination =
    !(hideOnSinglePage && pageSize >= dataSource.length) ?? false;

  return (
    <div className='w-full bg-white overflow-x-auto relative mt-4  sm:rounded-lg'>
      <table className="w-full h-1/2 text-sm text-left ">
        <thead className="text-md  uppercase bg-gray-100 rounded-md">
          <tr>
            {columns?.map(({ title, key }) => (
              <th scope="col" className="py-3 px-6" key={key}>
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => (
            <tr className="bg-white border-b border-gray-300 hover:bg-gray-100 " key={index}>
              {columns?.map(({ dataIndex = '', render = () => <p />, key }) => (
                <td className="py-4 px-6" key={key}>
                  <p>{value[dataIndex]}</p>
                  <div>{render(value)}</div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {showPagination && (
        <Pagination
          dataSource={dataSource}
          setData={setData}
          pageSize={pageSize}
        />
      )}
    </div>
  );
};

export default Table;