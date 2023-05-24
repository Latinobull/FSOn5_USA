import useFetch from '../hooks/useFetch';

export default function Users() {
  const { data, isLoading, error } = useFetch(
    'https://fakerapi.it/api/v1/users?_quantity=10'
  );

  return (
    <div>
      <h1>My users</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error {error}</p>}
      {data && (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}
        >
          {data.map(item => (
            <div
              key={item.uuid}
              style={{
                border: 'solid 2px #777',
                width: '400px',
                marginBottom: 20,
              }}
            >
              <h3>
                {item.firstname} {item.lastname}
              </h3>
              <img src={item.image} alt="" width={200} />
              <h4>Username: {item.username}</h4>
              <h5>Password: {item.password}</h5>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
