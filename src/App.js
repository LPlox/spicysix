import React from "react";
import "./App.scss";
import Data from "./assets/initiative.json";
import Infographic from "./components/Infographic";

//components
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";

function App() {
  const totalOrganizations = Data.length;
  // const partnerArray = Data.filter((object) => {
  //   return object.Type.search("partnership") > -1;
  // });
  // console.log(partnerArray.length);

  return (
    <div className="App">
      <Navbar />
      <Infographic totalOrg={totalOrganizations} partners={50} />
      <Cards data={Data} />
    </div>
  );
}

export default App;