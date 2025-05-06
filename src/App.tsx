import "./App.css";

import Header from "./components/Header";
import Layout from "./components/Layout";
import PuppiesList from "./components/PuppiesList";
import PuppyForm from "./components/PuppyForm";
import { puppies as puppiesData, Puppy } from "./assets/data";
import { useState } from "react";

function App() {
  const [likedPuppies, setLikedPuppies] = useState<number[]>([1, 3, 6]);
  const [puppies, setPuppies] = useState<Puppy[]>(puppiesData);
  const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <>
      <Layout>
        <Header></Header>

        <PuppiesList
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          likedPuppies={likedPuppies}
          setLikedPuppies={setLikedPuppies}
          puppies={puppies}
        />

        <PuppyForm setPuppies={setPuppies} puppies={puppies} />
      </Layout>
    </>
  );
}

export default App;
