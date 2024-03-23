import { useState } from "react";



export default function FormAddFriend({onAddFriend }) {
  const [name, setName] = useState();
  const [imageSrc, setImageSrc] = useState("https://i.pravatar.cc/48");

  function HandleSubmit(e) {
    if (!name) return

    e.preventDefault();
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${imageSrc}?=${id}`,
      balance : 0
    }
    
    onAddFriend(newFriend);
    

  }
  return(
    <form className="form-add-friend" onSubmit={HandleSubmit}>
        <label>👫 Friend name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>🌆 Image URL</label>
        <input type="text" value={imageSrc} onChange={(e) => setImageSrc(e.target.value)} />
        <button className="button">Add</button>
    </form>
  );
}