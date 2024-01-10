import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';


const useStyles = makeStyles({
  table: {  
    width:650,
  },
});

function RecTable() {
  const classes = useStyles();


  return (
    <div className="App">
      <div className='table-container'>
      <Table  className={classes.table} >      
          <TableRow  className='row-style'>
              <TableCell variant="head">Full Name</TableCell>
              <TableCell>Cell 1</TableCell>
              <TableCell>Cell 2</TableCell>
          </TableRow>     
          <TableRow  className='row-style'>
              <TableCell variant="head">Email</TableCell>
              <TableCell>Cell 1</TableCell>
              <TableCell>Cell 2</TableCell>
          </TableRow>       
      </Table>
      </div>
    </div>
  );
}

export default RecTable;