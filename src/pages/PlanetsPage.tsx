import Header from "../components/header/Header.tsx";
import Planets from "../components/planets/Planets.tsx";

function PlanetsPage() {
  return (
    <>
    <div className="bg-solarSystem h-screen">
    <Header />

      <div className="w-full flex flex-col items-center justify-center">
        <Planets />
      </div>
    </div>
    </>
  );
}

export default PlanetsPage;
