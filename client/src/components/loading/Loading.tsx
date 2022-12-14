import { ReactNode, useEffect, useState } from "react"

interface LoadingProps {
    children: ReactNode
}

const Loading = ({ children }: LoadingProps) => {
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setTimeout(() => setLoading(false), 2500)
    })

    return (
        <>
            {loading ? <div className="loading">Loading...</div> : children}
        </>
    )
}

export default Loading