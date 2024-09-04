import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function DataTable({ columns, data }) {

    return (
        <div style={{ height: '80%', width: '100%' }}>
            <DataGrid
                rows={data}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                sx={{ overflow: 'clip', }}
            />
        </div>
    );
}
