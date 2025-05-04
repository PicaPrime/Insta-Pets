import { useState } from "react";
import "./App.css";
import { puppies } from "./assets/data";
import Header from "./components/Header";
import Layout from "./components/Layout";
import PuppiesList from "./components/PuppiesList";
import PuppyForm from "./components/PuppyForm";

function App() {
  const [likedPuppies, setLikedPuppies] = useState<number[]>([1, 3, 6]);
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

        <PuppyForm />
      </Layout>
    </>
  );
}

export default App;
