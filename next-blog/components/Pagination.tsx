import React from 'react';
import {TDirection} from "../types";
import {useRouter} from "next/router";
import qs from "qs";

interface IPropType {
    page: number;
    pageCount: number;
    redirectUrl?: string;
}

const Pagination = ({page, pageCount, redirectUrl = '/'}: IPropType) => {
    const router = useRouter();
    const isPrevDisabled = () => {
        return page <= 1;
    }

    const isNextDisabled = () => {
        return page >= pageCount;
    }

    const handlePaginate = async (direction: TDirection) => {
        if (direction === 1 && isNextDisabled()) {
            return;
        }
        if (direction === -1 && isPrevDisabled()) {
            return;
        }
        const queryString = qs.stringify({
            page: page + direction
        });

        router.push(`${redirectUrl}?${queryString}`);
    }

    return (
        <div className="flex justify-center mt-12 gap-4">
            <button
                onClick={() => handlePaginate(-1)}
                className={`${isPrevDisabled() ? 'disabled' : ''} bg-primary py-2 px-4 text-white w-24 rounded`}>
                Previous
            </button>
            <button
                onClick={() => handlePaginate(1)}
                className={`${isNextDisabled() ? 'disabled' : ''} bg-primary py-2 px-4 text-white w-24 rounded`}>
                Next
            </button>
        </div>
    );
}

export default Pagination;