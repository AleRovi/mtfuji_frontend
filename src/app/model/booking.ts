export interface Booking{
    id?: number;
    userId?: number;
    quantity: number;
    check_in: string;
    check_out: string;
    reservation_date: string;
    roomId: number;
    paid: boolean;
    cost: number;
    isPromotion: boolean;
}