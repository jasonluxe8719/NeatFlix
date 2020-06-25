export const asArray = ( { videos }) => (
  Object.keys(videos).map(key => videos[key])
);