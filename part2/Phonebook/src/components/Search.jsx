
const Search = ({filter, setFilter}) => {

    const handleSearch = (event) => {
        setFilter(event.target.value) 
    }

    return (
        <div>
            <h1>Search</h1>
            <div>
                Filter shown with <input onChange={handleSearch}/>
                {console.log(filter)}
            </div>
            
        </div>
    )
}

export default Search