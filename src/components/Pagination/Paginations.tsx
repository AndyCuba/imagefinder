import Pagination from 'react-js-pagination';
import { fetchData } from '../../ducks/imagesReducer';
import { changePageAction } from '../../ducks/paginationReducer';
import { useAppDispatch } from '../../hooks/hooks';
import { PaginationWrapper } from './style';

type PaginationPropsType = {
    currentPageNumber: number,
    totalItemsCount: number,
    pageLimit: number,
    searchfield: string
};

function Paginations(props: PaginationPropsType) {
    const dispatch = useAppDispatch();
    const { currentPageNumber, totalItemsCount, pageLimit, searchfield } = props;


    const handlePageChange = (number: number) => {
        if(number !== currentPageNumber) {
            dispatch(changePageAction(number));
            fetchData(dispatch, searchfield, currentPageNumber);
        }  
    };

    return (
        <PaginationWrapper>
            <Pagination 
                activePage={currentPageNumber}
                itemsCountPerPage={pageLimit}
                totalItemsCount={totalItemsCount}
                pageRangeDisplayed={3}
                onChange={handlePageChange}
            />
        </PaginationWrapper>

    );
};
  
export default Paginations;