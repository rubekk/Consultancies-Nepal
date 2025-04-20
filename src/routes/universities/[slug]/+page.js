import universitiesData from "$lib/data/universities.json";
import { error } from "@sveltejs/kit";

export const load = ({ params }) => {
    const dataIndex = universitiesData.findIndex(data => {
        return data.slug === params.slug;
    });

    if (dataIndex < 0) {
        throw error(404, "Not found");
    }

    const countryData = universitiesData[dataIndex];

    return { data: countryData };
};
