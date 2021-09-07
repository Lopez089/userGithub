export const DataUser = ({ avatar, name, login, bio, createdAt }) => {
  return (
    <section>
      <div>
        <img src={avatar} alt={`avatar to ${name}`} />
      </div>
      <div>
        <div>
          <h2>{name}</h2>
          <p>{`@${login}`}</p>
          <p>{bio}</p>
        </div>
        <div>
          <p>{createdAt}</p>
        </div>
      </div>
    </section>
  )
}
