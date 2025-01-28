import { createSlice } from '@reduxjs/toolkit'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [
    { content: 'If it hurts, do it more often', id: 1, votes: 0 },
    { content: 'Adding manpower to a late software project makes it later!', id: 2, votes: 0 }
  ],
  reducers: {
    voteAnecdote(state, action) {
      const id = action.payload
      const anecdoteToVote = state.find(a => a.id === id)
      if (anecdoteToVote) {
        anecdoteToVote.votes += 1
      }
    }
  }
})

export const { voteAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer
