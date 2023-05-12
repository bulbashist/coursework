import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { ICategory } from "../../../../types";
import { setFilter } from "../../slice";
import { AsideMenu, List, ListElement } from "./styles";
import axios from "axios";

const AsideBar = () => {
  const filter = useAppSelector((state) => state.products.filter);
  const dispatch = useAppDispatch();

  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios.get<ICategory[]>(
        "http://localhost:5000/api/categories"
      );
      setCategories(response.data);
    };

    getCategories();
  }, []);

  const pressHandler = (id: number) => {
    dispatch(setFilter(id));
  };

  return (
    <AsideMenu>
      <List>
        {categories.map((category) => {
          return (
            <ListElement
              key={category.id}
              onClick={() => pressHandler(category.id)}
              className={category.id === filter ? "active" : ""}
            >
              <h3>{category.name}</h3>
              <div>
                <img src={category.mediaURI} alt="" />
              </div>
            </ListElement>
          );
        })}
      </List>
    </AsideMenu>
  );
};

export default AsideBar;
