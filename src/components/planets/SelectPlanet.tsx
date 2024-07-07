import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentPlanet } from "../../redux/planet/reducer";
import { Select, Space } from 'antd';
import { useEffect, useState } from "react";
import { SelectPlanetProps } from "../components-types/types";
import { Iplanet } from "../../context/context-types/types";


function SelectPlanet({ planets }: SelectPlanetProps) {
  const [select, setSelect] = useState(false);
  const [search, setSearch] = useState<string | undefined>();
  const [, setPlanetState] = useState<Iplanet | undefined>();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const keypress = (event: KeyboardEvent) => {
      if (event.key === "e") {
        setSelect((prev) => !prev);
      }
    };

    document.addEventListener("keypress", keypress);
    return () => document.removeEventListener("keypress", keypress);
  }, []);

  const handleClick = (planet: Iplanet) => {
    dispatch(setCurrentPlanet(planet));
    navigate(`/planets/${planet.name}`);
  };

  const handleSelect = (value: string) => {
    const selectedPlanet = planets.find((p) => p.name === value);
    if (selectedPlanet) {
      setPlanetState(selectedPlanet);
      setSearch(value);
      handleClick(selectedPlanet);
    }
  };

  return (
    <div>
      <Select
        style={{ width: 200 }}
        open={select}
        onSelect={handleSelect}
        onClick={() => setSelect((prev) => !prev)}
        placeholder="Press e to select"
        value={search}
        options={planets.map((planet) => ({
          value: planet.name,
          label: (
            <Space>
              <img
                style={{ width: 20, height: 20 }}
                src={planet.picture}
                alt={planet.name}
              />
              {planet.name}
            </Space>
          ),
        }))}
      />
    </div>
  );
}

export default SelectPlanet;
