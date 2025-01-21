import { SortItem } from 'src/const';
import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RootState } from 'src/store/index';
import { changeSorting } from 'src/store/action';
import { useSelector } from 'react-redux';

function Sorting() {
  const currentSort = useSelector((state: RootState) => state.currentSort);
  const [isMenuOpened, setMenuOpened] = useState(false);
  const sortSpanRef = useRef<HTMLSpanElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        event.target instanceof HTMLElement &&
        sortSpanRef.current &&
        !sortSpanRef.current.contains(event.target)
      ) {
        setMenuOpened(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);


  const handleSortChange = (sortType: SortItem) => {
    dispatch(changeSorting(sortType));
    setMenuOpened(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        ref={sortSpanRef}
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setMenuOpened((lastOpened) => !lastOpened)}
      >
        {currentSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>

      <ul
        className={`places__options places__options--custom ${
          isMenuOpened ? 'places__options--opened' : ''
        }`}
      >
        {Object.values(SortItem).map((sortItem) => (
          <li
            key={sortItem}
            className={`places__option ${
              sortItem === currentSort ? 'places__option--active' : ''
            }`}
            onClick={() => handleSortChange(sortItem as SortItem)}
          >
            {sortItem}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sorting;
