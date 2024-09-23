import axios from 'axios';

export const getAnimals = async () => {
    return await axios.get('http://localhost:5050/animal');
}

export const getAnimalsFiltered = async (filters) => {
    return await axios.get('http://localhost:5050/animal/filtered', {params: filters})
}

