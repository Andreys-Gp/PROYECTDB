import { Link } from "react-router-dom";

function HomePage() {
  return (
  <section className="bg-white flex justify-center items-center">
    <header className="bg-black	 p-10">
      <h1 className="text-4xl py-2 font-bold text-white">React Vector Divergence</h1>
      <p className="text-md text-white	">
      Vector divergence is a fundamental concept in vector analysis that allows us to study the
       "distance" or "expansion" of a vector field at a given point. It has applications in various
        fields such as physics, engineering and materials science, and is related to other mathematical
         properties such as flow and gradient..
      </p>
      <Link
        className="bg-white text-black px-4 py-2 rounded-md mt-4 inline-block"
        to="/div"
      >
        ! lets go  calculate
      </Link>
      
    </header>
  </section>
  );
}

export default HomePage;
