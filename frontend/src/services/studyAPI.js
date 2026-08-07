const API = "http://127.0.0.1:8000";

export async function getStudySessions() {
    const res = await fetch(`${API}/study/sessions`);
    return await res.json();
}

export async function addStudySession(session) {
    const res = await fetch(`${API}/study/session`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(session),
    });

    return await res.json();
}

export async function getStudyGoal() {
    const res = await fetch(`${API}/study/goal`);
    return await res.json();
}

export async function createStudyGoal(goal) {
    const res = await fetch(`${API}/study/goal`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(goal),
    });

    return await res.json();
}