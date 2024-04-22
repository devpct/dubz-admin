import { Pagination, PaginationItem } from "@mui/material";

export default function PaginationComponent({ perPage, total, currentPage, paginate }) {
  const pageNumbers = [];

  const convertToPersian = (number) => {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    const digits = number.toString().split('');
    const persianNumber = digits.map(digit => persianDigits[digit]).join('');
    return persianNumber;
  };

  for (let i = 1; i <= Math.ceil(total / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center w-full ">
      <Pagination 
        dir="rtl"
        count={pageNumbers.length}
        page={currentPage}
        onChange={(event, page) => paginate(page)}
        variant="outlined"
        shape="rounded"
        classes={{ root: 'custom-pagination' }}
        renderItem={(item) => {
          return (
            <PaginationItem
              {...item}
              page={item.type === 'page' ? convertToPersian(item.page) : null}
            />
          );
        }}
      />
    </div>
  );
}
