import axios from "axios"


const page = async () => {
  const {data} = await axios.get("https://jsonplaceholder.typicode.com/todos/2");


  return (
    <div>
      <h1 className="text-5xl">about page</h1>
      <p className="mt-15 text-2xl text-center">{JSON.stringify(data)}</p>
    </div>
  )
}

export default page
