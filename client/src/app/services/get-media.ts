import defImg from "../assets/coffee-test.png";

export const getMediaUri = (uri: string | undefined | null) => {
  return uri
    ? `http://${process.env.REACT_APP_DOMAIN}:${process.env.REACT_APP_SERVER_PORT}/assets/${uri}`
    : defImg;
};
