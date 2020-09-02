import React from "react"
import { Helmet } from "react-helmet"

import useCharacter from "hooks/useCharacter"

import Layout from "components/Layout"
import Container from "components/Container"
import CardEffect from "../components/CardEffects"

const IndexPage = () => {
  const { character: allCharacters } = useCharacter()

  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Container>
        <div className="allCharactersContainer">
          {allCharacters.map((character, index) => (
            <CardEffect key={index} index={index} character={character} />
          ))}
        </div>
      </Container>
    </Layout>
  )
}

export default IndexPage
