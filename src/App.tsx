import "./App.css";
import Header from "./components/Header";
import Layout from "./components/Layout";
import PuppiesList from "./components/PuppiesList";
import PuppyForm from "./components/PuppyForm";
import { puppies } from "./assets/data";
import { useState } from "react";
import { likedContext } from "./context/LikedContext";

function App() {
  const [likedPuppies, setLikedPuppies] = useState<number[]>([1, 3, 6]);
  return (
    <>
      <Layout>
        <Header></Header>

        {/* <likedContext.Provider value={{ likedPuppies, setLikedPuppies }}>
          
        </likedContext.Provider> */}

        <PuppiesList
          likedPuppies={likedPuppies}
          setLikedPuppies={setLikedPuppies}
          puppies={puppies}
        />

        <PuppyForm />
      </Layout>
    </>
  );
}

export default App;
