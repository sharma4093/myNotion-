

    import { useState, useEffect } from 'react';

    const Login = () => {
        const [data, setData] = useState(null); // Initialize as null or an empty array
    
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch("https://randomuser.me/api/");
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    const result = await response.json(); // Await the JSON parsing
                    setData(result.results || []); // Assume 'results' is the array you want
                    console.log(result);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            };
    
            fetchData(); 
        }, []); 
    
        return (
            <>
                {
                    data && data.length > 0 ? (
                        data.map((details, index) => (  <p key={index}>Name: {details.name.first} {details.name.last}</p>))
                    ) : (
                        <p>Loading...</p> // Handle the loading state
                    )
                }
            </>
        );
    };
    
    export default Login;
    