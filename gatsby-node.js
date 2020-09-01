const fetch = require("node-fetch");
const tinyRick = require("rickmortyapi"); // https://github.com/afuh/rick-and-morty-api-node

const NODE_TYPE_CHARACTER = "Character";
const NODE_TYPE_EPISODE = "Episode";
const NODE_TYPE_LOCATION = "Location";

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions;

  const characters = await tinyRick.getCharacter([]);
  const episodes = await tinyRick.getEpisode([]);
  const locations = await tinyRick.getLocation([]);

  const resultsCharacters = characters.results;
  const resultsEpisodes = episodes.results;
  const resultsLocations = locations.results;

  resultsCharacters.forEach((node, index) => {
    createNode({
      ...node,
      id: createNodeId(`${NODE_TYPE_CHARACTER}-${node.id}`),
      parent: null,
      children: [],
      internal: {
        type: NODE_TYPE_CHARACTER,
        content: JSON.stringify(node),
        contentDigest: createContentDigest(node),
      },
    });
  });

  resultsEpisodes.forEach((node, index) => {
    createNode({
      ...node,
      id: createNodeId(`${NODE_TYPE_EPISODE}-${node.id}`),
      parent: null,
      children: [],
      internal: {
        type: NODE_TYPE_EPISODE,
        content: JSON.stringify(node),
        contentDigest: createContentDigest(node),
      },
    });
  });

  resultsLocations.forEach((node, index) => {
    createNode({
      ...node,
      id: createNodeId(`${NODE_TYPE_LOCATION}-${node.id}`),
      parent: null,
      children: [],
      internal: {
        type: NODE_TYPE_LOCATION,
        content: JSON.stringify(node),
        contentDigest: createContentDigest(node),
      },
    });
  });
};
