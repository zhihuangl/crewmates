import { createClient } from '@supabase/supabase-js'

const URL = 'https://cqxdsytqejdsstgxubsu.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxeGRzeXRxZWpkc3N0Z3h1YnN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg1MTc2NTQsImV4cCI6MjAxNDA5MzY1NH0.JUZOqdIdBmphdzquMRuvQHqNdOXNcSqD1VtV02PoXVY';
export const supabase = createClient(URL, API_KEY);