/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            clipPath: {
                'custom-path': 'polygon(25% 40%, 26% 12%, 44% 33%, 52% 10%, 54% 31%, 81% 13%, 67% 35%, 96% 42%, 76% 56%, 92% 74%, 63% 65%, 70% 92%, 53% 71%, 41% 93%, 33% 68%, 6% 82%, 23% 55%, 4% 34%)',
            },
            scale: {
                '150': '1.5',
                '200': '2',
            },
        },
    },
    variants: {
        extend: {
            scale: ['group-hover'],
        },
    },
    plugins: [],
}