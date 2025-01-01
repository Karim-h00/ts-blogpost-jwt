import UseFetch from '../hooks/UseFetch';
import PostCard from '../components/PostCard';


type Data = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

function Home() {


    const url: string = `https://jsonplaceholder.typicode.com/posts`

    const { data, isLoading, error, success } = UseFetch<Data[]>(url)


    function handleClick() {
        console.log("clicked")
    }

    function display() {
        if (success === false && isLoading === true) {
            return (
                <div>waiting for response</div>
            )
        } else if (error) {
            return null
        } else if (data) {
            return (
                <div>
                    {data.map((post: Data) => (
                        <PostCard key={post.id} {...post} />
                    ))}
                </div>
            )
        }
    }
    return (
        <div>
            <div>
                {display()}
            </div>
            <button onClick={handleClick}>click me</button>
        </div>
    )
}

export default Home