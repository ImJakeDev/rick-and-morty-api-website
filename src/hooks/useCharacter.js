import { useStaticQuery, graphql } from "gatsby"

export default function useCharacter() {
  const data = useStaticQuery(graphql`
    {
      allCharacter {
        edges {
          node {
            image
            name
            gender
            species
            status
          }
        }
      }
    }
  `);

  const character = data.allCharacter.nodes.map(node => {
    const { image, name, gender, species, status } = node

    return {
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