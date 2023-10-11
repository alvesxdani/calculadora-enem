const ResumeNotes = (media) => {
    
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
          <td>{media.ling || 0}</td>
          <td>{media.mat || 0}</td>
          <td>{media.ch || 0}</td>
          <td>{media.cn || 0}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ResumeNotes;
