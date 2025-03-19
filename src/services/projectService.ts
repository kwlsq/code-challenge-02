import { API_BASE_URL } from "@/constants/api";
import { Project } from "@/types/projectType";

export const getAllProjects = async (): Promise<Project[]> => {
    try {
        const response = await fetch(`${API_BASE_URL}/projects`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            cache: "no-store",
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch projects: ${response.statusText}`);
        }

        const data: Project[] = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching all projects:", error);
        throw error;
    }
};
