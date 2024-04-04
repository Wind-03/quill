import React from 'react'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import {redirect} from 'next/navigation'

async function Page() {
    const {getUser} = getKindeServerSession()
    const user = await getUser()

    if(!user || !user.id) redirect('/auth-callback?origin=/dashboard')
    return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}

export default Page