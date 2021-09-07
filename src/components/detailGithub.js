export const DetailGithub = ({ repos, folowers, folowing }) => {
  return (
    <section>
      <div>
        <p>Repos</p>
        <p>{repos}</p>
      </div>
      <div>
        <p>folowers</p>
        <p>{folowers}</p>
      </div>
      <div>
        <p>folowing</p>
        <p>{folowing}</p>
      </div>
    </section>
  )
}
