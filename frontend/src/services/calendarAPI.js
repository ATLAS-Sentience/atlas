const API_URL = "http://127.0.0.1:8000";

export async function getCalendarEvents() {
    const response = await fetch(
        `${API_URL}/calendar/events`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch calendar events");
    }

    return await response.json();
}


export async function addCalendarEvent(event) {
    const response = await fetch(
        `${API_URL}/calendar/events`,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(event)
        }
    );

    if (!response.ok) {
        throw new Error("Failed to add calendar event");
    }

    return await response.json();
}