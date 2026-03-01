import { createClient } from '@supabase/supabase-js';

// Using credentials provided by the user
const supabaseUrl = 'https://fnzmxwmorlhxolvrjulg.supabase.co';
const supabaseAnonKey = 'sb_publishable_bMLifMD1WBbypRa55zrIiQ_rXSNUUKO';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
