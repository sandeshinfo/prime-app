import { RENT_MOVIES } from '../constants'
export const rentMovies = (data) => {

    return {
        type: RENT_MOVIES,
        payload: data

    }

}

