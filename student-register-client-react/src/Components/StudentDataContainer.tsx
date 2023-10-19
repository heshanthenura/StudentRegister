import React, { useState, useEffect } from "react";
import { fetchStudentData } from "./../Services/DataService";
import { STUDENTDATA } from "../Models/STUDENTDATA";
import StudentDataForm from "./StudentDataForm";

const StudentDataContainer = () => {
  const [data, setData] = useState<STUDENTDATA[]>([]);

  useEffect(() => {
    fetchStudentData()
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleAddData = (newData: STUDENTDATA) => {
    setData([newData, ...data]);
  };

  return (
    <div>
      <h1>Made with React</h1>
      <StudentDataForm onAddData={handleAddData}></StudentDataForm>
      {data.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {data
              .slice()
              .reverse()
              .map((item: STUDENTDATA, index: number) => (
                <tr key={index}>
                  <td>{item.index}</td>
                  <td>{item.name}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentDataContainer;
