function Table({ data, header }) {

    return (

        <div className="table-wrapper">
            <table className="user-table">
                <thead>
                    <tr>
                        {(header.map((col, index) => <th key={index}>{col.lable}</th>))}
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((item) => (
                            <tr key={item.id}>
                                {header.map((col, index) => (
                                    <td key={index}>{item[col.key]}</td>
                                ))
                                }

                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" style={{ textAlign: 'center', color: '#9ca3af', padding: '30px' }}>
                                No users found matching your search.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Table;