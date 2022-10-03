import { RENT_MOVIES } from "../constants"

const initial = []

export const cartRed = (state = initial, action) => {
    switch (action.type) {
        case RENT_MOVIES:
            return [...state, action.payload]
        default:
            return state
    }
}