import React, {useState, useEffect} from 'react';

const urlServer = "http://localhost:3000/";
const urlUsers = "users/";
const urlAlbums = "albums/";
const urlPhotos = "photos/";

export default function Photos(){
    const [users, setUsers] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [photos, setPhotos] = useState([]);

    const [idSelectedUser, setIdSelectedUser] = useState(-1)
    const [idSelectedAlbum, setIdSelectedAlbum] = useState(-1);

    //è l'inizializzazione degli utenti
    useEffect(() => { //parte sia quando si fa un componentDidMount sia quando si fa un componentDidUpdate
        const getUsers = async () => {
            const usersDalServer = await fetch(urlServer+urlUsers).then(res => res.json());
            setUsers(usersDalServer);
        }
        getUsers();
    },[]);

    //è l'inizializzazione degli album
    useEffect(() => { 
        const getAlbums = async () => {
            const albumsDalServer = await fetch(urlServer+urlAlbums+"?userId="+idSelectedUser).then(res => res.json());
            setAlbums(albumsDalServer);
        }

        if(idSelectedUser !== -1){
            getAlbums();
        }
    },[idSelectedUser]); 

    //è l'inizializzazione delle foto
    useEffect(() => {
        const getPhotos = async () => {
            const immaginiDalServer = await fetch(urlServer+urlAlbums+idSelectedAlbum+"/"+urlPhotos).then(res => res.json());
            setPhotos(immaginiDalServer.slice(0,10));
        }
        if(idSelectedAlbum !== -1){
            getPhotos();
        }else{
            setPhotos([]);
        }
    },[idSelectedAlbum,idSelectedUser]); //se non passo niente renderizza all'infinito, se passo [] renderizza una sola volta
    /*il secondo argomento sono le variabili di stato da cui dipende photos*/

    const changeUser = ({target}) =>{
        //console.log(target.value);
        setIdSelectedUser(target.value);
        setIdSelectedAlbum(-1);
    }

    const changeAlbum = ({target}) =>{
        setIdSelectedAlbum(target.value);
    }

    return(
        <>
            <h1>Gestore Albums</h1>

            <select onChange={changeUser} value={idSelectedUser}>
                <option disabled value={-1}>Seleziona un utente</option>
                {
                    users.map((user)=> {
                        return <option value={user.id} key={user.id}>{user.name}</option>
                    })
                }
            </select>

            <select onChange={changeAlbum} value={idSelectedAlbum}>
                <option disabled value={-1}>Seleziona un album</option>
                {
                    albums.map((album)=> {
                        return <option value={album.id} key={album.id}>{album.title}</option>
                    })
                }
            </select>

            <ul style={{display: 'flex',flexWrap:'nowrap',listStyleType:'none'}}>
                {
                    photos.map((img,i)=>{
                        return <li key={i}><img style={{width: 100, margin: 20}} src={img.url} alt="immagine"/></li>
                    })
                }
            </ul>
        </>
    )
}