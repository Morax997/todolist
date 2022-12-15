import './App.css';
import {Button, Input, Checkbox} from 'antd';
import {useState} from "react";
import {CloseOutlined} from "@ant-design/icons";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [toDoList, setToDoList]  = useState([]);

  const inputHandler = event => {
    setInputValue(event.target.value)
  }

  const onCheckboxChange = (event, elementIndex) => {
    let temp = toDoList.concat();
    temp[elementIndex].isChecked = event.target.checked;
    setToDoList(temp);
  };

  const submitHandler = () => {
    setToDoList(toDoList.concat({
      text: inputValue,
      isChecked: false,
    }))
  }

  const deleteHandler = (deleteIndex) => {
    let temp = toDoList.concat();
    temp.splice(deleteIndex, 1);
    setToDoList(temp)
  }

  return (
    <div className="App">
      <div className={"place"}>
        <Input
          placeholder="..."
          onChange={inputHandler}
          value={inputValue}
        />
        <Button onClick={submitHandler}>Submit</Button>
      </div>
      {
        toDoList.map((toDoEntry, index) => {
          return <div key={index} className={"entryContainer"}>
            <div className="textContainer">
              <Checkbox
                onChange={(event) => {onCheckboxChange(event, index)}}
                checked={toDoEntry.isChecked}
              />
              <div className="text">{toDoEntry.text}</div>
            </div>
            <Button
              icon={<CloseOutlined style={{width: "32px"}} />}
              onClick={() => {deleteHandler(index)}}
            />
          </div>
        })
      }
    </div>
  );
}

export default App;
