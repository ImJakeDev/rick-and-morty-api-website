import { useStaticQuery, graphql } from "gatsby"

export default function useCharacter() {
  const data = useStaticQuery(graphql`
    {
      allCharacter {
        nodes {
          image
          id
          name
          species
          gender
          status
        }
      }
    }
  `)

  const character = data.allCharacter.nodes.map(node => {
    const { id, image, name, gender, species, status } = node

    return {
      id,
      image,
      name,
      gender,
      species,
      status,
    }
  })

  return {
    character,
  }
}