import {links} from '../../shared/links'

import { getItems } from '../../../api/api-handlers'

export const vanechka = async () => {
    let albums = await getAlbums()
    // getAlbums()
    console.log('albums', albums);
    
    const albumDiv = document.querySelector('.albums')

    qqq()
    
function qqq() {
    console.log(albums[1].size);


    if (albums.length) {

for (let i = 0; i<albums.length; i++) {



    const album = document.createElement('div')
    // album.classList.add('name')
    const oblozcha = document.createElement('img')
    const title = document.createElement('h3')
    album.classList.add('oblozcha')
    const list = document.createElement('ol')
    album.classList.add('list')

    for (let j = 1; j < Object.keys(albums[i]).length; j++) {
        if (albums[i][`song${j}`] !== '') {

            const li = document.createElement('li')
            li.innerText = albums[i][`song${j}`]
            list.append(li)
        }

    }

    title.innerText = albums[i].album

    album.append(title, oblozcha, list)
    albumDiv.append(album)

}
}


}

    async function getAlbums() {
        return await getItems()
    }
}