import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cbqyqqvdszupkuypmlbd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNicXlxcXZkc3p1cGt1eXBtbGJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ0MjAxMjUsImV4cCI6MjAzOTk5NjEyNX0.uGyEhPOEXu7_jtxt0DqrFXGBvGRx3rw7qMctUJQZRJk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
