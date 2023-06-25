import type { HtmlString, Nullable, BookingTypeId } from '@/types/utils';

export interface BookingType {
  booking_threshold_minutes: number;
  booking_type_category_id: number;
  created_at: Nullable<string>;
  deleted_at: Nullable<string>;
  description: HtmlString;
  disabled_at: Nullable<string>;
  duration_minutes: number;
  email_reminder_html: string;
  email_reminder_subject: string;
  facebook_share_url: string;
  google_meet_enabled_at: Nullable<string>;
  id: BookingTypeId;
  in_gallery_at: Nullable<string>;
  latest_availability_days: number;
  localized_price: string;
  location: Nullable<string>;
  max_bookings: number;
  meeting_url: Nullable<string>;
  padding_minutes: number;
  payment_platform_id: string;
  price: number;
  private: boolean;
  redirect_url: Nullable<string>;
  title: string;
  updated_at: Nullable<string>;
  url_slug: string;
  url: string;
  user: {
    currency_symbol: string;
    language: 'hu' | 'en';
    lifetime_pro_at: string;
    name: string;
    profile_picture_url: Nullable<string>;
    time_format: 12 | 24;
    timezone: string;
    vanity_path: string;
  };
  user_id: number;
  zoom_enabled_at: Nullable<string>;
}
