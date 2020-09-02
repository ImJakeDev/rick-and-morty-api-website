import React from "react"
import { Helmet } from "react-helmet"

import useCharacter from "hooks/useCharacter"

import Layout from "components/Layout"
import Container from "components/Container"
import CardEffect from "../components/CardEffect"

const IndexPage = () => {
  const { character: allCharacters } = useCharacter()

  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Container>
        <ul className="allCharactersContainer">
          {allCharacters.map((character, index) => (
            <CardEffect key={index} index={index} character={character} />
          ))}
        </ul>
      </Container>
    </Layout>
  )
}

export default IndexPage
