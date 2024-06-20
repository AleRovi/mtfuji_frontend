export interface Booking{
    id?: number;
    userId: number;
    quantity: number;
    check_in: string;
    check_out: string;
    reservationDate: string;
    roomId: number;
    paid: boolean;
    cost: number;
    isPromotion: boolean;
}