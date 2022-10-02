import SHOP_DATA from "./shop_data";
import { prisma } from "../server/db/client";

const injectDb = async () => {
    SHOP_DATA.map(category => {
        const item = category.title;
        switch (item) {
            case "Hats":
                const hats = prisma.hats.createMany({
                    data: category.items
                });
                console.log(hats);
                break;
            case "Sneakers":
                const sneakers = prisma.sneakers.createMany({
                    data: category.items
                });
                console.log(sneakers);
                break;
            case "Jackets":
                const jackets = prisma.jackets.createMany({
                    data: category.items
                });
                console.log(jackets);
                break;
            case "Womens":
                const womens = prisma.womens.createMany({
                    data: category.items
                });
                console.log(womens);
                break;
            case "Mens":
                const mens = prisma.mens.createMany({
                    data: category.items
                });
                console.log(mens);
                break;
        }
    })
}

export default injectDb;