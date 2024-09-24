import { Input } from "antd";
import "./style.scss";

import Filter from "../Filter";
import Sort from "../sort/index";
const { Search } = Input;

function ActionBar() {
  return (
    <>
      <div className="container" >
        <div className="filter">
          <p>Filter</p>
          <div className="Box-Filter">
            <Filter style={{with : "300px"}}/>
          </div>
        </div>
        <div className="sort">
          <p>Sort</p>
          <div className="Box-Sort">
            <Sort />
          </div>
        </div>
        <div className="box-search ">
          <Search
            placeholder="Search "
            style={{
              width: 200,
            }}
          />
        </div>
      </div>
    </>
  );
}

export default ActionBar;
