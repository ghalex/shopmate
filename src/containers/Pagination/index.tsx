import * as React from "react";
import { Pagination } from "components";
import { useStore } from "effector-react";

import ducks from "ducks";

const PaginationContainer = (props: any) => {
  const filter = useStore(ducks.product.$filter);
  const totalPages = useStore(ducks.product.$count);
  const offset = filter.page * 7 - 1;

  const handlePageChange = (e: any, value: number) => {
    ducks.product.changeFilter({
      ...filter,
      page: value / 7 + 1
    });
  };

  return (
    <>
      {totalPages > 1 && (
        <Pagination offset={offset} total={totalPages} limit={7} onClick={handlePageChange} />
      )}
    </>
  );
};

export default PaginationContainer;
