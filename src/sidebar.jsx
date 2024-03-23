import FormAddFriend from "./add-friend.jsx";



export default function SideBar({initialFriends, onAddFriend, showAddFriend, onShowAdd, onSelection, selectedFriend  }) {
  return(
    <div className="sidebar">
     <ul>
      {initialFriends.map((friend) => 
        <Friend friend={friend} balance={friend.balance} name={friend.name} imgSrc={friend.image} key={friend.id} onSelection={onSelection} selectedFriend={selectedFriend} />
      )}
     </ul>
     {showAddFriend && (
      <FormAddFriend onAddFriend={onAddFriend} />
     )}
     <Button onClick={onShowAdd}>{showAddFriend ? "close" : "Add Friend"} </Button>
    </div>
  );
};

function Friend({name, imgSrc, balance, onSelection, friend, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;
  return(
    <li className={isSelected ? "selected" : ""}>
      <img src={imgSrc} alt="friend" />
      <h3>{name}</h3>
      <p className={balance > 0 ? "green" : balance < 0 ? "red" : null}>{balance < 0 ? `You owe ${name} ${Math.abs(balance)}$` : balance > 0 ? `${name} owes you ${balance}$` : `You and ${name} are even`}</p>
      <Button onClick={() => onSelection(friend)} >{isSelected ? "Close" : "Select"}</Button>
    </li>
    
  );
}

function Button({children, onClick}) {
  return(
    <button onClick={onClick} className="button">{children}</button>
  );
}