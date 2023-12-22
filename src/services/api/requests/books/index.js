import { api } from 'services/api'

export const getHightlightedBooks = () => 
  api.get('/book?highlighted=true', {
    headers: {
        Authorization: `bearer ${localStorage.getItem('@bookclub_token')}`
    }
})
