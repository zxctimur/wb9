const album = document.getElementById('album')
const btn = document.getElementById('sendbutton')

const db_url = 'https://zxc-1488-default-rtdb.firebaseio.com'

btn.onclick = () => {
    const data = {
        album: album.value,

    }

    console.log(data);

    album.value = ''

    return fetch(`${db_url}/songs.json`,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .catch( error => {
        console.log(error);
    });




}
