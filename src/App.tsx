import { useState } from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { CharacterCounter } from "./components/CharacterCounter";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <RecoilRoot>
       <CharacterCounter/>
    </RecoilRoot>
  );
}

export default App;
