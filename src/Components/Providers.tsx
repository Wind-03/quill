import React, { useState } from 'react'
import { QueryClient } from "@tanstack/react-query"
"use client"

const Providers = () => {
    const [queryClients]= useState(()=> new QueryClient)
    const [trpcClient] = useState(()=> new TRPCClient({
    return ()
}
}

export default Providers