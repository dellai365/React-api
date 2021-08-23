import Axios from "axios"
import { useState, useEffect } from "react"
import Show from "./Show"

const UserList = () => {

    const [list, setList] = useState([])
    


    useEffect(() => {
      Axios.get("https://jsonplaceholder.typicode.com/users")
      .then(resp=>{
          console.log(resp)
          setList(resp.data)
      })
    }, [])


    return (
        <div>
            <tr style={{display:"flex",flexDirection:"row",flexWrap:"wrap",marginLeft:"30px"}} >
                {
                    list.map((el) => (

                        <td style={{margin:"20px"}} > <br/> <br/>  <Show companyname={el.company.name} name={el.name} email={el.email} /> </td>


                    )

                    )
                }
            </tr>
        </div>
    )

}


export default UserList;