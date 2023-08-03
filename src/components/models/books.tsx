export interface Books  {
    url: string;
    name: string;
    isbn: string,
    authors: [];
    numberOfPages: string;
    publisher: string;
    country:string;
    mediaType:string;
    released: string;
    characters: Characters;
    povCharacters: povCharacters;
}

interface Characters{
    character: string[];
}
interface povCharacters{
    povCharacter: string[];
}