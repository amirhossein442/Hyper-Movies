import { Helmet } from "react-helmet";

export const Title = ({ children }) => {
  return (
    <Helmet>
      <title>HyperMovies | {children} </title>
    </Helmet>
  );
};
