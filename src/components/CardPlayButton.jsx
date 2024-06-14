import { Pause, Play } from "./player"
import { usePlayStore } from "@/store/playerStore" // <- ESTADO GLOBAL
export function CardPlayButton({id, size='small'}){
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
    const iconsClassName = size == 'small' ? 'w-4 h-4': 'w-6 h-6'
    return (
        <button onClick={handleClick} className="hover:scale-105 transition hover:bg-green-400 rounded-full bg-green-500 p-4">
           {isPlaylingPlaylist? <Pause className={iconsClassName} /> : <Play className={iconsClassName}/>}
        </button>
    )
}