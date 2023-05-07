const song = document.getElementById('song-or-album')
const oblozcha = document.getElementById('oblozcha')
const btn = document.getElementById('sendbutton')

const db_url = 'https://zxc-1488-default-rtdb.firebaseio.com'

btn.onclick = () => {
    const data = {
        song: song.value,
        oblozcha:oblozcha.value,

    }

    console.log(data);

    song.value = ''
    oblozcha.value = ''


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
