'use client'
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getDataFetch } from "./methods";

export const useFetch = (method: string) => {
    const [params, setParams] = useState('');
    const [query, setQuery] = useState('');
    // const data = Get(method, {
    const { data, isLoading, refetch } = useQuery(getDataFetch(method, {
        params,
        query
    }));

    const getData = (e: string | Record<string, string>) => {
        if (typeof e === 'string') {
            setParams(e)
        } else {
            const query = Object.keys(e).map(key => `${key}=${e[key]}`).join('&')
            setQuery(query)
        }
    }

    return { data, isLoading, refetch, getData };
}