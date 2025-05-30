import { supabase } from '../../lib/supabase'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { familyGroupId } = req.body
    
    try {
      const { data, error } = await supabase
        .from('guests')
        .select('*')
        .eq('family_group_id', familyGroupId)
      
      if (error) throw error
      
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}