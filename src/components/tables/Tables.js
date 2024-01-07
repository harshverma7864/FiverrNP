import React from 'react'
import style from '../../assets/styles/tables/table.module.css'


const Tables = ({tableData}) => {

    const head = Object.keys(tableData[0]);

  return (
    <>
        <table className={style.tableMain}>
            <thead>
                <tr>
                    {/* <th>S.No.</th> */}
                    { head.map((item , index)=>(<th key={index}>{item}</th>)) }
                </tr>
            </thead>
            <tbody>
                { tableData &&
                    tableData.map((item , index)=>(
                        <tr>
                        {head.map((item2, index2)=>(<td>{item[item2]}</td>))}
                        
                        </tr>
                    ))
                }
                
            </tbody>
        </table>
    </>
  )
}

export default Tables