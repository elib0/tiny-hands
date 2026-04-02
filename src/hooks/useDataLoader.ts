import { useState, useEffect } from 'react'

interface UseDataLoaderReturn<T> {
  data: T | null
  loading: boolean
  error: Error | null
}

export const useDataLoader = <T,>(
  dataLoader: () => Promise<T>,
  delay: number = 1500
): UseDataLoaderReturn<T> => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        
        // Simular delay de carga (como si viniera de Firebase)
        await new Promise(resolve => setTimeout(resolve, delay))
        
        const result = await dataLoader()
        setData(result)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'))
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [dataLoader, delay])

  return { data, loading, error }
}

// Helper para cargar siteData.json
export const loadSiteData = async () => {
  // Simular petición asíncrona
  const response = await import('../data/siteData.json')
  return response.default
}
