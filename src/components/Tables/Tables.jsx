const Tables = (simulado) => {
    return (
        <>
        <table className="custom-table border table-auto w-[100%] mb-5">
                <thead>
                    <tr>
                        <th align="center" colSpan={4}>{simulado.num}º Simulado</th>
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
                            {simulado && simulado['ling']}
                        </td>

                        <td>
                            {simulado && simulado['mat']}
                        </td>

                        <td>
                            {simulado && simulado['ch']}
                        </td>

                        <td>
                            {simulado && simulado['cn']}
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}


export default Tables