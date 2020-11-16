

export const generateRandomNumbersBetween = (min, max, qty) => {
    if(max - min + 1 < qty ) return [];
    let count = 1;
    const generated = {};
    while(count <= qty){
        const rnd = min + Math.floor(Math.random() * (max - min) + 1);
        if(!generated[rnd]){
            generated[rnd] = rnd;
            count++;
        }
    }

    return Object.values(generated);

}