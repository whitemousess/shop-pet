import classNames from "classnames/bind";
import { useEffect, useState, useRef } from "react";
import HeadlessTippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import * as searchService from "~/services/searchService";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import { useDebounce } from "~/hooks";
import styles from "./Search.module.scss";
import PetItems from "~/components/PetItems";

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);

  // set timeout for search request
  const debouncedValue = useDebounce(searchValue, 500);

  const inputRef = useRef();

  useEffect(() => {
    // clear char trim
    if (!debouncedValue.trim()) {
      setSearchResult([]);
      return;
    }

    // call apiService
    const fetchApi = async () => {

      const result = await searchService.search(debouncedValue);
      setSearchResult(result);
    };

    fetchApi();
  }, [debouncedValue]);

  const handleHideResult = () => {
    setShowResult(false);
  };

  // handle onChange space search input
  const handleChange = (e) => {
    const searchValue = e.target.value;

    if (!searchValue.startsWith(" ")) {
      setSearchValue(searchValue);
    }
  };

  return (
    <div className={cx("wrapper")}>
      <HeadlessTippy
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className={cx("search-result")} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              {searchResult.map((result) => (
                  <PetItems key={result._id} data={result}/>
              ))}
            </PopperWrapper>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className={cx("search")}>
          <input
            ref={inputRef}
            value={searchValue}
            className={cx("search-input")}
            placeholder="Search..."
            spellCheck={false}
            onChange={handleChange}
            onFocus={() => setShowResult(true)}
          />

          <span className={cx("search-btn")}>
            <FontAwesomeIcon
              className={cx("search-icon")}
              icon={faMagnifyingGlass}
            />
          </span>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
