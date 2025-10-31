import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!;

// 🚀 Initialize the Supabase client with React Native–safe settings
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: AsyncStorage, // store sessions in AsyncStorage
    autoRefreshToken: true, // automatically refresh expired tokens
    persistSession: true, // persist login state across app restarts
    detectSessionInUrl: false, // disable URL detection (not needed in RN)
  },
});
