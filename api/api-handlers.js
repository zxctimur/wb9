import axios from "axios";

const db_url = 'https://zxc-1488-default-rtdb.firebaseio.com'

export const getItems = () =>{
    return axios.get(`${db_url}/songs.json`)
    .then(response => {
        const questions = Object.keys(response.data)
        .map(key => ({...response.data[key]}))
        console.log(questions)

        return questions
    }
    )
}