import { heroes } from "../data/heros";

export const getHerosByName=(name='')=>{
    name=name.toLocaleLowerCase().trim();
    if(name.length===0)return [];
    return heroes.filter(
        hero=>hero.superhero.toLowerCase().includes(name)
    );

}