function TableComponent()
{
    const data = [
        {
            
            "id": 1,
            "email": "john@gmail.com",
            "username": "johnd",
            "password": "m38rmF$",
            "name": {
                "firstname": "john",
                "lastname": "doe"
            },
            "phone": "1-570-236-7033",
            "__v": 0
        },
        {
            "id": 2,
            "email": "morrison@gmail.com",
            "username": "mor_2314",
            "password": "83r5^_",
            "name": {
                "firstname": "david",
                "lastname": "morrison"
            },
            "phone": "1-570-236-7033",
            "__v": 0
        },
        {
            "id": 3,
            "email": "kevin@gmail.com",
            "username": "kevinryan",
            "password": "kev02937@",
            "name": {
                "firstname": "kevin",
                "lastname": "ryan"
            },
            "phone": "1-567-094-1345",
            "__v": 0
        },
        {
            "id": 4,
            "email": "don@gmail.com",
            "username": "donero",
            "password": "ewedon",
            "name": {
                "firstname": "don",
                "lastname": "romer"
            },
            "phone": "1-765-789-6734",
            "__v": 0
        }   
        ]
     return(
        <table>
            <tr>
                <th>Id</th>
                <th>Email</th>
                <th>Username</th>
                <th>password</th>
                <th>Phone</th>
            </tr>
            {
            data.map((eachItem) =>(
                <tr>
                    <td>{eachItem.id}</td>
                    <td>{eachItem.email}</td>
                    <td>{eachItem.username}</td>
                    <td>{eachItem.password}</td>
                    <td>{eachItem.phone}</td>
                </tr>
            ))
            }
            
        </table>
     )
}
export default TableComponent