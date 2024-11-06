import { useEffect, useState } from "react";
import { TravelDTO } from "../types/travel.type";
import { create, findOneById, update } from "../services/travel.service";
import { useParams } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";

type FormTravelProps = {
  fetchTravels?: () => void;
};

const FormTravel = ({ fetchTravels }: FormTravelProps) => {
  const [credentials, setCredentials] = useState<TravelDTO>({
    title: "",
    city: "",
    country: "",
    image: "",
    description: "",
  });
  const { id } = useParams();

  useEffect(() => {
    if (id) fetchTravel();
  }, [id]);

  const fetchTravel = async () => {
    try {
      const travel = await findOneById(id as string);
      setCredentials(travel);
    } catch (error) {
      console.log("Error to fetch travels", error);
    }
  };

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
        console.log("submit upadte");
        await update(id, credentials);
      } else {
        console.log("submit create");
        await create(credentials);
        if (fetchTravels) fetchTravels();
      }
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2 mb-5">
        <Input
          type="text"
          name="title"
          placeholder="Entrez un titre"
          onChange={heandleChange}
          value={credentials.title}
          required={true}
        />
        <Input
          type="text"
          name="city"
          placeholder="Entrez une ville"
          value={credentials.city}
          onChange={heandleChange}
        />
        <Input
          type="text"
          name="country"
          placeholder="Entrez un pay"
          value={credentials.country}
          onChange={heandleChange}
        />
        <Input
          type="text"
          name="image"
          placeholder="Entrez une image"
          value={credentials.image}
          onChange={heandleChange}
        />
        <Input
          type="text"
          name="description"
          value={credentials.description}
          placeholder="Entrez une description"
          onChange={heandleChange}
        />
        <div>
          <Button type="submit" text={`${id ? "Editer" : "Ajouter"}`} />
        </div>
      </div>
    </form>
  );
};

export default FormTravel;
