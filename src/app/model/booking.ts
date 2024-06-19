export interface Booking{
    id?: number;
    userId: number;
    quantity: number;
    checkIn: string;
    checkOut: string;
    reservationDate: string;
    roomId: number;
    paid: boolean;
    cost: number;
    isPromotion: boolean;
}