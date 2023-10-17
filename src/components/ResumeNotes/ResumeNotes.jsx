const ResumeNotes = (media) => {
  const mediaTotal = Number((media.ling + media.mat + media.ch + media.cn) / 5)
    
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
          <td>{media ? media.ling : 0}</td>
          <td>{media ? media.mat : 0}</td>
          <td>{media ? media.ch : 0}</td>
          <td>{media ? media.cn : 0}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
            <td colSpan={4} align="center" style={{paddingLeft: '1rem'}}>
                <strong>Média total: </strong>
                {media ? mediaTotal : 0}
            </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ResumeNotes;
