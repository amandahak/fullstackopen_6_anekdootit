const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case "NEW_ANECDOTE":
      return [...state, action.payload];

    case "VOTE_ANECDOTE":
      return state.map(anecdote =>
        anecdote.id === action.payload
          ? { ...anecdote, votes: anecdote.votes + 1 }
          : anecdote
      );

    default:
      return state;
  }
};


export const createAnecdote = (content) => {
  return {
    type: "NEW_ANECDOTE",
    payload: {
      content,
      id: (Math.random() * 1000000).toFixed(0), // Generoidaan satunnainen ID
      votes: 0,
    },
  };
};


export const voteAnecdote = (id) => {
  return {
    type: "VOTE_ANECDOTE",
    payload: id,
  };
};

export default anecdoteReducer;
