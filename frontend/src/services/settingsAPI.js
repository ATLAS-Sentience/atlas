const API_URL = "http://127.0.0.1:8000";


export async function getProfile() {

    const response = await fetch(
        `${API_URL}/users/profile`
    );


    if (!response.ok) {

        throw new Error(
            "Failed to fetch profile"
        );

    }


    return await response.json();
}



export async function updateProfile(
    username,
    email
) {

    const response = await fetch(
        `${API_URL}/users/profile`,
        {
            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                username,
                email
            })
        }
    );


    if (!response.ok) {

        throw new Error(
            "Failed to update profile"
        );

    }


    return await response.json();
}