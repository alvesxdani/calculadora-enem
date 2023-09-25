const Tables = (simulado) => {
    return (
        <>
        <table className="border table-fixed w-[100%] mb-8 bg-[#eee3]">
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
                            {simulado['ling'] ? simulado['ling']: 0}
                        </td>

                        <td>
                            {simulado['mat'] ? simulado['mat'] : 0}
                        </td>

                        <td>
                            {simulado['ch'] ? simulado['ch'] : 0}
                        </td>

                        <td>
                            {simulado['cn'] ? simulado['cn'] : 0}
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}


export default Tables