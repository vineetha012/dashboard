import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "../../config/index";

export const dashboardApi = createApi({
    reducerPath: "dashboard",
    baseQuery: fetchBaseQuery({
        baseUrl: config().BASE_URL,
        prepareHeaders: (headers: any) => {
            headers.set(
                "Authorization",
                `Bearer ${localStorage.getItem("dashboard-token")}`
            );
            return headers;
        },
    }),
    tagTypes: ["dashboard"],
    endpoints: (builder) => ({
        getDashboarInfo: builder.query<any, void>({
            query: () => ({
                url: "/dashboardinfo.json?key=87e4f070",
                method: "GET",
            }),
            providesTags: ["dashboard"],
        }),
    }),
});

export const {
    useGetDashboarInfoQuery
} = dashboardApi;
