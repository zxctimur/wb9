import { getUser } from "../../api/api-handlers";

export const user = async () => {
    const userFirstName = document.getElementById('user-firstName')
    const userSecondName = document.getElementById('user-secondName')
    await getUser().then(a => console.log(a))
}