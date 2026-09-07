export interface CreateNotificationDTO {
    title: string;
    message: string;
    type?: string;
    userId: string;
}

export interface UpdateNotificationDTO {
    title?: string;
    message?: string;
    type?: string | null;
    isRead?: boolean;
}
