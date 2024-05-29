
const Item = ({ name, date, onClickedDelete }) => {
  return (
    <>
      <div className="lists">
        <p className="list">{name}</p>
        <p className="list">{date}</p>
        <button className="l" onClick={() => onClickedDelete(name)}>Delete</button>
      </div>
    </>
  );
};

export default Item;
