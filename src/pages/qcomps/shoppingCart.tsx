import { useState } from 'react';

export default function RequestTracker() {
    const [pending, setPending] = useState(0);
    const [completed, setCompleted] = useState(0);

    async function handleClick() {
        setPending(prevPending => prevPending + 1); // Use functional update
        await delay(2000); // Set delay to 2000ms (2 seconds)
        setPending(prevPending => prevPending - 1); // Use functional update
        setCompleted(prevCompleted => prevCompleted + 1); // Use functional update
    }

    return (
        <>
            <h3>
                Pending: {pending}
            </h3>
            <h3>
                Completed: {completed}
            </h3>
            <button onClick={handleClick}>
                Buy
            </button>
        </>
    );
}

function delay(ms: number) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}
