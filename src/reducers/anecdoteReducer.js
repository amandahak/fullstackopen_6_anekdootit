import { createSlice } from '@reduxjs/toolkit'

const getId = () => Number((Math.random() * 1000000).toFixed(0))

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [
    { content: "But it works in my machine...", id: 1, votes: 8 },
    { content: "If it hurts, do it more often", id: 2, votes: 2 },
    { content: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", id: 3, votes: 1 },
    { content: "The first 90 percent of the code accounts for the first 90 percent of the development time... The remaining 10 percent of the code accounts for the other 90 percent.", id: 4, votes: 1 },
    { content: "Adding manpower to a late software project makes it later!", id: 5, votes: 0 }
  ],
  reducers: {
    createAnecdote(state, action) {
      state.push({
        content: action.payload,
        id: getId(),
        votes: 0
      })
    },
  }
})

export const { voteAnecdote, createAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer
