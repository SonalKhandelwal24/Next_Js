export const getData = async () => {
    try {
        let response = await fetch('http://localhost:3000/api/books', { cache: "no-cache" });
        const data = await response.json();
        if (data.success) {
             return(data.result);
        } else {
            return([]);
        }
    } catch (error) {
        console.error("Failed to fetch books", error);
        return([]);
    }
}