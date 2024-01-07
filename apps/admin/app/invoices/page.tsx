import { DataTable } from 'ui/components/data-table'
import { Payment, columns } from './columns'

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    // ...
  ]
}

export default async function Page() {
  const data = await getData()

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
