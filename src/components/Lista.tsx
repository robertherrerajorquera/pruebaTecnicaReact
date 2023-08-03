/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useMemo, useEffect } from 'react';
import axios from "axios";
import { Books } from "./models/books";
import {
    Column,
    Table,
    useReactTable,
    ColumnFiltersState,
    getCoreRowModel,
    getFilteredRowModel,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFacetedMinMaxValues,
    getSortedRowModel,
    FilterFn,
    ColumnDef,
    flexRender,
} from '@tanstack/react-table'

import {
    RankingInfo,
    rankItem,
} from '@tanstack/match-sorter-utils'


declare module '@tanstack/table-core' {
    interface FilterFns {
        fuzzy: FilterFn<unknown>
    }
    interface FilterMeta {
        itemRank: RankingInfo
    }
}


const baseUrl = "https://www.anapioficeandfire.com/api/books";
const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
    // Rank the item
    const itemRank = rankItem(row.getValue(columnId), value)

    // Store the itemRank info
    addMeta({
        itemRank,
    })

    // Return if the item should be filtered in/out
    return itemRank.passed
}


////////////////////////////////////////////////////////////////////////////////
export const Lista = () => {
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [globalFilter, setGlobalFilter] = useState('');
    const columns = useMemo<ColumnDef<Books, any>[]>(
        () => [
            {
                header: 'Lista de Libros',

                columns: [
                    {
                        accessorKey: 'url',
                        cell: info => info.getValue(),
                        header: () => <span>Link</span>,
                        enableGlobalFilter: false,
                    },
                    {
                        accessorFn: row => row.name,
                        id: 'name',
                        cell: info => info.getValue(),
                        header: () => <span>Titulo</span>,
                        filterFn: 'fuzzy',
                        enableGlobalFilter: true

                    },
                    {
                        accessorFn: row => row.authors,
                        id: 'author',
                        cell: info => info.getValue(),
                        header: 'Autor',
                        filterFn: 'fuzzy',
                        enableGlobalFilter: true
                    },
                    {
                        accessorKey: 'numberOfPages',
                        header: () => <span>Paginas</span>,
                        enableGlobalFilter: false
                    },
                    {
                        accessorKey: 'publisher',
                        header: 'Publicado por',
                        enableGlobalFilter: false,
                    },
                    {
                        accessorKey: 'country',
                        header: 'Pais',
                        enableGlobalFilter: false,
                    },
                    {
                        accessorKey: 'mediaType',
                        header: 'Tipo',
                        enableGlobalFilter: false,
                    },
                    {
                        accessorKey: 'released',
                        header: 'Fecha publicacion',
                        enableGlobalFilter: false,
                    },
                ],
            },
        ],
        []
    );

    const [data, setData] = useState<[]>([]);
    const libros = async () => {
        await axios.get(baseUrl).then((response) => {
            setData(response.data);
        }).catch((err) => { { err } });
    }

    useEffect(() => {
        // nieves();
        libros();
    }, []);



    const table = useReactTable({
        data,
        columns,
        filterFns: {
            fuzzy: fuzzyFilter,
        },
        state: {
            columnFilters,
            globalFilter,
        },
        onColumnFiltersChange: setColumnFilters,
        onGlobalFilterChange: setGlobalFilter,
        globalFilterFn: fuzzyFilter,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
        getFacetedMinMaxValues: getFacetedMinMaxValues(),
        debugTable: true,
        debugHeaders: true,
        debugColumns: false,
    });

    useEffect(() =>  {
        if (table.getState().columnFilters[0]?.id === 'name') {
            if (table.getState().sorting[0]?.id !== 'name') {
                table.setSorting([{ id: 'name', desc: false }])
            }
        }
    }, [table.getState().columnFilters[0]?.id])




    return (
        <div className="p-2">
            <div>
                <DebouncedInput
                    value={globalFilter ?? ''}
                    onChange={value => { setGlobalFilter(String(value)) }}
                    className="p-2 font-lg shadow border border-block"
                    placeholder="Busca por titulo o autor"
                    type="text"
                />
            </div>
            <div className="h-2" />
            <table>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => {
                                return (
                                    <th key={header.id} colSpan={header.colSpan}>
                                        {header.isPlaceholder ? null : (
                                            <>
                                                <div
                                                    {...{
                                                        className: header.column.getCanSort()
                                                            ? 'cursor-pointer select-none'
                                                            : '',
                                                        onClick: header.column.getToggleSortingHandler(),
                                                    }}
                                                >
                                                    {flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                                    {{
                                                        asc: ' 🔼',
                                                        desc: ' 🔽',
                                                    }[header.column.getIsSorted() as string] ?? null}
                                                </div>
                                                {header.column.getCanFilter() ? (
                                                    <div>
                                                        <Filter column={header.column} table={table} />
                                                    </div>
                                                ) : null}
                                            </>
                                        )}
                                    </th>
                                )
                            })}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => {
                        return (
                            <tr key={row.id}>
                                {row.getVisibleCells().map(cell => {
                                    return (
                                        <td key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>


        </div>
    )
}

function Filter({
    column,
    table,
}: {
    column: Column<any, unknown>
    table: Table<any>
}) {
    const firstValue = table
        .getPreFilteredRowModel()
        .flatRows[0]?.getValue(column.id)

    const columnFilterValue = column.getFilterValue()



    return typeof firstValue === 'number' ? (
        <div>
            <div className="flex space-x-2">
                <DebouncedInput
                    type="number"
                    min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
                    max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
                    value={(columnFilterValue as [number, number])?.[0] ?? ''}
                    onChange={value =>
                        column.setFilterValue((old: [number, number]) => [value, old?.[1]])
                    }
                    placeholder={`Min ${column.getFacetedMinMaxValues()?.[0]
                        ? `(${column.getFacetedMinMaxValues()?.[0]})`
                        : ''
                        }`}
                    className="w-24 border shadow rounded"
                />
                <DebouncedInput
                    type="number"
                    min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
                    max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
                    value={(columnFilterValue as [number, number])?.[1] ?? ''}
                    onChange={value =>
                        column.setFilterValue((old: [number, number]) => [old?.[0], value])
                    }
                    placeholder={`Max ${column.getFacetedMinMaxValues()?.[1]
                        ? `(${column.getFacetedMinMaxValues()?.[1]})`
                        : ''
                        }`}
                    className="w-24 border shadow rounded"
                />
            </div>
            <div className="h-1" />
        </div>
    ) : (
        <>

            <DebouncedInput
                value={(columnFilterValue ?? '') as string}
                onChange={value => column.setFilterValue(value)}
                placeholder={`Search... (${column.getFacetedUniqueValues().size})`}
                className="w-36 border shadow rounded"
                list={column.id + 'list'}
            />
            <div className="h-1" />
        </>
    )
}

// A debounced input react component
function DebouncedInput({
    value: initialValue,
    onChange,
    debounce = 500,
    ...props
}: {
    value: string | number
    onChange: (value: string | number) => void
    debounce?: number
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>) {
    const [value, setValue] = useState(initialValue)

    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    useEffect(() => {
        const timeout = setTimeout(() => {
            onChange(value)
        }, debounce)
       // if(value.toString.length)
        return () => clearTimeout(timeout)
    }, [value])

    return (
        <input {...props} value={value} onChange={e => {setValue(e.target.value)}} />
        //<input type='text' {...props} value={value} onChange={e => setValue(e.target.value)} />
    )
}
