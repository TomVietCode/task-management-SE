import { Input } from "antd"
import "./style.scss"
import { TreeSelect } from "antd"
import { FaDotCircle } from "react-icons/fa"
const { Search } = Input

const filter = [
  {
    value: "role",
    title: "Role",
    children: [
      {
        value: "leader",
        title: "Leader",
      },
      {
        value: "member",
        title: "Member",
      },
    ],
  },
  {
    value: "status",
    title: "Status",
    children: [
      {
        value: "initial",
        title: (
          <span>
            <FaDotCircle style={{ marginRight: 8, color: "blue" }} />
            Initial
          </span>
        ),
      },
      {
        value: "doing",
        title: (
          <span>
            <FaDotCircle style={{ marginRight: 8, color: "orange" }} />
            Doing
          </span>
        ),
      },
      {
        value: "pending",
        title: (
          <span>
            <FaDotCircle style={{ marginRight: 8, color: "yellow" }} />
            Pending
          </span>
        ),
      },
      {
        value: "finished",
        title: (
          <span>
            <FaDotCircle style={{ marginRight: 8, color: "green" }} />
            Finished
          </span>
        ),
      },
      {
        value: "notFinish",
        title: (
          <span>
            <FaDotCircle style={{ marginRight: 8, color: "red" }} />
            Not finished
          </span>
        ),
      },
    ],
  },
]

const sort = [
  { 
    value: "timeFinish_asc", 
    title: "Deadline Ascending",
  },
  { 
    value: "timeFinish_desc",
    title: "Deadline Descending",
  },
  { 
    value: "timeStart_asc", 
    title: "Time Start Ascending",
  },
  { 
    value: "timeStart_desc", 
    title: "Time Start Descending",
  },
  { 
    value: "title_asc",
    title: "Name A-Z",
  },
  { 
    value: "title_desc",
    title: "Name Z-A",
  },
];

function ActionBar(props) {
  const { onSearchChange, onSortChange, onFilterChange } = props

  const handleSearchInput = (value) => {
    onSearchChange(value);
  };

  const handleSortSelect = (value) => {
    const sortQuery = value.split("_")
    onSortChange({
      sortKey: sortQuery[0],
      sortValue: sortQuery[1]
    });
  };

  const handleFilterSelect = (value) => {
    onFilterChange(value)
  };

  return (
    <>
      <div className="container">
        <div className="filter">
          <p>Filter</p>
          <div className="Box-Filter">
            <TreeSelect
              style={{
                width: "100%",
              }}
              dropdownStyle={{
                maxHeight: 500,
                overflow: "auto",
              }}
              treeData={filter}
              placeholder="Please select"
              treeDefaultExpandAll
              onChange={handleFilterSelect}
            />
          </div>
        </div>
        <div className="sort">
          <p>Sort</p>
          <div className="Box-Sort">
            <TreeSelect
              style={{
                width: "100%",
              }}
              dropdownStyle={{
                maxHeight: 500,
                overflow: "auto",
              }}
              treeData={sort}
              placeholder="Please select"
              treeDefaultExpandAll
              onChange={handleSortSelect}
            />
          </div>
        </div>
        <div className="box-search ">
          <Search
            placeholder="Search "
            style={{
              width: 200,
            }}
            onSearch={handleSearchInput}
          />
        </div>
      </div>
    </>
  )
}

export default ActionBar
