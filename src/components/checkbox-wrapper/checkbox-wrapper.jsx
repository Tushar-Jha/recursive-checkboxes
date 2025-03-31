import React from 'react'

const CheckboxWrapper = ({props, changeState}) => {
  const paddingStyle = {
    paddingLeft: '30px'
  }

  const updateStateForItemsChildren = (item, checked) => {
    const updatedItem = {...item};
    updatedItem.checked = checked;
    let updatedChildren = [];
    if(item.children) {
      item.children.forEach((childItem) => {
        updatedChildren.push(updateStateForItemsChildren(childItem, checked));
      })
    }
    updatedItem.children = updatedChildren;
    return updatedItem;
  }

  const handleCheckboxChecked = () => {
    const newState = updateStateForItemsChildren(props, !props.checked);
    changeState(newState);
  }

  const childCheckboxChangedHandler = (childData, index) => {
    const newState = {...props};
    newState.children[index] = childData;
    let allChildrenChecked = true;
    newState.children.forEach((child) => {
      if(!child.checked) {
        allChildrenChecked = false;
      }
    })
    newState.checked = allChildrenChecked;
    changeState(newState); 
  }

  return (
    <div style={paddingStyle}>
      <input type='checkbox' checked={props.checked} onChange={() => handleCheckboxChecked()}/>
      <span>{props.id}</span>
      <div>
        {
          props.children.map((item, index) => {
            return <CheckboxWrapper key={index} props={item} changeState={(e) => childCheckboxChangedHandler(e, index)}></CheckboxWrapper>
          })
        }
      </div>
    </div>
  )
}

export default CheckboxWrapper;