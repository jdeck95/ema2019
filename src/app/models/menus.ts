export interface Menus {
    Eintrag?: (MenuEntity)[] | null;
}
export interface MenuEntity {
    ID: string;
    Name: string;
    Datum: string;
    Essen: string;
    Art: string;
    Preise: string;
    Sort: string;
    Tag: string;
    Zusatzstoffe: string;
    Zusatzstoffenr: string;
}
