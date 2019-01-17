import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {
  state = {
    friends: friends
  };

  handleDelete = id => {
    console.log("we got to thandle delet!", id);
    const newFriends = this.state.friends.filter(e => {
      return e.id !== id;
    });
    console.log("this is our friends after the filter", newFriends);
    this.setState({ friends: newFriends });
  };

  render() {
    console.log("this state", this.state);
    return (
      <Wrapper>
        <h1 className="title">Friends List</h1>
        {this.state.friends.map(e => (
          <FriendCard
            name={e.name}
            image={e.image}
            occupation={e.occupation}
            location={e.location}
            key={e.id}
            id={e.id}
            remove={this.handleDelete}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
