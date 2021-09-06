import { BiMap, BiLink, BiUserCircle, BiBuildings } from 'react-icons/bi'

export const DetailUser = () => {
  return (
    <section>
      <div>
        <BiMap />
        <p>ubicacion</p>
      </div>
      <div>
        <BiLink />
        <p>url</p>
      </div>
      <div>
        <BiUserCircle />
        <p>redes sociales</p>
      </div>
      <div>
        <BiBuildings />
        <p>empresa</p>
      </div>
    </section>
  )
}
