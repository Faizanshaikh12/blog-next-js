import {any} from "prop-types";
import {clearTimeout} from "timers";

export const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

export const formatSlug = (slug: string): string => {
    if (typeof slug === 'string') {
        const text = slug.split('-').join(' ');
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
    return '';
}

//
// export const debounce = (fn: (query: string) => void, timeout = 300) => {
//     let timer: NodeJS.Timer;
//     const debounced = (...args: any) => {
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             fn.apply(this, args);
//         }, timeout);
//     };
//     return debounced;
// };