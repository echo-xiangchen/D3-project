import { useState } from 'react'
import { 
    tableDataASE,
    tableDataFSE,
    tableDataICSE,
} from '../constant'

import { sortJsonArrayByTag } from '../utils'

const Table = () => {
    const [tableData, setTableData] = useState(tableDataASE)

    const handleSort = (tag) => {
        let sortedTableData = sortJsonArrayByTag(tableData, tag)
        setTableData(sortedTableData)
    }

    return(
        <div>
            Table
        </div>
    )
}

export default Table