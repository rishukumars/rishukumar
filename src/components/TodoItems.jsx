import Item from "./Item"
const TodoItems = ({items, onClickedDelete}) => {
  return (
    <>
      {items.map((item, index) => (
    <Item key={index} name={item.name} date={item.date} onClickedDelete={onClickedDelete} ></Item>
    ))}
    </>
  )
}

export default TodoItems





// import Item from './Item';

// const TodoItem = ({ items }) => {
//   return (
//     <>
//       {items.map((item,index) => (
//         <Item key={index} name={item.name} date={item.date} />
//       ))}
//     </>
//   );
// };

// export default TodoItem;
