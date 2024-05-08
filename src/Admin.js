import { Users } from './Users';
import Datatable from './Datatable';
function Admin()
{
    return (
        <>
            <h1>Employee Data</h1>
            <Datatable data ={Users}/>
        </>
    )
}
export default Admin;