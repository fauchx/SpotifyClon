import {create} from 'zustand';

export const usePlayStore = create((set)=>({
    isPlaying: false,
    currentMusic: {playlists:null,song: null,songs: []},
    setIsPlaying: (isPlaying) => set({isPlaying}),
    setCurrentMusic: (currentMusic) => set({currentMusic})
}))