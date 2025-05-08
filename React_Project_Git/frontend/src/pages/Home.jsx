import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

const sampleProducts = [
    {
        _id: "1",
        title: "Smartphone",
        description: "LaExperience smooth multitasking and vibrant visuals with this feature-packed smartphone. Boasts a high-resolution display, fast processor, long-lasting battery, and an advanced camera system for stunning photos and videos.",
        price: 49099,
        image: "data:image/jpeg;base64,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",
    },
    {
        _id: "2",
        title: "SoundBliss X1",
        description: "HEnjoy immersive audio with the lightweight SoundBliss X1 wireless headphones. Featuring deep bass, noise isolation, and all-day comfort—perfect for music, calls, and gaming on the go.",
        price: 4990,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSv1GmTS_uQQDzcPz8d-C8Ug6F1FZ3hRqaDQ&s",
    },

    {
        _id: "3",
        title: "TimeSync Pro",
        description: "StStay on top of your day with TimeSync Pro, a sleek smartwatch featuring fitness tracking, heart rate monitoring, and smart notifications—perfect for a connected lifestyle.",
        price: 2490,
        image: "https://images.unsplash.com/photo-1461141346587-763ab02bced9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        _id: "4",
        title: "SwiftBook X1",
        description: "Work, stream, and multitask effortlessly with the SwiftBook X1 laptop. Packed with a fast processor, full HD display, and long battery life in a slim, portable design.",
        price: 89900,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL5fzpbW31Qh6YRWNdxXGoEBo7hs-_RNRc0w&shttps://via.placeholder.com/300x200",
    },
    {
        _id: "5",
        title: "EchoBeat Mini",
        description: "Take your music anywhere with the EchoBeat Mini. Delivers rich bass, crisp audio, and wireless freedom in a compact, stylish build",
        price: 6880,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTON5fWf3jN8O4AUabNVZZ9tnMxEp9a1ZJyrw&s",
    },
    {
        _id: "6",
        title: "TabEdge S7",
        description: "The TabEdge S7 combines performance and portability, with a vibrant display, smooth multitasking, and all-day battery—ideal for reading, browsing, and media.",
        price: 79900,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwU4M1c4HYVUBEq7qSO757Xqn3m_8V_QUQIw&s",
    },
    {
        _id: "7",
        title: "DSLR Camera",
        description: "Capture sharp, high-quality images with this versatile DSLR camera. Equipped with a powerful sensor, interchangeable lenses, and advanced manual controls—perfect for beginners and professionals alike.",
        price: 89980,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM49U8G0qbT3FovVKNNRIyvkNhRn2lF6S2Mw&s",
    },
    {
        _id: "8",
        title: "GlideMax M2",
        description: "Experience ultra-smooth navigation with the GlideMax M2. Features ergonomic design, silent clicks, and adjustable DPI for everyday use or gaming.",
        price: 1949,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjzKSV55MngbQ4Ht-NrQ3x2lrGb4Xm1TFLmg&s",
    },
    {
        _id: "9",
        title: "KeyNova RGB",
        description: "Type in style with the KeyNova RGB. Offers tactile keys, multi-color backlighting, and a sturdy build—great for productivity or late-night gaming.",
        price: 3179,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhpxFhp_eR3UVhzbCpmo96j5z46WK_B5LCBw&s",
    },
    {
        _id: "10",
        title: "GameCore Z",
        description: "Level up with GameCore Z, a powerful console delivering high-speed gameplay, 4K graphics, and a vast library of games for endless fun.",
        price: 7999,
        image: "https://digitalmasta.com/wp-content/uploads/2023/02/Fixing-the-blinking-blue-light-on-your-PS4-controller-cover.webp",
    },
    {
        _id: "11",
        title: "Powerful Desktop Computer",
        description: "Equipped with the latest processor, ample RAM, and fast SSD storage, this desktop computer delivers smooth performance for multitasking, gaming, and productivity. Sleek design with modern connectivity options.",
        price: 158000,
        image: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRlc2t0b3AlMjBjb21wdXRlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        _id: "12",
        title: "Instant Camera with Retro Charm",
        description: "Capture memories in seconds with this stylish instant camera. Features easy point-and-shoot functionality, built-in flash, and vibrant photo prints – perfect for parties, travel, and everyday moments.",
        price: 5900,
        image: "https://i.etsystatic.com/6017061/r/il/425b00/1810778557/il_fullxfull.1810778557_3i8k.jpg",
    },

];

function Home() {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const existing = cart.find((item) => item._id === product._id);
        if (existing) {
            setCart(
                cart.map((item) =>
                    item._id === product._id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    return (
        <>
            <h2 className="mb-4 text-center">Products</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {sampleProducts.map((product) => (
                    <div key={product._id} className="col">
                        <ProductCard product={product} addToCart={addToCart} />
                    </div>
                ))}
            </div>
        </>
    );
}

export default Home;
