import React from "react";

export const useMatchMedia = (query) => {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const queryResult = window.matchMedia(query);
    setMatches(queryResult.matches);

    const listener = (e) => {
      setMatches(e.matches);
    };

    queryResult.addListener(listener);
    return () => {
      queryResult.removeListener(listener);
    };
  }, [query]);

  return matches;
};
