//import { Books } from "../components/models/books"
export const Favoritos = () => {
  const fav = [{
    name: "A Game of Thrones",
  },
  {
    name: "A Clash of Kings",
  },
  {
    name: "A Storm of Swords",
}]
    return (
        <div>
            <h1>Lista de Favoritos</h1>
            <ol>
              {
                fav.map((item,pos) => (
                  <li key={pos}>{item.name}</li>
                ))
              }
            </ol>
        </div>
    )
}
