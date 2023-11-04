import { createClient } from '@supabase/supabase-js'

const URL = 'https://uppfvktzszxjbrrutiab.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwcGZ2a3R6c3p4amJycnV0aWFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg2OTc4NDIsImV4cCI6MjAxNDI3Mzg0Mn0.DFLcS0uqdyKyG8nUAUgx-M05fFhTMKhZE6wdzhvJyxs';
export const supabase = createClient(URL, API_KEY);