import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";

import friends from "./friends.json";

function App() {
  return (
    <Wrapper>
      <Title>Friends List</Title>
      {friends.map(e => (
        <FriendCard
          key={e.id}
          name={e.name}
          image={e.image}
          occupation={e.occupation}
          location={e.location}
        />
      ))}
    </Wrapper>
  );
}

export default App;
