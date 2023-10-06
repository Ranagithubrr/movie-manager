import { useReducer } from "react"
import Movies from "./components/Movies/Movies"
import Navbar from "./components/Navbar/Navbar"
import { WatchlistReducer } from "./redux/WatchList_reducer/Watchlist_Reducer"
import { useSelector } from "react-redux"

function App() {
  const watchlist = useSelector((state) => state.WatchlistReducer);
  console.log(watchlist)

  return (
    <>
    <Navbar />
    <Movies />
    </>
  )
}

export default App
