const Shimmer = () => {
    return <div className="flex flex-wrap justify-center ">
        {Array(15).fill("").map((e, index) => <div key={index} className="w-64 p-5 m-5 h-72 bg-gray-200"></div>)}
    </div>
}

export default Shimmer
