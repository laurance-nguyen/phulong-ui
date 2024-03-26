import { Payment, columns } from './columns'

import { DataTable } from 'ui/components/data-table'

const data: Payment[] = [
  {
    id: '728ed52f',
    amount: 100,
    status: 'pending',
    email: 'm@example.com',
  },
  // ...
]

const Invoices = () => {
  return (
    <main className='p-6 flex flex-col gap-4'>
      <div>
        <h2 className='text-3xl font-bold tracking-tight'>Hoá đơn</h2>
      </div>
      <div>
        <DataTable columns={columns} data={data} />
      </div>
    </main>
  )
}

export default Invoices