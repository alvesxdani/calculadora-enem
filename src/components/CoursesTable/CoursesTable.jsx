import PropTypes from 'prop-types';

const CoursesTable = ({ course }) => {
  return (
    <table className="w-[100%] table-fixed">
      <thead>
        <tr>
          <th align="center" colSpan={2}>
            Notas de corte
          </th>
        </tr>
      </thead>
      <tbody>
      <tr>
              <td><strong>Instituição: </strong></td>
              <td><strong>Nota: </strong></td>
            </tr>
        {course.map((item, index) => (
            <tr key={index}>
              <td >{item.ies}</td>
              <td>{item.nota}</td>
            </tr>
        ))}
      </tbody>
    </table>
  );
};


CoursesTable.propTypes = {
  course: PropTypes.array
}



export default CoursesTable;