import usefetchData from "../hooks/useFetchData"


const DatabaseStatus = () => {

    const {data, error, loading} = usefetchData()

    if(loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>

  return (
    <>
        <div>
            {data && (
                <div>
                    <h1>{data.success === 'true' ? 'connection Seccessful' : 'Connection Failed'}</h1>
                    <p>{data.message}</p>
                </div>
            )}
        </div>
    </>
  )
}

export default DatabaseStatus