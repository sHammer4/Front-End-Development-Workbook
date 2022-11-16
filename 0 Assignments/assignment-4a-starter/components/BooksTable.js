import TableBody from "@mui/material/TableBody"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"

export default function BooksTable(props) {
    return  <TableBody>
        <TableRow>
            <TableCell>
                {props.title}
            </TableCell>
        </TableRow>
    </TableBody>
}