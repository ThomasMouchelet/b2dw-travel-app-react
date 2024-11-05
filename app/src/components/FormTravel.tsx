import { useState } from "react";
import { TravelDTO } from "../types/travel.type";
import { create } from "../services/travel.service";
import { useParams } from "react-router-dom";

type FormTravelProps = {
  fetchTravels?: () => void;
};

const FormTravel = ({ fetchTravels }: FormTravelProps) => {
  const [credentials, setCredentials] = useState<TravelDTO>({});
  const { id } = useParams();

  console.log("form travel id: ", id);

  const heandleChange = (e: React.ChangeEvent) => {
    const { name, value } = e.target;

    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submit form", credentials);

    try {
      if (id) {
        await update();
      } else {
        await create(credentials);
        fetchTravels();
      }
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="title"
          placeholder="Entrez un titre"
          onChange={heandleChange}
          required
        />
        <input
          type="text"
          name="city"
          placeholder="Entrez une ville"
          onChange={heandleChange}
        />
        <input
          type="text"
          name="country"
          placeholder="Entrez un pay"
          onChange={heandleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Entrez une image"
          onChange={heandleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Entrez une description"
          onChange={heandleChange}
        />
        <input type="submit" value={`${id ? "Editer" : "Ajouter"}`} />
      </div>
    </form>
  );
};

export default FormTravel;
