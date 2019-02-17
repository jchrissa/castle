import React from 'react'

export default function CoinTable(props) {
  return (

    <table>
      <thead>
      <button onClick={() => props.sortBy('etoile')}/>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Rate</th>
          <th>Nb Etoiles</th>
          <th>Description</th>
            <th>
            Link</th>
        </tr>
      </thead>
      <tbody>
      {
        props.data.map(row => (
       <tr>
           <td>{row.name}</td>
            <td>{row.price}</td>
             <td>{row.rate}</td>
             <td>{row.etoile}</td>
              <td>{row.description}</td>
              <td>
             <button onClick={()=> window.open(row.lien, "_blank")}>
             Link
             </button >
             </td>
</tr>
          ))
      }
      </tbody>
    </table>
  )
}