const Shimmer = () => {
    return <div className="flex flex-wrap justify-between ">
        {Array(15).fill("").map((e, index) => <div key={index} className="w-56 h-56 m-5 bg-gray-200"></div>)}
    </div>
}

export default Shimmer
