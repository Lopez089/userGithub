import { BiMap, BiLink, BiUserCircle, BiBuildings } from 'react-icons/bi'

export const DetailUser = ({ location, url, company, twitter }) => {
  return (
    <section>
      <div>
        <BiMap />
        <p>{location}</p>
      </div>
      <div>
        <BiLink />
        <p>{url}</p>
      </div>
      <div>
        <BiUserCircle />
        <p>{`@${twitter}`}</p>
      </div>
      <div>
        <BiBuildings />
        <p>{company}</p>
      </div>
    </section>
  )
}
