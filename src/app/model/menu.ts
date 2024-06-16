import { Food } from "./food";

export interface Menu{
    snacks : Food[];
    sandwiches : Food[];
    salads : Food[];
    desserts : Food[];
    friedFoods : Food[];
    specialFoods : Food[];
}