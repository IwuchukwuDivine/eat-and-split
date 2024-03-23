import { useState } from "react";

export default function SplitBillForm({selectedFriend, onSplitBill}) {
  const [bill, setBill] =useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const [yourExpense, setYourExpense] = useState("");
  
  let friendExpense = Number(bill - yourExpense);

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill && !yourExpense) return

    onSplitBill(whoIsPaying === "user" ? friendExpense : -yourExpense );
  }
  return(
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>SPLIT A BILL WITH {selectedFriend.name}</h2>
      <label >💰 Bill Value</label>
      <input type="text" value={bill} onChange={(e) => setBill(Number(e.target.value))} />
      <label >🧍‍♀️ Your expense</label>
      <input type="number" value={yourExpense} onChange={(e) => setYourExpense(Number(e.target.value) > bill? yourExpense : Number(e.target.value))} />
      <label>👫 {selectedFriend.name} expense:</label>
      <input type="text" disabled value={friendExpense}/>
      <label>🤑 Who is paying the bill?</label>
      <select name="" id="" value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
        <option value="user">You</option>
        <option value={selectedFriend.name}>{selectedFriend.name}</option>
      </select>
      <button className="button">Split bill</button>
    </form>
  );
}