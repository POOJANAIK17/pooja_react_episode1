import {useDispatch, useSelector} from "react-redux"

function Home() {
  const username = useSelector((state) => state.user.value.username)
  return (
    <div>home page of {username}</div>
  )
}

export default Home