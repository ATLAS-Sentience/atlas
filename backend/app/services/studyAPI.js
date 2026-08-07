const BASE_URL = "http://127.0.0.1:8000";


export async function getStudySessions() {

    const response = await fetch(`${BASE_URL}/study/sessions`);

    return await response.json();
}


export async function addStudySession(session) {

    const response = await fetch(`${BASE_URL}/study/session`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(session)

    });

    return await response.json();
}


export async function getStudyGoal() {

    const response = await fetch(`${BASE_URL}/study/goal`);

    return await response.json();
}


export async function createStudyGoal(goal) {

    const response = await fetch(`${BASE_URL}/study/goal`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(goal)

    });

    return await response.json();
}
