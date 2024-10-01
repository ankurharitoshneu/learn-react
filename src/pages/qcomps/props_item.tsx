import { ItemProps } from "@/types/item";

function Item({ name, isPacked }: ItemProps) {
    return (
        <li className="item">
            {isPacked ? (
                <del>{name} ✔</del>  // Show the item as packed with a strikethrough and checkmark
            ) : (
                name // Show the item as unpacked without modification
            )}
        </li>
    );
}

export default function PackingList() {
    return (
        <section>
            <h1>My Packing List</h1>
            <ul>
                <Item isPacked={true} name="Laptop" />
                <Item isPacked={true} name="Chargers" />
                <Item isPacked={false} name="Socks" />
            </ul>
        </section>
    );
}
