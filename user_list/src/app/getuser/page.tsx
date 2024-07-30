export const getalluser = async () => {
    try{
        let data = await fetch('http://localhost:3000/api/users');
        data = await data.json();
        if (data.success) {
            return (data.result);
        }
        else {
            return ([])
        }
    }
    catch (error) {
        console.error("Failed to fetch user data", error);
        return([]);
    }
}

