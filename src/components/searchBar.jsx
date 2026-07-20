function searchBar({ value, onChange, placholder }) {
    return (<input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placholder}
    />)
}

export default searchBar;