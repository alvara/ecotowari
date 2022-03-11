// used across application for accessing the data here.
import {createClient} from '@supabase/supabase-js'

export default createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_API_KEY,
)