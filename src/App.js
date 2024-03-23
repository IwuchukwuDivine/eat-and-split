import { useState } from 'react';
import './index.css';
import SideBar from './sidebar.jsx';                       

import SplitBillForm from './split-bill-form.jsx';
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] =useState(null);

  function handleShowAdd() {
    setShowAddFriend((show) => !show);
  }
  function HandleAddFriend(newFriend) {
    setFriends((friends) => [...friends, newFriend]);
    setShowAddFriend(false);
  }

  function HandleSpliBill(value) {
    setFriends(friends => friends.map(friend => 
      friend.id === selectedFriend?.id ? {...friend, balance: friend.balance + value} : friend));

    setSelectedFriend(null);
  }
  function handleSelection(friend) {
    setSelectedFriend((cur) => cur?.id === friend.id? null : friend);
    setShowAddFriend(false);

  }
  return(
    <div className='app'>
      <SideBar showAddFriend={showAddFriend} initialFriends={friends} onAddFriend={HandleAddFriend} onShowAdd={handleShowAdd}
      onSelection={handleSelection} selectedFriend={selectedFriend} />
      {selectedFriend && (
      <SplitBillForm onSelection={handleSelection}
      selectedFriend = {selectedFriend} onSplitBill={HandleSpliBill} />
      )}
    </div>
  );
}
