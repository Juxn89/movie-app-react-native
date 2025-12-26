import { useEffect, useState } from "react"


export const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch = true) => {
	const [data, setData] = useState<T | null>(null)
	const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<Error | null>(null)

	const reset = () => {
		setData(null)
		setLoading(false)
		setError(null)
	}

	const fetchData = async () => {
		try {
			setLoading(true)
			const result = await fetchFunction()
			setData(result)
		} catch (err) {
			setError(err instanceof Error ? err : new Error(''))
		}
		finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		if(autoFetch)
			fetchData()
	}, [])

	return {
		data,
		loading,
		error,
		refetch: fetchData, 
		reset
	}
}