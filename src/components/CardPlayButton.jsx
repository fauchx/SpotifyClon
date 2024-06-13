import { Pause, Play } from "./player"
import { usePlayStore } from "@/store/playerStore" // <- ESTADO GLOBAL
export function CardPlayButton({id}){
    const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } = usePlayStore(state=>state)
    const isPlaylingPlaylist = isPlaying && currentMusic?.playlist.id == id

    const handleClick = () =>{
        if(isPlaylingPlaylist){
            setIsPlaying(false)
            return
        }

        fetch(`/api/get-info-playlist.json?id=${id}`)
        .then(res => res.json())
        .then(data =>{
            const {songs, playlist} = data
            setIsPlaying(true)
            setCurrentMusic({songs, playlist, song: songs[0]})
            console.log("songs",songs)
        })
    }
    return (
        <button onClick={handleClick} className="rounded-full bg-green-500 p-4">
           {isPlaylingPlaylist? <Pause/> : <Play/>}
        </button>
    )
}