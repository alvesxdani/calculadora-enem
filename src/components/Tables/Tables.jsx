const Tables = (info) => {
    return (
        <>
            <table className="custom-table border table-auto w-[100%]">
                <thead>
                    <tr>
                        <th align="center" colSpan={4}>1º Simulado</th>
                    </tr>

                    <tr>
                        <th>
                            LING
                        </th>

                        <th>
                            MAT
                        </th>

                        <th>
                            CH
                        </th>

                        <th>
                            CN
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {info['ling']}
                        </td>

                        <td>
                            {info['mat']}
                        </td>

                        <td>
                            {info['ch']}
                        </td>

                        <td>
                            {info['cn']}
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}


export default Tables