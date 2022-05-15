import React, { useEffect } from "react";
import "./App.css";
import { supabase } from "./client";

function App() {
  // array of stickers from database
  const [stickers, setStickers] = React.useState([]);

  // track current sticker being created/edited
  const [sticker, setSticker] = React.useState({
    qty: 1,
    notes: "",
    started_at: new Date(),
  });

  // destructuring sticker object
  const { qty, notes, started_at } = sticker;

  // get stickers from database
  async function fetchStickers() {
    const { data } = await supabase.from("stickers").select();
    setStickers(data);
  }

  // call fetch when page loads
  useEffect(() => {
    fetchStickers();
  }, []);

  async function createPost() {
    await supabase.from("stickers").insert([{}]);
  }

  // TODO: remove debug code
  console.log(stickers);

  return <div className="App">{JSON.stringify(stickers)}</div>;
}

export default App;
