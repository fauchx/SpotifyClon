import {create} from 'zustand';

export const usePlayStore = create((set)=>({
    isPlaying: false,
    volume:1,
    setVolume : (volume) => set({volume}),
    currentMusic: {playlists:null,song: null,songs: []},
    setIsPlaying: (isPlaying) => set({isPlaying}),
    setCurrentMusic: (currentMusic) => set({currentMusic})
}))