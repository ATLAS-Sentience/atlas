const API_URL = "http://127.0.0.1:8000";

export async function calculateFinance(data) {
    const response = await fetch(`${API_URL}/finance`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error("Failed to calculate finance");
    }

    return await response.json();
}