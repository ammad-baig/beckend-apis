import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom"




const ABTable = (props) => {
  const { label, dataSource, cols } = props;
  const navigate = useNavigate()


  return (
    <div>
      <h4>{label}</h4>
      <table className="m-auto table table-striped border border-dark">
        <thead>
          <tr>
            {cols.map((x, i) => (
              <th className="p-4" key={i}>{x.displayName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataSource && Array.isArray(dataSource) && dataSource.map((x, i) => (
            <tr key={i}>
              {cols.map((y, j) => (
                <td className="p-2 px-4" key={j}>{x[y.key]}</td>
                ))}

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ABTable;
