const ResumeNotes = (media) => {
  const notas = {
    ling: Number(media.ling),
    mat: Number(media.mat),
    ch: Number(media.ch),
    cn: Number(media.cn),
  }
  const soma = notas.ling + notas.mat + notas.ch + notas.cn
  const mediaTotal = Number(soma / 5).toFixed(1)
  console.log(notas)
    
  return (
    <table className="w-[100%] table-fixed">
      <thead>
        <tr>
          <th align="center" colSpan={4}>
            Média - Simulados
          </th>
        </tr>
        <tr>
          <th>LING</th>
          <th>MAT</th>
          <th>CH</th>
          <th>CN</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>{mediaTotal > 0 ? media.ling : 0}</td>
          <td>{mediaTotal > 0 ? media.mat : 0}</td>
          <td>{mediaTotal > 0 ? media.ch : 0}</td>
          <td>{mediaTotal > 0 ? media.cn : 0}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
            <td colSpan={4} align="center" style={{paddingLeft: '1rem'}}>
                <strong>Média total: </strong>
                {mediaTotal > 0 ? mediaTotal : 0}
            </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ResumeNotes;
