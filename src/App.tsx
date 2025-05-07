import "./App.css";

import Header from "./components/Header";
import Layout from "./components/Layout";
import PuppiesList from "./components/PuppiesList";
import PuppyForm from "./components/PuppyForm";
import { puppies as puppiesData, Puppy } from "./assets/data";
import { useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";

function App() {
  const [likedPuppies, setLikedPuppies] = useState<number[]>([1, 3, 6]);
  const [puppies, setPuppies] = useState<Puppy[]>(puppiesData);
  const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <>
      <Layout>
        <Header></Header>

        <ApiPuppies />
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

function ApiPuppies() {
  const [apiPuppies, setApiPuppies] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(
    () => {
      // fetch puppies form API
      setIsLoading(true);
      async function fetchPuppies() {
        try {
          const response = await fetch("http://127.0.0.1:8000/api/puppies");
          if (!response.ok) {
            // throw new Error("Network response was not ok");
            const errorData = await response.json();
            setError(errorData.message);
            throw errorData;
          }
          const data = await response.json();
          // console.log(data);
          setApiPuppies(data);
        } catch (error) {
          console.error("Error fetching puppies:", error);
        }
        setIsLoading(false);
      }

      fetchPuppies();
    },
    [
      // re run the effect
    ]
  );
  return (
    <div className="mt-12 bg-slate-100 text-slate-800 shadow-md ring ring-black/5">
      <p>Api Puppies</p>

      {isLoading && !error ?  (<LoaderCircle className="animate-spin stroke-slate-300" />) : (<pre className="">{JSON.stringify(apiPuppies, null, 2)}</pre>)}
      
      {error && <p className="text-red-500">{error}</p>}


      {/* the bellow commented lines are not working and IDK why */}
      {/* {apiPuppies.length > 0 && (
        <pre className="">{JSON.stringify(apiPuppies, null, 2)}</pre>
      )} */}
      
    </div>
  );
}

export default App;
