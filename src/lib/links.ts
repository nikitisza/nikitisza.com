// Links used by the new design (playground).
export const YOUTUBE = 'https://www.youtube.com/channel/UCJQqF6pb2xj3yekYpc1QkZQ?sub_confirmation=1';
export const NEWSLETTER = 'https://nikitisza.substack.com/';
export const SHOP = 'https://nikitisza.gumroad.com/';

// Display helpers for post lists.
export const shortDate = (date?: Date) =>
  date?.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });

export const readMinutes = (body?: string) =>
  Math.max(1, Math.ceil((body ?? '').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length / 200));
